document.getElementById("button").addEventListener("click",validate);
function validate(){
    var error = document.getElementById("error");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password == "admin"){
        location.href="products.html";
        error.textContent = "";
    }
    else{
        error.style.width = "340px";
        error.style.height = "30px";
        error.style.backgroundColor = "#FFB6C1";
        error.style.border = "2px solid #FFB6C1";
        error.style.borderRadius = "5px";
        error.textContent = 'Please enter correct username and password';
        error.style.display = "inline-block";
    }
}