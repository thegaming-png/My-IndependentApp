// Button Code

submitButton = document.getElementById("submit");
input = document.getElementById("input1");
input2 = document.getElementById("input2");


document.getElementById("submit").addEventListener("click", function clciked(event) {



    if (input.length != "") {
        MainFunction();
    } else if (input2.length != "") {
        MainFunction();
    } else if (input.length == "") {
        document.getElementById("alert").style.display = "block"
    } else if (input2.length == "") {
        document.getElementById("alert").style.display = "block"
    }


    function MainFunction() {


        localStorage.setItem("Username", input1.value);
        localStorage.setItem("Email", input2.value);
        console.log("works");

        input.value = "";
        input2.value = "";


    }
});