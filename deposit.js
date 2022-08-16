// deposit field 
document.getElementById('btn-deposit').addEventListener('click', function(){
    const deposite = document.getElementById('deposit-field').value;
    const depositeTotal = document.getElementById('deposit-total').innerText;
    document.getElementById('deposit-total').innerText = parseFloat(deposite)  + parseFloat(depositeTotal);
    const totalBalance = document.getElementById('balance').innerText;
    document.getElementById('balance').innerText = parseFloat(totalBalance) + parseFloat(deposite);
    
    document.getElementById('deposit-field').value = '';
})

// // Withdraw field 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const getWithdrawField = document.getElementById('Withdraw-field').value;
    const withdrawAmount = document.getElementById('withdrawAmount').innerText;
    document.getElementById('withdrawAmount').innerText = parseFloat(withdrawAmount) + parseFloat(getWithdrawField);
    const totalBalance = document.getElementById('balance').innerText;
    document.getElementById('balance').innerText = parseFloat(totalBalance) - parseFloat(getWithdrawField);

    document.getElementById('Withdraw-field').value = '';
})