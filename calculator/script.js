let button = document.querySelectorAll("button");
let input = document.querySelector("input");

let string = "";

button.forEach(buttons =>{
    buttons.addEventListener('click', ()=>{
        if(buttons.innerHTML == "="){
            string = eval(string);
            input.value = string
        }else if(buttons.innerHTML == "AC"){
            string = "";
            input.value = string
        }else if(buttons.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
         else{
            string += buttons.innerHTML;
            input.value = string;
        }
    })
})