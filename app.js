const loginBtn= document.getElementById('login-button').addEventListener('click',function(event){
    event.preventDefault;
    const mobileNumber= document.getElementById('input-number').value;
    const number=parseFloat(mobileNumber);
    
    const pinNumber=document.getElementById('input-pin').value;
    pin=parseFloat(pinNumber);
    const loginContent=document.getElementById('login-content');
    if(number==12345 && pin==1234){
        window.location.href ="dashboard.html";
    }
    else {
        alert("Please Input Valid Number Or Pin")
        document.getElementById('input-number').value='';
        document.getElementById('input-pin').value='';
    }
   
})


