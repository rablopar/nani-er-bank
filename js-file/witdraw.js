document.getElementById('btn-witdorw').addEventListener('click', function(){
    const withdrawFild = document.getElementById('Withdraw-input');
    const newWithdarAmmountstr = withdrawFild.value;
    const newWithdar= parseFloat(newWithdarAmmountstr);
    withdrawFild.value='';
    if (isNaN(newWithdar)) {
        alert('Please input vaild NUmber..!')
        return;
    }

 const withdrawTotalElement =document.getElementById('witdraw-total');
    const previousWirhdrawstr = withdrawTotalElement.innerText;
    const previousWirhdraw =parseFloat(previousWirhdrawstr);
   

    const balanceTotalElement =document.getElementById('balance-total')
    const previousBalanceTotalElementstr =balanceTotalElement.innerText;
    const previousBalanceTotalElement =parseFloat(previousBalanceTotalElementstr);
    
    if(newWithdar > previousBalanceTotalElement){
        alert('Nanir bank a ato taka nai')
        return;
    }
    const carentWithdrawTotal =previousWirhdraw +newWithdar;
    withdrawTotalElement.innerText=carentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotalElement -  newWithdar;
    balanceTotalElement.innerText = newBalanceTotal;


 
})