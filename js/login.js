

document.getElementById('login-btn').addEventListener('click',function(){
    //get User Email
    const userInputEmail = document.getElementById('user-input-email');
    const userEmail = userInputEmail.value;
    //get User Password
    const userInputPassword = document.getElementById('user-input-password');
    const userPassword = userInputPassword.value;

    //condition
    if(userEmail == 'mybank@.com' && userPassword == 'mybank'){
        window.location.href = 'bankingsite.html';
    }
})