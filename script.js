var startingMinutes = 2;
let time = startingMinutes * 60;
const countdownEl = document.getElementById("countdown");

function tofirstquestion() {
    document.getElementById("answerset1").style = "opacity: 1";
    document.getElementById("beginbutton").style = "opacity: 0";
    document.getElementById("h1").style = "opacity: 0";
    
    setInterval(updateCountdown, 1000);
    
    function updateCountdown () {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        countdownEl.innerHTML = minutes + ':' + seconds;
        time--;
        if (time == 0) {
             setTimeout(function(){endquiz();}, 2000);
        }
    }   
}

function tosecondquestion() {
    if (document.getElementById("q1ans2").checked == true) {
        document.getElementById("answerset1").style = "opacity: 0";
        document.getElementById("answerset2").style = "opacity: 1; position: relative; bottom: 169px";
        document.getElementById("h2").innerHTML = "Correct";
    }
    else  if (document.getElementById("q1ans1").checked == true || document.getElementById("q1ans3").checked == true || document.getElementById("q1ans4").checked == true) {
        document.getElementById("answerset1").style = "opacity: 0";
        document.getElementById("answerset2").style = "opacity: 1; position: relative; bottom: 169px";        
        document.getElementById("h2").innerHTML = "Incorrect";
        time -= 20;
    }
    else {
        alert("please select an answer.");
    }
}

function tothirdquestion() {
    if(document.getElementById("q2ans3").checked == true) {
       document.getElementById("answerset2").style = "opacity: 0";
    document.getElementById("answerset3").style = "opacity: 1; position: relative; bottom: 338px";
    document.getElementById("h2").innerHTML = "Correct";
}
    else  if (document.getElementById("q2ans1").checked == true || document.getElementById("q2ans2").checked == true || document.getElementById("q2ans4").checked == true) {
        document.getElementById("answerset2").style = "opacity: 0";
        document.getElementById("answerset3").style = "opacity: 1; position: relative; bottom: 338px";        
        document.getElementById("h2").innerHTML = "Incorrect";
        time -= 20;
    }
    else {
        alert("please select an answer.");
    }    
}

function tofourthquestion() {
    if(document.getElementById("q3ans2").checked == true) {
    document.getElementById("answerset3").style = "opacity: 0";
    document.getElementById("answerset4").style = "opacity: 1; position: relative; bottom: 507px";
        document.getElementById("h2").innerHTML = "Correct";
    }
        else  if (document.getElementById("q3ans1").checked == true || document.getElementById("q3ans3").checked == true || document.getElementById("q3ans4").checked == true) {
        document.getElementById("answerset3").style = "opacity: 0";
        document.getElementById("answerset4").style = "opacity: 1; position: relative; bottom: 507px";        
        document.getElementById("h2").innerHTML = "Incorrect";
        time -= 20;
    }
    else {
        alert("please select an answer.");
    } 
}

function tofifthquestion() {
    if (document.getElementById("q4ans4").checked == true) {
    document.getElementById("answerset4").style = "opacity: 0";
    document.getElementById("answerset5").style = "opacity: 1; position: relative; bottom: 676px";
    document.getElementById("h2").innerHTML = "Correct";
}
        else  if (document.getElementById("q4ans1").checked == true || document.getElementById("q4ans2").checked == true || document.getElementById("q4ans3").checked == true) {
        document.getElementById("answerset4").style = "opacity: 0";
        document.getElementById("answerset5").style = "opacity: 1; position: relative; bottom: 676px";        
        document.getElementById("h2").innerHTML = "Incorrect";
        time -= 20;
    }
    else {
        alert("please select an answer.");
    } 
}
function endquiz() {
    document.getElementById("answerset5").style = "opacity: 0";
    document.getElementById("endingform").style = "opacity: 1; position: relative; bottom: 845px";
    document.getElementById("finalp").innerHTML = "";
    document.getElementById("finalp").style = "position: relative; bottom: 845px";
    var ele = document.getElementsByTagName('input');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            document.getElementById("finalp").innerHTML
                += "You Answered: "
                + ele[i].value + "<br>";
        }
    }
    document.getElementById("finalp2").innerHTML = "The correct answers were: Answers 2,3,2,4,1.";
    document.getElementById("countdown").style = "opacity: 0";
}
