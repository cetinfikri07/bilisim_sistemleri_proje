const username = "admin";
const passwd = "12345";

// elementleri seçme 

const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click",function(e){
    if(inputUsername.value === "" || inputPassword.value === ""){
        alert("Kullanıcı adı veya Şifre alanları boş bırakılmaz");
    }else if (inputUsername.value != "admin" || inputPassword.value != "12345" ){
        alert("Yanlış Kullanıcı adı veya şifre");

    }else{
        window.location.replace("http://127.0.0.1:5500/admin.html")
    }

    e.preventDefault();

})







