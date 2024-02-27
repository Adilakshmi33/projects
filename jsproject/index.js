let buttons=document.getElementsByTagName('button')
let result=document.getElementById('result')
for(i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
        let inputvalue = this.innerText;
        updateDisplay(inputvalue)
    }
}
function updateDisplay(inputvalue){
    let currentDisplay=result.innerText
    if(currentDisplay=="0"){
        if(inputvalue!="AC" && inputvalue!="DEL" && inputvalue!="="){
            result.innerText=""
            result.innerText=inputvalue
        }
    }
    else {
        if(inputvalue=="DEL"){
        result.innerText=currentDisplay.substring(0,currentDisplay.length-1)
    }
        if(inputvalue=="AC"){
            result.innerText="0"
    }
        if(inputvalue!="AC" && inputvalue!="DEL" && inputvalue!="="){
            result.innerText+=inputvalue
    }
        if(inputvalue=="="){
            let display=result.innerText
            result.innerText=eval(display)
    }
}
}
