document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputDeposit = document.getElementById('input-deposit')
    const inputDepositstr= inputDeposit.value;
    const newinputDeposit =parseFloat(inputDepositstr);
    console.log(newinputDeposit)
    
    inputDeposit.value="";
    if (isNaN(newinputDeposit)) {
        alert('Please input vaild NUmber..!')
        return;
    }

    const perviousDepositeFile =document.getElementById('deposit-ammount');
    const perviousDepositestr = perviousDepositeFile.innerText;
    const perviousDeposite =parseFloat(perviousDepositestr);
    console.log(perviousDeposite);
    const totalDeposte =newinputDeposit + perviousDeposite ;
    perviousDepositeFile.innerText =totalDeposte;


    
    const balanceTotalElement =document.getElementById('balance-total')
    const previousBalanceTotalElementstr =balanceTotalElement.innerText;
    const previousBalanceTotalElement =parseFloat(previousBalanceTotalElementstr);
    console.log(previousBalanceTotalElement);

     const totalDeposteBalance =newinputDeposit + previousBalanceTotalElement;
     balanceTotalElement.innerText = totalDeposteBalance;



})