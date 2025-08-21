let counting= document.getElementById("num-count");

// console.log(counting)

let saving=document.getElementById("saving-data");


let count=0

function incriment (){
    count= count+1
    counting.innerText=count
}

function save () {
    
    let countstr = count +"-"
    saving.textContent +=countstr
   
}

function reset () {
    count=0;
    counting.innerText=count;
}
// console.log(count)