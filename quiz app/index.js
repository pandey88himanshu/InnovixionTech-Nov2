let question = document.getElementById('que')
let opt1 = document.getElementById('opt1')
let opt2 = document.getElementById('opt2')
let opt3 = document.getElementById('opt3')
let opt4 = document.getElementById('opt4')
let button = document.getElementById('sub')
let option = document.getElementsByName('opt')
let prevans = ""
let score = 0;
let start = document.getElementById('start')
let container = document.getElementById('container')
let box = document.getElementById('box')
let total = document.getElementById('total')
const quizArray = [
    {
        id: "0",
        question: "Which is the most widely spoken language in the world?",
        options: ["Spanish", "Mandarin", "English", "German"],
        correct: "b",
    },
    {
        id: "1",
        question: "Which is the only continent in the world without a desert?",
        options: ["North America", "Asia", "Africa", "Europe"],
        correct: "d",
    },
    {
        id: "2",
        question: "Who invented Computer?",
        options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
        correct: "a",
    },
    {
        id: "3",
        question: "Google (www.google.com) is a:",
        options: ["Search Engine", "Number in Math", "Directory of images", "Chat service on the web"],
        correct: "a",
    },
    {
        id: "4",
        question: "Which is not an Internet protocol?",
        options: ["HTTP", "FTP", "STP", "IP"],
        correct: "c",
    },
    {
        id: "5",
        question: "Which of the following is not a valid domain name?",
        options: ["www.yahoo.com", "www.yahoo.co.uk", "www.com.yahoo", "www.yahoo.co.in"],
        correct: "c",
    },
];

let index =0;
question.innerHTML=quizArray[index].question
opt1.innerHTML=quizArray[index].options[0]
opt2.innerHTML=quizArray[index].options[1]
opt3.innerHTML=quizArray[index].options[2]
opt4.innerHTML=quizArray[index].options[3]

button.addEventListener("click",()=>{
    
        if(prevans==quizArray[index].correct){
        score += 1;
        console.log(score)
        }
        
    else{
        console.log("no")
    }
total.innerHTML=score;
    index += 1;
    if(index<quizArray.length){
    question.innerHTML=quizArray[index].question
opt1.innerHTML=quizArray[index].options[0]
opt2.innerHTML=quizArray[index].options[1]
opt3.innerHTML=quizArray[index].options[2]
opt4.innerHTML=quizArray[index].options[3]
    }
    else{
       container.classList.toggle('hide')
       box.classList.toggle('hide')
    }
// if(index ==(quizArray.length)){
//     alert("hello");
// }
  
}
)

let radio = document.getElementsByName("opt");
radio.forEach(e => {
    e.addEventListener("change",(Event)=>{
        prevans = Event.target.value
        })
});

start.addEventListener('click',()=>{
    location.reload();
})



