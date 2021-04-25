function toSetDate(){    
    event.preventDefault();
    let date = new Date();
    let minDateSetUp = date.toJSON().substr(0,10);
    let maxDob = (date.toJSON().substr(0,7)+"-"+(parseInt(minDateSetUp.substr(8,2))+7));
    let setdate = document.getElementById('jdate');
    setdate.setAttribute('min',minDateSetUp);
    setdate.setAttribute('max',maxDob);
    setdate.setAttribute('value',minDateSetUp);
    let setDateForDob= document.getElementById('checksenior');
    setDateForDob.setAttribute('max',minDateSetUp);

}

function time(){
    let peakresult="";
    event.preventDefault();
    var jtime = document.getElementById("jtime").value;
    localStorage.setItem('journeyTime',jtime);
    var onlyHour = jtime.substr(0,2);
    localStorage.setItem('onlyHour',onlyHour);
    if(onlyHour >=17 && onlyHour<=19){
        let peakvalue = peakprice();
        document.getElementById("invalidTime").innerHTML="Since it is peak Hour the price increases by 1.25% per km";
        document.getElementById("peakprice").innerHTML="Price due to Peak Time is "+peakvalue;
        
    }
    else if(onlyHour>=0 && onlyHour<=24){
        document.getElementById("invalidTime").innerHTML=""; 
        document.getElementById("peakprice").innerHTML="Fair price"+localStorage.getItem(gstprice);
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
    exit();
    //date();
    time();
    age();
    seniorCalc();
    peakprice();
    genderCheck();
    
    
    

}
function exit(){
    //alert("hello");
    event.preventDefault();
    //window.location.href="summary.html";
    let name = document.getElementById("name").value;
    localStorage.setItem('name',name);
    let form1 = document.getElementById("jdate").value;
    let form2 = document.getElementById("jtime").value;
    let form3 = document.getElementById("checksenior").value;
    let form4 = document.getElementById("male").value;
    let form5 = document.getElementById("female").value;
    
    if( form2.length>0 && form3.length>0 ){
        document.getElementById("nextpage").style.visibility="visible";
        

    }
    else{
        alert("Please enter all the fields");
    }
}
function exitToNext(){
    event.preventDefault();
    window.location.href="summary.html";
}