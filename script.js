// 1 . Les Selecteurs
// document.querySelector("h4").style.background = "red";

// const baliseHTML = document.querySelector("h4");

// 2 . Les Click Event
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1'); //ou mieux
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');




questionContainer.addEventListener('click', ()=>{
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener('click', ()=>{
  response.classList.add("show-response");
  response.style.background ="red";
});

btn2.addEventListener('click', ()=>{
  response.classList.add("show-response");
  response.style.background ="green";
});

// Priorité  <div style></div>    #id > .class > balisHTML

//----------------------------------------------------------------

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e)=>{
  console.log(e);
})









//--------------------------------------------------------


