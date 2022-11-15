document.getElementById("buttonPassword").onclick = function(){
    let password = document.getElementById("pass").value;
    
    if (password == "password123") {
        alert("Your password is True");
    } else {
        alert("Your password is false");
    }
};