

function user_input()
{
   
  
   var hours_worked = prompt("Number of Hours Worked:");
   var std_pay= prompt("Standard hourly pay: ");

   if(hours_worked<0||hours_worked===""||std_pay<0||std_pay===""){
   alert("Invalid Input")
   }
   else{
   
    
   let payout=calculate_pay(hours_worked,std_pay);
    
    
    document.getElementById("demo").innerHTML="In " + hours_worked + " hours you made "+"$"+payout;
   }

}
function calculate_pay(hours,wage)
{
    let final_pay=0;
    if(hours>40)
    {
        let add_hour=hours-40;
        final_pay= 40*wage;
        let add_pay=add_hour*(1.5*wage)
        return final_pay+add_pay;
    }
    
    else //if hours<40 then the number of hours times hourly pay
    {
        return (final_pay=hours*wage);
    }

    

}