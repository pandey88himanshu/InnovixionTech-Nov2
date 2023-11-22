let lastdate = document.getElementById('last')
let button = document.getElementById('btn')
let days = document.getElementById('days')
let hours = document.getElementById('hours')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
// let date = document.getElementById('date')
let date = document.getElementsByClassName('date')
let count = document.getElementById('count')
let reset = document.getElementById('rst')
let hide = document.getElementsByClassName('hide')
// if(lastdate.value=="" || lastdate.value == null || lastdate.value == "NaN"){
//     button.disabled = true;
// }

//     // button.disabled = false;

function time(){
    let first = new Date()
    let second = new Date(lastdate.value)
    let difference = Math.abs(second-first)/1000;
    if(difference<0){
      
        date[0].classList.toggle('hide')
        date[0].classList.toggle('date')
        count.classList.toggle('hide')

    }
    else{
days.value = Math.floor(difference/3600/24)
hours.value = Math.floor(difference/3600)%24;
min.value = Math.floor(difference/60)%60;
sec.value = Math.floor(difference)%60;
    }
}
button.addEventListener("click",()=>{
   time()
   setInterval(() => {
    time()
   }, 1000);
  
 date[0].classList.toggle('hide')
 date[0].classList.toggle('date')
//  count.classList.toggle('hide')
 count.style.display="flex"
})

reset.addEventListener("click",()=>{
    lastdate.value ="";
    console.log(date)
    if(date.length==0){
        hide[0].classList.toggle('date')
         hide[0].classList.toggle('hide')
  
}
   
    // count.classList.toggle('hide')
    count.style.display="none"
})
