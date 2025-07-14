export interface Review {
  id: string
  author: string
  rating: 5 | 4 | 3 | 2 | 1
  text: string
  date: string
  response?: string
  photos?: string[]
  verified?: boolean
  location?: string
}

export const googleReviews: Review[] = [
  {
    id: "leivy-cortez",
    author: "Leivy Cortez",
    rating: 5,
    text: "I walked in without any idea of what I wanted, and Jose created an amazing design just by talking with me. He taught me so much about tattoos that I never would've known otherwise. I had no idea Maryland doesn't require a license to tattoo, but Jose showed me what quality work looks like.",
    date: "2024-08-15",
    response: "Thank you so much! It means a lot that you trusted me to bring your idea to life. I always want to make sure my clients not only walk away with a tattoo they love but also feel informed and confident about the process.",
    verified: true
  },
  {
    id: "bailey-hoak",
    author: "Bailey Hoak",
    rating: 5,
    text: "Jose is an amazing artist! After looking at many artists in the area, his line work and black and gray shading really stood out—they're so smooth and consistent. That's why I chose him for my first tattoo. Now I have three tattoos from him, and each one has exceeded my expectations.",
    date: "2024-07-20",
    response: "Thank you so much, Bailey! I really appreciate your kind words and your trust in my work. It means a lot to know that you love your tattoos and have had a great experience each time.",
    verified: true,
    photos: ["bailey-tattoo-1.jpg"]
  },
  {
    id: "erica-correll",
    author: "Erica Correll", 
    rating: 5,
    text: "I loved how Jose did an amazing job on my tattoo! I love it so much! Also, he made sure I was doing okay during the process of the tattoo and putting a funny tv show to distract me from looking at the needle going into the skin.",
    date: "2023-12-10",
    response: "Thank you so much for your amazing feedback! I'm thrilled you love your tattoo and that I could help make the process more comfortable for you. I'm glad the funny TV show helped too!",
    verified: true,
    photos: ["erica-tattoo-1.jpg"]
  },
  {
    id: "ronnya-x",
    author: "Ronnya X",
    rating: 5,
    text: "Jose is the best! The setting of the atmosphere is very comfortable, clean and unique. Although this is not my first tattoo however the location of the tattoo was painful for me but he talked me through it and he was very patient and stopped when I needed breaks.",
    date: "2024-04-15",
    response: "Thank you so much for your kind words! I'm thrilled I could make your experience comfortable and create a design you love. Your satisfaction means the world to me!",
    verified: true,
    photos: ["ronnya-tattoo-1.jpg"]
  },
  {
    id: "reid-clark",
    author: "Reid Clark",
    rating: 5,
    text: "Jose was great to work with! He listened extremely well and offered great advice.",
    date: "2024-12-28",
    response: "Thank you so much for your kind words! It was a pleasure working with you. I'm really glad I could help and that you felt heard throughout the process.",
    verified: true,
    photos: ["reid-tattoo-1.jpg"]
  },
  {
    id: "moon-gray",
    author: "Moon Gray",
    rating: 5,
    text: "Jose is a great artist!! Patient, skillful and very easy to communicate with. I presented the piece I wanted to get and he was able to perfectly transform it in his style! He also was very honest with any concerns about placement or design modifications.",
    date: "2023-11-20",
    response: "Thank you so much! I always strive to make sure every piece is exactly what my clients envision while maintaining the highest quality standards.",
    verified: true
  },
  {
    id: "thee-arch-angel",
    author: "Thee Arch Angel",
    rating: 5,
    text: "Great tattoo artist, gave me my best tattoo, took the time to help the tattoo look and fit amazing on my body.",
    date: "2024-08-05",
    response: "Thank you so much for your kind words! I'm really glad you love your tattoo and that we could make it fit just right. It was a pleasure working with you.",
    verified: true
  },
  {
    id: "joaquin-e",
    author: "Joaquin E.",
    rating: 5,
    text: "Been going to Jose for all of my tattoos and it has been a great experience every time. Quality tattoos and very friendly. Check him out!",
    date: "2023-10-15",
    response: "Thank you so much for your continued trust and support! It's always a pleasure working with you, and I'm glad you've had a great experience every time.",
    verified: true
  },
  {
    id: "kristina-strothers",
    author: "Kristina Strothers",
    rating: 5,
    text: "I've gotten two tattoos with Jose so far and will keep going back as long as he'll book me haha. I am that person that takes forever to work out my tattoos and what I want. He's super professional and very patient when making the designs and working with my indecisiveness.",
    date: "2021-11-10",
    verified: true
  },
  {
    id: "jack-simcock",
    author: "Jack Simcock", 
    rating: 5,
    text: "I've used Jose for every tattoo I've gotten so far and he is the best. A nice guy, gives advice and is very unique in his design and design ideas. Very approachable and produces beautiful work. I don't plan on going with anyone else.",
    date: "2021-09-25",
    response: "Thank you so much for your kind words and loyalty—it truly means a lot! I've really enjoyed working on your tattoos and learning about golf along the way!",
    verified: true
  },
  {
    id: "danny-mercy",
    author: "Danny Mercy",
    rating: 5,
    text: "Jose was awesome to work with overall! Consulted me with my design and redrew/redesigned the picture references I had initially brought into the shop, and he also recommended a better spot for my tattoo therefore I also relocated my tattoo to a better spot.",
    date: "2021-08-20",
    verified: true,
    photos: ["danny-tattoo-1.jpg"]
  },
  {
    id: "connie-love-tarot",
    author: "Connie Love & Tarot",
    rating: 5,
    text: "Jose is the goat man very talented tattoo artist located at big city art laurel Md. He is very warm welcoming & most of all professional. His area is very clean sanitized. I'm just amazed by how detailed he is and fast. My second time getting tatted by him.",
    date: "2021-07-30",
    verified: true
  },
  {
    id: "pheben-bilal",
    author: "Pheben Bilal",
    rating: 5,
    text: "Jose is not only a talented tattoo artist he also makes you feel very comfortable in his chair. He listens to your ideas and even offers good suggestions you may have not thought of. He's amazing!",
    date: "2021-06-15",
    response: "Thank you so much for your kind words! I'm glad I could make you feel comfortable and help bring your ideas to life. It's always a pleasure collaborating with you!",
    verified: true
  },
  {
    id: "kalkidan-mekonnen",
    author: "Kalkidan Mekonnen",
    rating: 5,
    text: "I had a cover up done by Jose. He did an amazing job. I will definitely be coming back! The staff is friendly and the shop is clean/professional.",
    date: "2023-11-05",
    response: "Thank you for the great feedback! I'm so glad you're happy with your cover-up—it was a pleasure working with you. We pride ourselves on maintaining a clean, professional environment.",
    verified: true
  },
  {
    id: "ashanti-n",
    author: "Ashanti N",
    rating: 5,
    text: "I love my tattoo. The artist Jose does great work and ensures the customer is satisfied with their results. I will be returning for my next tattoo!",
    date: "2021-05-20",
    verified: true
  },
  {
    id: "at-mtber1384",
    author: "A T",
    rating: 5,
    text: "Excellent work and amazing service. He was really easy to talk over ideas with during the initial consultation and gave solid advice on the placement of the tattoo. During the tattoo process he did a great job making sure I was comfortable. And he worked incredibly fast and still held a lot of detail in the work.",
    date: "2021-04-10",
    verified: true
  },
  {
    id: "josh-baylor",
    author: "Josh Baylor",
    rating: 5,
    text: "Sueno is Very professional, pays close attention to details, And gives you a reasonable price.",
    date: "2023-12-20",
    response: "Thank you for your kind words! I always strive to deliver quality work at a fair price, and I'm glad that attention to detail stands out.",
    verified: true,
    photos: ["josh-tattoo-1.jpg"]
  },
  {
    id: "samantha-emnet-diy",
    author: "Samantha and Emnet DIY",
    rating: 5,
    text: "10/10 100% loved getting tatted by Jose he made the time go by fast it was a fun and a great experience he answered all of my questions",
    date: "2023-11-15",
    response: "Thank you so much for the amazing feedback! I'm glad I could make your experience fun and enjoyable. It was a pleasure answering your questions!",
    verified: true
  },
  {
    id: "aaron-andrews",
    author: "Aaron Andrews",
    rating: 5,
    text: "10/10 Sueno Tattoo brought my vision to life !!!!",
    date: "2024-07-10",
    response: "Thank you, Aaron! I'm so glad I could bring your vision to life! Appreciate your support, and I'd love to work with you again in the future!",
    verified: true
  },
  {
    id: "nick-paulter",
    author: "Nick Paulter",
    rating: 5,
    text: "I've gotten 5 different tattoos and all of them look amazing. Coolest tattoo artist I've been to.",
    date: "2021-03-15",
    response: "Thank you so much for your continued trust! It's been amazing working on all your pieces.",
    verified: true
  }
]

// Featured reviews for homepage
export const featuredReviews: Review[] = [
  googleReviews.find(r => r.id === "bailey-hoak")!,
  googleReviews.find(r => r.id === "erica-correll")!,
  googleReviews.find(r => r.id === "reid-clark")!,
  googleReviews.find(r => r.id === "aaron-andrews")!,
  googleReviews.find(r => r.id === "jack-simcock")!,
  googleReviews.find(r => r.id === "joaquin-e")!
]

// Review statistics
export const reviewStats = {
  totalReviews: googleReviews.length,
  averageRating: 5.0,
  fiveStarCount: googleReviews.filter(r => r.rating === 5).length,
  responseRate: Math.round((googleReviews.filter(r => r.response).length / googleReviews.length) * 100),
  verifiedReviews: googleReviews.filter(r => r.verified).length
}

// Recent reviews (last 6 months)
export const recentReviews = googleReviews.filter(review => {
  const reviewDate = new Date(review.date)
  const sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
  return reviewDate >= sixMonthsAgo
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())