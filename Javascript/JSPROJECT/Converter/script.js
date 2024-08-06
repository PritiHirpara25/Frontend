    function cel(){

        let celsius = parseFloat(document.getElementById("celsius").value);

        let fah = (1.8 * celsius)+32;

        let abc =  document.getElementById('fahrenheit');

       abc.value = fah;
    }


    function gram(){
        let a =parseFloat(document.getElementById('gram').value);

    let killo = (a / 1000);

    let abc = document.getElementById('killogram');

    abc.value = killo;
    }

    function Second(){
        let a  = parseFloat(document.getElementById('sec').value);
        let minute = a / 60;

        let abc = document.getElementById("min");

        abc.value = minute;
    }
