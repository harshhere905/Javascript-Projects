let list=document.querySelector("#list");
let inputbox=document.querySelector("#box");

function addtask(){
    if(inputbox.value===""){
        alert("you need to write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list.appendChild(li);
        inputbox.value = "";
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    savedata();
}
// let cross=document.querySelector('span');
// cross.addEventListener('click',function(){
//   alert("hello");
// })
list.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==='SPAN'){
         e.target.parentElement.remove();
    }
},false)
function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function showtask(){
    list.innerHTML=localStorage.getItem("data"); 
}
showtask();