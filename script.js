var input = document.getElementById("re");

function evalute(obj){
    var click = obj.innerHTML;
    if (click == '=') {
        input.innerHTML = eval(input.innerHTML);
    }else if(click == 'C'){
       input.innerHTML = '0'
    }else{
        if(input.innerHTML == '0'){
            input.innerHTML = click;
        }else{
            input.innerHTML += click; 
        }
    }

}