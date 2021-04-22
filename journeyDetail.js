function date(){
    
    event.preventDefault();
    let date = new Date();
    let tdate = date.getDate();
    let tmonth = date.getMonth()+1;
    let tyear = date.getFullYear();
    localStorage.setItem('currentYear', tyear);
    let jdate = document.getElementById("jdate").value;
    localStorage.setItem('journeyDate', jdate);    
    localStorage.setItem("finaldate",jdate);
    let jyear = jdate.substr(0,4);
    let jmonth = jdate.substr(5,2);
    let jdate1 = jdate.substr(8,2);
    if(tyear<=jyear ){
        
        if(tmonth<=jmonth ){
            
            if(tdate<=jdate1 ){
                document.getElementById("invalidDate").innerHTML="Valid date";
                
            }else{
                document.getElementById("invalidDate").innerHTML="Invalid Date";
                
            }
        }
        else{
            document.getElementById("invalidDate").innerHTML="Invalid Date";
        }
    }else{
       document.getElementById("invalidDate").innerHTML="Invalid Date"; 
    }   
}
function time(){
    let peakresult=""
    event.preventDefault();
    var jtime = document.getElementById("jtime").value;
    localStorage.setItem('journeyTime',jtime);
    var onlyHour = jtime.substr(0,2);
    localStorage.setItem('onlyHour',onlyHour);
    if(onlyHour >=17 && onlyHour<=19){
        document.getElementById("invalidTime").innerHTML="Since it is peak Hour the price increases by 1.25% per km";
        let peakvalue = peakprice();
        document.getElementById("peakprice").innerHTML="Price due to Peak Time is "+peakvalue;
        
    }
    else if(onlyHour>=0 && onlyHour<=24){
        document.getElementById("invalidTime").innerHTML="Valid Time"; 
    }
    
    
}
function age(){
    let gstvalue = localStorage.getItem('gstprice');
    event.preventDefault();
    let ageToCheck = document.getElementById("checksenior").value; 
    let ageYear = ageToCheck.substr(0,4);
    let cdate=localStorage.getItem('currentYear');
    let age = cdate-ageYear;
    //alert(age);
    localStorage.setItem('age',age);
    let len=ageToCheck.length;
    //alert(age+''+len+''+cdate+''+ageToCheck+''+ageYear);
    if(len==0){
        document.getElementById("noDate").innerHTML="Date cannot be Empty";
    }
    else{
        if(age>=60){
            document.getElementById("noDate").innerHTML="You are a senior citizen to avail 50% discount";
            let seniorPrice = seniorCalc();
            document.getElementById("result").innerHTML="Total fair price";
            document.getElementById("result").innerHTML="Rs."+seniorPrice;

        }
        else{
            document.getElementById("noDate").innerHTML="You are Not eligible for discount";
            document.getElementById("result").innerHTML="Rs."+gstvalue;
        }

    }
}     
function seniorCalc(){
    let gstvalue = localStorage.getItem('gstprice');
    let seniorprice = gstvalue/2;
    localStorage.setItem('finalprice',seniorprice);
    return seniorprice;
}
function peakprice(){
    let gstvalue = localStorage.getItem('gstprice');
    let km = localStorage.getItem('km');
    //alert(gstvalue);
    //alert(km);
    let peakPriceValue = parseInt(km)*0.0125+parseInt(gstvalue);
    localStorage.setItem('peakPrice',peakPriceValue);
    //alert(peakPriceValue);
    return peakPriceValue;

}
function genderCheck(){
    let gender="";
    event.preventDefault();
   
    if(document.getElementById('male').checked==true){
        gender="Male";
    //alert("Male is selected");
    
    
    }
    else if(document.getElementById('female').checked==true){
        gender="Female";
        //alert("female is selected");
        
        }
    localStorage.setItem('Gender',gender);
}
function fillCheck(){
    let name = document.getElementById("name").value;
    localStorage.setItem('name',name);
    event.preventDefault();
    let form1 = document.getElementById("jdate").value;
    let form2 = document.getElementById("jtime").value;
    let form3 = document.getElementById("checksenior").value;
    let form4 = document.getElementById("male").value;
    let form5 = document.getElementById("female").value;
    if(form1.length>0 && form2.length>0 && form3.length>0 ){
        window.location.href="summary.html";

    }
    else{
        alert("Please enter all the fields");
    }

}
