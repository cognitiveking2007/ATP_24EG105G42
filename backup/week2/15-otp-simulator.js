//2.OTP Countdown Simulator (Console App)
//------------------------------------
        
        //Simulate OTP sending flow in Node.js:
        
        //Show “OTP Sent Successfully”
        console.log("OTP Sent Successfully")
        //Start 10-second countdown
       let countdown=10
       let intervalId=setInterval(()=>{
            countdown--;
            console.log(countdown)
            if(countdown==0){
            console.log("Resend otp")
            clearInterval(intervalId)
        }
        },1000)
    
    
        //Allow resend only after countdown ends
        
