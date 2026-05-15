function checkForm(el, event){
    
    event.preventDefault();
    var name = el.name.value;
    var pass = el.password.value;
    var repass = el.repassword.value;

    var fail = "";

    if(name == "" || pass == "" || repass == ""){
        fail = "Заполните все поля";
    }
    else if(name.length < 2 || name.length > 10){
        fail = "Введите корректное имя";
    }
    else if(pass != repass){
        fail = "Пароли не совпадают";
    }

    if(fail != ""){
        document.getElementById('error').innerHTML = fail;
    }
    else{
        alert("Всё окей");
        window.location = '/index1.html';
    }
}
