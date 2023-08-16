const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', function(){
   const passwordForme =document.getElementById('password-forme')
   const password = passwordForme.value;
   const emailUsar =document.getElementById('email-user');
   const email = emailUsar.value;
   console.log(password,email)
   if(password === '1234' && email ==='raselranae@gmail.com'){
       window.location.href='bank.html';
    alert('Hoy tui amar apon lati');
   }
   else{
    alert('Barit theke nab tui..!! passoerd janis na')
   }


})