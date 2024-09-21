const logOut=document.getElementById('log-out').addEventListener('click',function(){
    window.location.href ="index.html";
})

const addMoney=document.getElementById('add-money').addEventListener('click',function(){
    const addMoneyForm=document.getElementById('add-money-form');
    addMoneyForm.classList.remove('hidden');
    const cashOutForm= document.getElementById('cashout-form');
    cashOutForm.classList.add('hidden');
    
})
const cashOut=document.getElementById('cashout-money').addEventListener('click',function(){
    const cashOutForm= document.getElementById('cashout-form');
    cashOutForm.classList.remove('hidden');
    const addMoneyForm=document.getElementById('add-money-form');
    addMoneyForm.classList.add('hidden');
    
})

 const addMoneyBtn = document.getElementById('add-money-button');
addMoneyBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const addPin = document.getElementById('add-money-pin').value;
    const pinCheck = parseFloat(addPin);
    
    
    if (pinCheck === 1234) {  
        const inputAmount = document.getElementById('input-money').value;
        const inputAmountFinal = parseFloat(inputAmount);
        
        
        if (isNaN(inputAmountFinal) || inputAmountFinal <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        
        const currentBalance = document.getElementById('current-balance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        
       
        const newBalance = currentBalanceNumber + inputAmountFinal;
        document.getElementById('current-balance').innerText = newBalance.toFixed(2);  // Keep two decimal places

        
        document.getElementById('input-money').value = '';
        document.getElementById('add-money-pin').value = '';
    } else {
        // If PIN is incorrect
        alert('Invalid PIN. Please try again.');
    }
});