// Variables
let btn = document.querySelector('#new-question');
let question = document.querySelector('.question');

const quotes = [
    { question: "Can you tell me a little about yourself?" },
    { question: "What are your strengths and weaknesses?" },
    { question: "Why do you want this job?" },
    { question: "Where do you see yourself in five years?" },
    { question: "Can you describe a challenging situation you faced at work and how you handled it?" },
    { question: "What motivates you?" },
    { question: "What attracted you to our company?" },
    { question: "How do you handle stress and pressure?" },
    { question: "Why should we hire you?" },
    { question: "Can you describe a successful project you've worked on?" },
    { question: "How do you prioritize your work?" },
    { question: "Tell me about a time when you had to work with a difficult coworker or supervisor." },
    { question: "What do you know about the company?" },
    { question: "How do you handle ambiguity or uncertainty in the workplace?" },
    { question: "What is your preferred work style?" },
    { question: "How do you contribute to a team environment?" },
    { question: "Do you have any questions for us?" },
    { question: "How do you keep your skills and knowledge up-to-date?" },
    { question: "Describe your communication style." },
    { question: "How do you handle feedback and criticism?" },
    { question: "Can you give an example of when you had to meet a tight deadline?" },
    { question: "What is your greatest professional achievement?" },
    { question: "Describe a time when you demonstrated leadership skills." },
    { question: "What attracted you to our company?" },
    { question: "How do you stay updated with industry trends?" },
    { question: "What is your preferred work style?" },
    { question: "How do you contribute to a team environment?" },
    { question: "Do you have any questions for us?" },
    { question: "How do you handle ambiguity or uncertainty in the workplace?" },
    { question: "What is your preferred work style?" },
  ];
  

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  question.innerText = quotes[random].question;
});