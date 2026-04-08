//based on month
  const signs = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
  ];
 //based on date
   const compliments = [
  "You have an amazing personality.",
  "Your smile can brighten anyone’s day.",
  "You are incredibly talented.",
  "You have a great sense of humor.",
  "You are very kind-hearted.",
  "You inspire people around you.",
  "You are stronger than you think.",
  "You have a beautiful soul.",
  "You are very intelligent.",
  "You make people feel comfortable.",
  "You are full of positive energy.",
  "You have a unique style.",
  "You are very creative.",
  "You handle situations wisely.",
  "You are a great listener.",
  "You bring out the best in others.",
  "You are very confident.",
  "You have a magnetic personality.",
  "You are very hardworking.",
  "You spread happiness wherever you go.",
  "You are a problem solver.",
  "You are very thoughtful.",
  "You have a great attitude.",
  "You are very reliable.",
  "You make a difference in people’s lives.",
  "You are full of potential.",
  "You have a great vision.",
  "You are naturally charming.",
  "You are very supportive.",
  "You are one of a kind.",
  "You are destined for success."
];
//size 20
const victimCompliments = [
  "You always do good for others, but rarely get the same in return.",
  "You care deeply, even when people take you for granted.",
  "You give your best, even when no one notices.",
  "You are always there for people, but they are not always there for you.",
  "You forgive easily, even when others don’t deserve it.",
  "You put others first, even when you are hurting inside.",
  "You stay loyal, even when people don’t value it.",
  "You try to make everyone happy, but forget about yourself.",
  "You trust people easily, even after being hurt.",
  "You always support others, but feel alone sometimes.",
  "You handle pain quietly while making others smile.",
  "You deserve better than what you usually receive.",
  "You give love selflessly, even when it’s not returned.",
  "You stay kind in a world that isn’t always kind to you.",
  "You sacrifice your happiness for others too often.",
  "You keep trying, even when people disappoint you.",
  "You have a big heart, even if it gets hurt often.",
  "You understand everyone, but few understand you.",
  "You stay strong, even when things feel unfair.",
  "You are rare, even if people fail to see your worth."
];
//size 30
const recommendations = [
  "Feed a street dog today.",
  "Help someone in need, even in a small way.",
  "Call your parents or loved ones and talk to them.",
  "Spend some time in nature.",
  "Drink enough water and take care of your health.",
  "Read at least 10 pages of a good book.",
  "Donate clothes or food to someone needy.",
  "Practice gratitude for what you have.",
  "Avoid negativity and focus on positive thoughts.",
  "Help a friend without expecting anything in return.",
  "Take a short walk and clear your mind.",
  "Learn something new today.",
  "Meditate for 5–10 minutes.",
  "Respect others, even if you disagree with them.",
  "Complete one pending task you’ve been avoiding.",
  "Smile more and spread positivity.",
  "Avoid unnecessary arguments today.",
  "Save a small amount of money.",
  "Eat healthy food instead of junk.",
  "Write down your goals and work on them.",
  "Be kind to strangers.",
  "Limit your screen time for a while.",
  "Organize your workspace or room.",
  "Listen to calming music.",
  "Apologize if you’ve hurt someone.",
  "Encourage someone who is feeling low.",
  "Focus on your self-growth.",
  "Do one act of kindness without telling anyone.",
  "Take proper rest and sleep on time.",
  "Believe in yourself and stay confident."
];

const  Predictions = [
  "You will become very successful in your career.",
  "You will achieve financial stability soon.",
  "You will become a crorepati one day.",
  "A big opportunity is coming your way.",
  "You will gain respect and recognition from others.",
  "Your hard work will pay off in the near future.",
  "You will travel to your dream destination.",
  "You will build something great that people admire.",
  "A positive change is about to enter your life.",
  "You will overcome your current challenges.",
  "You will achieve your long-term goals.",
  "Someone important will support you at the right time.",
  "Your confidence will take you to great heights.",
  "You will discover a hidden talent within yourself.",
  "Happiness and success will follow you.",
  "You will make your family proud.",
  "Your future is brighter than you expect.",
  "You will attract good luck and opportunities.",
  "You will grow stronger and wiser with time.",
  "You are destined for great things in life."
];

const form= document.getElementById('astroform');
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const Name=document.getElementById('name').value;
   const SurName=document.getElementById('surname').value;
   const Day=Number(document.getElementById('day').value);
   const Month=Number(document.getElementById('month').value);
   const Year=Number(document.getElementById('year').value);

   const result=document.getElementById("result");
   const first_message=`Hello ${Name} ${SurName}`;

   const second_message=`Your Zodiac sign is ${signs[Month-1]}`;

   const third_message= compliments[Day-1];

   let index=(Day*Month*Year)%20;
   const forth_message= victimCompliments[index];

   index=(Name.length*SurName.length*Year)%30
   const fifth_message= recommendations[index];

   index=(Day*Month*Year)%20;
   const six_message=Predictions[index];


   result.innerText=`${first_message}, ${second_message}. ${third_message} ${forth_message} ${fifth_message} ${six_message}`;

})
