import { supabase, dbHelpers } from '@/lib/supabase';

// Email notification templates
const EMAIL_TEMPLATES = {
  CARE_REMINDER: {
    subject: (tattooName) => `🎨 Time for your ${tattooName} care routine`,
    body: (data) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B5CF6;">It's care time for your ${data.tattooName}! 💜</h2>
        
        <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h3>📋 Today's Care Tasks</h3>
          <ul>
            ${data.tasks.map(task => `<li style="margin: 8px 0;">${task.icon} ${task.name} - ${task.description}</li>`).join('')}
          </ul>
        </div>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>🗓️ Day ${data.dayNumber} of your healing journey</strong></p>
          <p><strong>🏥 Current Stage:</strong> ${data.healingStage}</p>
          <p><strong>⏰ Estimated completion:</strong> ${data.estimatedTime} minutes</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${data.trackingUrl}" style="background: linear-gradient(45deg, #8B5CF6, #a855f7); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            📱 Log Your Care Session
          </a>
        </div>
        
        <hr style="margin: 30px 0; border: none; height: 1px; background: #e5e7eb;">
        
        <div style="color: #6b7280; font-size: 14px;">
          <p>💡 <strong>Pro tip:</strong> ${data.proTip}</p>
          <p>📞 Questions? Reply to this email or contact your tattoo artist.</p>
          <p style="margin-top: 20px;">
            <a href="${data.preferencesUrl}" style="color: #8B5CF6;">Update notification preferences</a> | 
            <a href="${data.unsubscribeUrl}" style="color: #6b7280;">Unsubscribe</a>
          </p>
        </div>
      </div>
    `
  },

  HEALING_MILESTONE: {
    subject: (tattooName, milestone) => `🎉 ${tattooName} has reached a healing milestone!`,
    body: (data) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">Congratulations! 🎉</h2>
        
        <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center;">
          <h3>Your ${data.tattooName} has entered the ${data.newStage} stage!</h3>
          <p style="font-size: 18px; margin: 15px 0;">Day ${data.dayNumber} milestone reached ✨</p>
        </div>
        
        <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #15803d;">What this means:</h4>
          <ul style="color: #166534;">
            ${data.stageInfo.map(info => `<li style="margin: 5px 0;">${info}</li>`).join('')}
          </ul>
        </div>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4>📋 Updated Care Instructions:</h4>
          <ul>
            ${data.newInstructions.map(instruction => `<li style="margin: 5px 0;">${instruction}</li>`).join('')}
          </ul>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${data.progressUrl}" style="background: linear-gradient(45deg, #10b981, #34d399); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            📊 View Your Progress
          </a>
        </div>
      </div>
    `
  },

  QUIZ_REMINDER: {
    subject: () => `🧠 New aftercare quiz available - Test your knowledge!`,
    body: (data) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B5CF6;">Ready to bust some myths? 🤔</h2>
        
        <div style="background: linear-gradient(135deg, #8B5CF6, #a855f7); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h3>📚 New Quiz: ${data.quizTitle}</h3>
          <p>${data.quizDescription}</p>
          <p><strong>⏱️ Estimated time:</strong> ${data.estimatedMinutes} minutes</p>
          <p><strong>🏆 XP Reward:</strong> ${data.xpReward} points</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${data.quizUrl}" style="background: linear-gradient(45deg, #8B5CF6, #a855f7); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            🚀 Take Quiz Now
          </a>
        </div>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>📈 Your Stats:</strong></p>
          <ul>
            <li>Quizzes completed: ${data.userStats.completed}</li>
            <li>Current streak: ${data.userStats.streak} days</li>
            <li>Myths busted: ${data.userStats.mythsBusted}</li>
            <li>Knowledge level: ${data.userStats.level}</li>
          </ul>
        </div>
      </div>
    `
  }
};

// Notification service class
export class NotificationService {
  constructor() {
    this.baseUrl = window.location.origin;
  }

  // Schedule a care reminder notification
  async scheduleCareReminder(userId, tattooId, reminderData) {
    try {
      const { data: tattoo } = await supabase
        .from('tattoos')
        .select('*, users(*)')
        .eq('id', tattooId)
        .eq('user_id', userId)
        .single();

      if (!tattoo) throw new Error('Tattoo not found');

      const scheduledFor = new Date(reminderData.scheduledFor);
      const dayNumber = Math.floor((scheduledFor - new Date(tattoo.date_received)) / (1000 * 60 * 60 * 24)) + 1;

      const emailData = {
        tattooName: tattoo.title,
        dayNumber,
        healingStage: tattoo.healing_stage,
        tasks: reminderData.tasks || [],
        estimatedTime: reminderData.estimatedTime || 5,
        trackingUrl: `${this.baseUrl}/aftercare-demo`,
        preferencesUrl: `${this.baseUrl}/settings`,
        unsubscribeUrl: `${this.baseUrl}/unsubscribe`,
        proTip: this.getProTipForStage(tattoo.healing_stage)
      };

      const { data, error } = await dbHelpers.scheduleNotification(userId, {
        tattoo_id: tattooId,
        type: 'care_reminder',
        title: EMAIL_TEMPLATES.CARE_REMINDER.subject(tattoo.title),
        message: EMAIL_TEMPLATES.CARE_REMINDER.body(emailData),
        scheduled_for: scheduledFor.toISOString(),
        metadata: {
          email: tattoo.users.email,
          tattoo_name: tattoo.title,
          reminder_type: reminderData.type || 'general'
        }
      });

      return { data, error };
    } catch (error) {
      console.error('Error scheduling care reminder:', error);
      return { data: null, error };
    }
  }

  // Schedule milestone notification
  async scheduleHealingMilestone(userId, tattooId, milestoneData) {
    try {
      const { data: tattoo } = await supabase
        .from('tattoos')
        .select('*, users(*)')
        .eq('id', tattooId)
        .eq('user_id', userId)
        .single();

      if (!tattoo) throw new Error('Tattoo not found');

      const emailData = {
        tattooName: tattoo.title,
        newStage: milestoneData.newStage,
        dayNumber: milestoneData.dayNumber,
        stageInfo: this.getStageInfo(milestoneData.newStage),
        newInstructions: this.getStageInstructions(milestoneData.newStage),
        progressUrl: `${this.baseUrl}/aftercare-demo`
      };

      const { data, error } = await dbHelpers.scheduleNotification(userId, {
        tattoo_id: tattooId,
        type: 'milestone',
        title: EMAIL_TEMPLATES.HEALING_MILESTONE.subject(tattoo.title, milestoneData.newStage),
        message: EMAIL_TEMPLATES.HEALING_MILESTONE.body(emailData),
        scheduled_for: milestoneData.scheduledFor,
        metadata: {
          email: tattoo.users.email,
          milestone: milestoneData.newStage,
          day_number: milestoneData.dayNumber
        }
      });

      return { data, error };
    } catch (error) {
      console.error('Error scheduling milestone notification:', error);
      return { data: null, error };
    }
  }

  // Schedule quiz reminder
  async scheduleQuizReminder(userId, quizData) {
    try {
      const { data: user } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (!user) throw new Error('User not found');

      // Get user quiz stats
      const { data: quizStats } = await supabase
        .from('quiz_progress')
        .select('*')
        .eq('user_id', userId);

      const userStats = this.calculateUserStats(quizStats || []);

      const emailData = {
        quizTitle: quizData.title,
        quizDescription: quizData.description,
        estimatedMinutes: quizData.estimatedMinutes || 5,
        xpReward: quizData.xpReward || 50,
        quizUrl: `${this.baseUrl}/aftercare-demo`,
        userStats
      };

      const { data, error } = await dbHelpers.scheduleNotification(userId, {
        type: 'quiz_reminder',
        title: EMAIL_TEMPLATES.QUIZ_REMINDER.subject(),
        message: EMAIL_TEMPLATES.QUIZ_REMINDER.body(emailData),
        scheduled_for: quizData.scheduledFor,
        metadata: {
          email: user.email,
          quiz_id: quizData.quizId
        }
      });

      return { data, error };
    } catch (error) {
      console.error('Error scheduling quiz reminder:', error);
      return { data: null, error };
    }
  }

  // Auto-schedule notifications for a new tattoo
  async setupTattooNotifications(userId, tattooId) {
    try {
      const { data: tattoo } = await supabase
        .from('tattoos')
        .select('*')
        .eq('id', tattooId)
        .eq('user_id', userId)
        .single();

      if (!tattoo) throw new Error('Tattoo not found');

      const tattooDate = new Date(tattoo.date_received);
      const notifications = [];

      // Schedule care reminders for the first 2 weeks (critical period)
      for (let day = 1; day <= 14; day++) {
        const reminderDate = new Date(tattooDate);
        reminderDate.setDate(reminderDate.getDate() + day);
        
        // Morning and evening reminders for first 7 days
        if (day <= 7) {
          // Morning reminder
          const morningReminder = new Date(reminderDate);
          morningReminder.setHours(9, 0, 0, 0);
          
          notifications.push(this.scheduleCareReminder(userId, tattooId, {
            scheduledFor: morningReminder,
            type: 'morning',
            tasks: this.getDailyTasks(day, 'morning'),
            estimatedTime: 5
          }));

          // Evening reminder
          const eveningReminder = new Date(reminderDate);
          eveningReminder.setHours(20, 0, 0, 0);
          
          notifications.push(this.scheduleCareReminder(userId, tattooId, {
            scheduledFor: eveningReminder,
            type: 'evening', 
            tasks: this.getDailyTasks(day, 'evening'),
            estimatedTime: 3
          }));
        } else {
          // Daily reminder for days 8-14
          const dailyReminder = new Date(reminderDate);
          dailyReminder.setHours(10, 0, 0, 0);
          
          notifications.push(this.scheduleCareReminder(userId, tattooId, {
            scheduledFor: dailyReminder,
            type: 'daily',
            tasks: this.getDailyTasks(day, 'daily'),
            estimatedTime: 5
          }));
        }
      }

      // Schedule milestone notifications
      const milestones = [
        { day: 3, stage: 'healing' },
        { day: 14, stage: 'settling' },
        { day: 42, stage: 'mature' }
      ];

      milestones.forEach(milestone => {
        const milestoneDate = new Date(tattooDate);
        milestoneDate.setDate(milestoneDate.getDate() + milestone.day);
        milestoneDate.setHours(12, 0, 0, 0);

        notifications.push(this.scheduleHealingMilestone(userId, tattooId, {
          scheduledFor: milestoneDate.toISOString(),
          newStage: milestone.stage,
          dayNumber: milestone.day
        }));
      });

      // Schedule weekly quiz reminders for 6 weeks
      for (let week = 1; week <= 6; week++) {
        const quizDate = new Date(tattooDate);
        quizDate.setDate(quizDate.getDate() + (week * 7));
        quizDate.setHours(19, 0, 0, 0);

        notifications.push(this.scheduleQuizReminder(userId, {
          scheduledFor: quizDate.toISOString(),
          title: `Week ${week} Knowledge Check`,
          description: `Test your understanding of tattoo care principles`,
          quizId: `week_${week}_quiz`,
          estimatedMinutes: 5,
          xpReward: 100
        }));
      }

      const results = await Promise.all(notifications);
      return {
        success: true,
        scheduledCount: results.filter(r => !r.error).length,
        errors: results.filter(r => r.error).map(r => r.error)
      };
    } catch (error) {
      console.error('Error setting up tattoo notifications:', error);
      return { success: false, error };
    }
  }

  // Helper methods
  getProTipForStage(stage) {
    const tips = {
      fresh: "Keep your tattoo clean and avoid submerging in water. Pat dry, don't rub!",
      healing: "Your tattoo may start to peel. Don't pick at it - let it heal naturally.",
      settling: "The tattoo is settling in. Keep moisturizing but reduce frequency.",
      mature: "Your tattoo is fully healed! Maintain with regular moisturizing and sun protection."
    };
    return tips[stage] || tips.fresh;
  }

  getStageInfo(stage) {
    const info = {
      healing: [
        "The initial inflammation has subsided",
        "Scabbing and light peeling may occur", 
        "Reduced risk of infection",
        "Colors may appear dull temporarily"
      ],
      settling: [
        "Most of the healing is complete",
        "Skin is rebuilding its protective layers",
        "Colors will start to return to their true vibrancy",
        "Less frequent care routine needed"
      ],
      mature: [
        "Your tattoo is fully healed!",
        "Skin has completely regenerated",
        "Colors are at their final appearance",
        "Normal skin care routine can resume"
      ]
    };
    return info[stage] || [];
  }

  getStageInstructions(stage) {
    const instructions = {
      healing: [
        "Clean 2x daily with gentle soap",
        "Apply thin layer of healing ointment",
        "Avoid scratching or picking",
        "Continue avoiding swimming/soaking"
      ],
      settling: [
        "Clean 1x daily or as needed",
        "Switch to unscented lotion",
        "Begin gentle sun protection",
        "Resume light exercise"
      ],
      mature: [
        "Normal hygiene routine",
        "Daily moisturizing recommended",
        "Use sunscreen for color protection",
        "All activities can resume"
      ]
    };
    return instructions[stage] || [];
  }

  getDailyTasks(day, timeOfDay) {
    const baseTasks = {
      morning: [
        { icon: '🧼', name: 'Gentle Cleaning', description: 'Clean with lukewarm water and antibacterial soap' },
        { icon: '🧴', name: 'Apply Ointment', description: 'Thin layer of healing ointment' }
      ],
      evening: [
        { icon: '🧼', name: 'Evening Clean', description: 'Remove any buildup gently' },
        { icon: '📷', name: 'Progress Photo', description: 'Document healing progress' }
      ],
      daily: [
        { icon: '🧼', name: 'Daily Clean', description: 'Gentle cleaning and moisturizing' },
        { icon: '🛡️', name: 'Protection Check', description: 'Ensure proper coverage and protection' }
      ]
    };

    return baseTasks[timeOfDay] || baseTasks.daily;
  }

  calculateUserStats(quizData) {
    return {
      completed: quizData.length,
      streak: 5, // Calculate actual streak
      mythsBusted: quizData.reduce((sum, quiz) => sum + (quiz.myths_busted || 0), 0),
      level: Math.floor(quizData.reduce((sum, quiz) => sum + quiz.score, 0) / 100) + 1
    };
  }
}

// Export singleton instance
export default new NotificationService();