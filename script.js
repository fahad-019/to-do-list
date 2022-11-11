function Addmore(){
    let name=document.getElementById('input1').value ;
    if(name==''){
        alert("Please enter a task");
    }
    else{
        let box=document.getElementById('box')
        let li=document.createElement('li')
        li.textContent=name;
        box.appendChild(li);
        let img = document.createElement('img');
        img.src = 'dlt.png';
        img.classList.add("delete");
        li.appendChild(img);
        img.addEventListener("click",()=>{
            box.removeChild(li);
        }) 
    }
    name=document.getElementById('input1').value=" ";
}


function clearAll(){
    let box=document.getElementById("box"); 
    box.innerHTML=""; 
    let b=document.getElementById('input1');
    b.value='';
}

