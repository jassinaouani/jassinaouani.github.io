// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// calculate my current age to display in bio
var dob = new Date("03/25/2006");  
//calculate month difference from current date in time  
var month_diff = Date.now() - dob.getTime();  
  
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);   
  
//extract year from date      
var year = age_dt.getUTCFullYear();  
  
//now calculate the age of the user  
var age = Math.abs(year - 1970);  
  
//display the calculated age  
bioAge = document.getElementById("age")
bioAge.textContent = age

