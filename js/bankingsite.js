
//get Input Amount
function getInputAmount(inputtext){
    let inputText= document.getElementById(inputtext).value;
    if(inputText == ''){
        inputText = 00;
    }
    const inputAmount = parseFloat(inputText);    
    document.getElementById(inputtext).value = '';
    return inputAmount;        
};

//get Previous Amount & total balance
function getPreviousAmount(previoustext,amount){
    const previousText = document.getElementById(previoustext).innerText;
    const previousAmount = parseFloat(previousText);
    const totalAmount = previousAmount + amount;
    document.getElementById(previoustext).innerText = totalAmount;
};
//Get Total Main Balance
function getUpdateBlance(preAmount,isAdd){
    const mainBalanceText = document.getElementById('balance').innerText;
    const mainBalance = parseFloat(mainBalanceText);
    if(isAdd == true){
        const totalMainBalance = mainBalance + preAmount;
        document.getElementById('balance').innerText = totalMainBalance;
    };
    if(isAdd == false){
        
        const totalMainBalance = mainBalance - preAmount;
        if(totalMainBalance < 0){
            return;
        }
        document.getElementById('balance').innerText = totalMainBalance;
        
        
    };

    
}
// Deposit
document.getElementById('deposit-submit').addEventListener('click',function(){
    const inputDepositAmount = getInputAmount('input-deposit');
    getPreviousAmount('previous-deposit',inputDepositAmount);
    getUpdateBlance(inputDepositAmount,true);
});

// Withdraw
document.getElementById('withdraw-submit').addEventListener('click',function(){
    const inputWithdrawAmount = getInputAmount('input-withdraw');
    getPreviousAmount('previous-withdraw',inputWithdrawAmount);
    getUpdateBlance(inputWithdrawAmount,false);
});