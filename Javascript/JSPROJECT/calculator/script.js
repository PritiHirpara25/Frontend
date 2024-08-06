function clearAll(){
    document.querySelector('#result').value = "0";
}

function display(val){
    document.getElementById('result').value += val;
}

function operate(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
}