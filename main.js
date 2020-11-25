input = ""
function myFunction(event) {
    if (event.target.id=="=") {
        calculate(input);
    } else if (event.target.id=="c") {
        input = ""
        document.getElementById("js-result").innerHTML=input;
    } else if (event.target.id=="arrow") {
        input = input.slice(0,-1);
        document.getElementById("js-result").innerHTML=input;
    }
    else { 
        var target = event.target.id;
        input += target;
        document.getElementById("js-result").innerHTML=input;
    }
};

function calculate(input) {
    answer=eval(input);
    document.getElementById("js-result").innerHTML=answer;
};

