/*  JavaScript HTML DOM Events */

function message(){
    alert("Yes, I Am Heading Tag")
}

function dateshow(){
    let date = new Date();
    document.getElementById("date").innerHTML = date.toLocaleString();
}

function uppercase(){
    const change = document.getElementById("emails"); 
    change.value = change.value.toUpperCase();
}
function red(one){
    one.style.color= "red";
}
{
    function Down(obj) {
        obj.style.backgroundColor = "#1ec5e5";
        obj.innerHTML = "Release Me";
      }
      
      function Up(obj) {
        obj.style.backgroundColor="#D94A38";
        obj.innerHTML="Thank You";
      }
}

/* JavaScript addEventListener() */

{
    const x = document.getElementById("clickIt");
        const y = document.getElementById("hoverPara");
          
        x.addEventListener("click", RespondClick);
        y.addEventListener("mouseover", RespondMouseOver);
        y.addEventListener("mouseout", RespondMouseOut);
          
        function RespondMouseOver() {
            document.getElementById("effect").innerHTML +=
                       "MouseOver Event" + "<br>";
        }
          
        function RespondMouseOut() {
            document.getElementById("effect").innerHTML +=
                      "MouseOut Event" + "<br>";
        }
          
        function RespondClick() {
            document.getElementById("effect").innerHTML +=
                      "Click Event" + "<br>";
        }
}