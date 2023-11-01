const output=document.getElementById('calculation');
const result=document.getElementById('result');
var sound = document.getElementById("audio");
function toggleButtonOn(){
    document.getElementById('t1').classList.add('hidden');
    document.getElementById('t2').classList.remove('hidden');
}
function toggleButtonOff(){
    document.getElementById('t2').classList.add('hidden');
    document.getElementById('t1').classList.remove('hidden');
}

let displayValue="";
function addToDisplay(val){
    displayValue+=val;
    output.value=displayValue;
    if (!document.getElementById('t2').classList.contains('hidden')) {
        sound.play();
    } else {
        sound.pause();
    }
}
function clearDigit(){
    
        displayValue= displayValue.slice(0,-1);
        output.value=displayValue;
        if (!document.getElementById('t2').classList.contains('hidden')) {
            sound.play();
        } else {
            sound.pause();
        }

}
function NegativeSign(){
    displayValue= -Math.abs(displayValue);
    output.value=displayValue;
    if (!document.getElementById('t2').classList.contains('hidden')) {
        sound.play();
    } else {
        sound.pause();
    }
} 

function clearToDisplay(){
    displayValue="";
    output.value=displayValue;
    result.value=displayValue;
    if (!document.getElementById('t2').classList.contains('hidden')) {
        sound.play();
    } else {
        sound.pause();
    }
}
function CalculateValue() {
    let value = eval(displayValue);
    result.value = value;
    displayValue = value.toString();
    if (!document.getElementById('t2').classList.contains('hidden')) {
        sound.play();
    } else {
        sound.pause();
    }
}
function showsetting(){
    const setting=document.getElementById('setting');
    if(setting.style.display==='none'){
        setting.style.display="block";
    }
    else{
        setting.style.display="none";
    }

}

