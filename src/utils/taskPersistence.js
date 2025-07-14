/**
 * Task Persistence Utility
 * Handles storing and retrieving task completion data from localStorage
 * with support for expiry dates and daily task reset logic
 */

const STORAGE_KEY = 'sueno_tattoo_task_completions';
const STORAGE_VERSION = '1.0';

/**
 * Get the current date in YYYY-MM-DD format
 */
const getCurrentDateKey = () => {
  return new Date().toISOString().split('T')[0];
};

/**
 * Check if a stored completion is still valid based on task frequency
 */
const isCompletionValid = (completion, task) => {
  if (!completion || !completion.timestamp) return false;
  
  const completionDate = new Date(completion.timestamp);
  const now = new Date();
  
  // For daily tasks, completion is only valid for the same day
  if (task?.frequency === 'daily' || task?.frequency === 'twice_daily') {
    const completionDateKey = completionDate.toISOString().split('T')[0];
    const currentDateKey = getCurrentDateKey();
    return completionDateKey === currentDateKey;
  }
  
  // For other frequencies, check based on task-specific logic
  switch (task?.frequency) {
    case 'weekly':
      const weekDiff = Math.floor((now - completionDate) / (1000 * 60 * 60 * 24 * 7));
      return weekDiff < 1;
    case 'monthly':
      const monthDiff = (now.getFullYear() - completionDate.getFullYear()) * 12 
                       + (now.getMonth() - completionDate.getMonth());
      return monthDiff < 1;
    default:
      // For one-time tasks, completion is permanent
      return true;
  }
};

/**
 * Get stored task completions from localStorage
 */
export const getStoredCompletions = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return {};
    
    const data = JSON.parse(stored);
    
    // Check version compatibility
    if (data.version !== STORAGE_VERSION) {
      console.log('Task completion storage version mismatch, clearing data');
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    
    return data.completions || {};
  } catch (error) {
    console.error('Error reading task completions from storage:', error);
    return {};
  }
};

/**
 * Save task completions to localStorage
 */
const saveCompletions = (completions) => {
  try {
    const data = {
      version: STORAGE_VERSION,
      completions,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving task completions to storage:', error);
  }
};

/**
 * Mark a task as completed
 */
export const markTaskCompleted = (taskId, taskData = {}) => {
  const completions = getStoredCompletions();
  
  const completion = {
    taskId,
    timestamp: new Date().toISOString(),
    dateKey: getCurrentDateKey(),
    taskData: {
      frequency: taskData.frequency,
      category: taskData.category,
      priority: taskData.priority
    }
  };
  
  // For daily tasks, store by date to allow multiple completions per day if needed
  if (taskData.frequency === 'daily' || taskData.frequency === 'twice_daily') {
    const dateKey = getCurrentDateKey();
    if (!completions[dateKey]) {
      completions[dateKey] = {};
    }
    completions[dateKey][taskId] = completion;
  } else {
    // For other tasks, store directly by taskId
    completions[taskId] = completion;
  }
  
  saveCompletions(completions);
  return completion;
};

/**
 * Check if a task is completed (and still valid)
 */
export const isTaskCompleted = (taskId, taskData = {}) => {
  const completions = getStoredCompletions();
  
  let completion;
  
  // For daily tasks, check today's completions
  if (taskData.frequency === 'daily' || taskData.frequency === 'twice_daily') {
    const dateKey = getCurrentDateKey();
    completion = completions[dateKey]?.[taskId];
  } else {
    completion = completions[taskId];
  }
  
  return completion && isCompletionValid(completion, taskData);
};

/**
 * Get all completed task IDs that are still valid
 */
export const getValidCompletedTasks = (allTasks = []) => {
  const completions = getStoredCompletions();
  const validCompletedTasks = new Set();
  
  // Check direct task completions
  Object.entries(completions).forEach(([key, value]) => {
    if (typeof value === 'object' && value.taskId) {
      // Direct task completion
      const task = allTasks.find(t => t.id === value.taskId);
      if (isCompletionValid(value, task)) {
        validCompletedTasks.add(value.taskId);
      }
    } else if (typeof value === 'object') {
      // Date-based completions (daily tasks)
      Object.entries(value).forEach(([taskId, completion]) => {
        const task = allTasks.find(t => t.id === taskId);
        if (isCompletionValid(completion, task)) {
          validCompletedTasks.add(taskId);
        }
      });
    }
  });
  
  return validCompletedTasks;
};

/**
 * Get completion statistics for a date range
 */
export const getCompletionStats = (days = 7) => {
  const completions = getStoredCompletions();
  const stats = {
    totalCompletions: 0,
    dailyCompletions: {},
    streakCount: 0,
    completionRate: 0
  };
  
  const today = new Date();
  
  // Calculate daily completions for the past N days
  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];
    
    const dayCompletions = completions[dateKey] || {};
    const completionCount = Object.keys(dayCompletions).length;
    
    stats.dailyCompletions[dateKey] = completionCount;
    stats.totalCompletions += completionCount;
  }
  
  // Calculate current streak (consecutive days with completions)
  let currentStreak = 0;
  const currentDateKey = getCurrentDateKey();
  
  for (let i = 0; i < 30; i++) { // Check up to 30 days back
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];
    
    const dayCompletions = completions[dateKey] || {};
    
    if (Object.keys(dayCompletions).length > 0) {
      currentStreak++;
    } else {
      break;
    }
  }
  
  stats.streakCount = currentStreak;
  stats.completionRate = days > 0 ? Math.round((stats.totalCompletions / days) * 100) / 100 : 0;
  
  return stats;
};

/**
 * Clear old completions (cleanup function)
 */
export const cleanupOldCompletions = (daysToKeep = 90) => {
  const completions = getStoredCompletions();
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
  
  const cleanedCompletions = {};
  
  Object.entries(completions).forEach(([key, value]) => {
    if (key.match(/^\d{4}-\d{2}-\d{2}$/)) {
      // Date-based key
      const keyDate = new Date(key);
      if (keyDate >= cutoffDate) {
        cleanedCompletions[key] = value;
      }
    } else {
      // Direct task completion
      if (value.timestamp) {
        const completionDate = new Date(value.timestamp);
        if (completionDate >= cutoffDate) {
          cleanedCompletions[key] = value;
        }
      } else {
        // Keep non-dated completions (permanent tasks)
        cleanedCompletions[key] = value;
      }
    }
  });
  
  saveCompletions(cleanedCompletions);
  return cleanedCompletions;
};

/**
 * Reset daily tasks for testing purposes
 */
export const resetDailyTasks = () => {
  const completions = getStoredCompletions();
  const dateKey = getCurrentDateKey();
  
  if (completions[dateKey]) {
    delete completions[dateKey];
    saveCompletions(completions);
  }
};

/**
 * Clear all task completions
 */
export const clearAllCompletions = () => {
  localStorage.removeItem(STORAGE_KEY);
};