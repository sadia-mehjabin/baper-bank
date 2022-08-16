document.getElementById("btn-submit").addEventListener('click', function(){
    const Email = document.getElementById('userEmail').value;
    const Password = document.getElementById('userPassword').value;
    if(Email === "jhidnicraft@gmail.com" && Password === '01796269047'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid');
    }

})

