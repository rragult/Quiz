window.onload = function () {
    document.getElementById("text_content2").style.display = "none";
    document.getElementById("text_content3").style.display = "none";
    document.getElementById("text_content4").style.display = "none";
    document.getElementById("text_content5").style.display = "none";
    document.getElementById("text_content6").style.display = "none";
    console.log(localStorage["userName"]);
    document.getElementById("header").innerHTML = localStorage["userName"];
}

var ans1 = "";
var ans2 = "";
var ans3 = "";
var ans4 = "";
var ans5 = "";


function next(val) {
    switch (val) {
        case '1':
            document.getElementById("text_content1").style.display = "none";
            document.getElementById("text_content2").style.display = "block";
            ans1 = document.getElementById("eTextarea1").value;
            break;

        case '2':
            document.getElementById("text_content1").style.display = "none";
            document.getElementById("text_content2").style.display = "none";
            document.getElementById("text_content3").style.display = "block";
            ans2 = document.getElementById("eTextarea2").value;

            break;

        case '3':
            document.getElementById("text_content1").style.display = "none";
            document.getElementById("text_content2").style.display = "none";
            document.getElementById("text_content3").style.display = "none";
            document.getElementById("text_content4").style.display = "block";
            ans3 = document.getElementById("eTextarea3").value;

            break;

        case '4':
            document.getElementById("text_content1").style.display = "none";
            document.getElementById("text_content2").style.display = "none";
            document.getElementById("text_content3").style.display = "none";
            document.getElementById("text_content4").style.display = "none";
            document.getElementById("text_content5").style.display = "block";
            ans4 = document.getElementById("eTextarea4").value;

            break;
    }
}


function previous(val) {
    switch (val) {
        case '2':
            document.getElementById("text_content1").style.display = "block";
            document.getElementById("text_content2").style.display = "none";
            document.getElementById("eTextarea1").innerHTML = ans1;
            break;

        case '3':
            document.getElementById("text_content1").style.display = "none";
            document.getElementById("text_content2").style.display = "block";
            document.getElementById("text_content3").style.display = "none";
            document.getElementById("eTextarea2").innerHTML = ans2;
            break;

        case '4':
            document.getElementById("text_content1").style.display = "none";
            document.getElementById("text_content2").style.display = "none";
            document.getElementById("text_content3").style.display = "block";
            document.getElementById("text_content4").style.display = "none";
            document.getElementById("eTextarea3").innerHTML = ans3;
            break;

        case '5':
            document.getElementById("text_content1").style.display = "none";
            document.getElementById("text_content2").style.display = "none";
            document.getElementById("text_content3").style.display = "none";
            document.getElementById("text_content4").style.display = "block";
            document.getElementById("text_content5").style.display = "none";
            break;
    }
}


function submit() {
    document.getElementById("text_content1").style.display = "none";
    document.getElementById("text_content2").style.display = "none";
    document.getElementById("text_content3").style.display = "none";
    document.getElementById("text_content4").style.display = "none";
    document.getElementById("text_content5").style.display = "none";
    document.getElementById("text_content6").style.display = "block";

    document.getElementById("para1").innerHTML = ans1;
    document.getElementById("para2").innerHTML = ans2;
    document.getElementById("para3").innerHTML = ans3;
    document.getElementById("para4").innerHTML = ans4;
    document.getElementById("para5").innerHTML = ans5;

}

function opt(val) {
    switch (val) {
        case 'a':
            ans5 = "a. Enormous heat & pressure";
            break;

        case 'b':
            ans5 = "b. Shallow burial by sediments";
            break;

        case 'c':
            ans5 = "c. Refining & processing";
            break;

        case 'd':
            ans5 = "d. Drilling & distillation";
            break;
    }
}

function lout() {
    location.href = "index1.html";
}