function date(){
    event.preventDefault();
    let date = new Date();
    let tdate = date.getDate();
    let tmonth = date.getMonth()+1;
    let tyear = date.getFullYear();
    localStorage.setItem('currentYear', tyear);
    let jdate = document.getElementById("jdate").value;
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
    event.preventDefault();
    var jtime = document.getElementById("jtime").value;
    var onlyHour = jtime.substr(0,2);
    if(onlyHour >=17 && onlyHour<=19){
        document.getElementById("invalidTime").innerHTML="Since it is peak Hour the price increases by 1.25% per km"; 
        return true;
    }
    else if(onlyHour>=0 && onlyHour<=24){
        document.getElementById("invalidTime").innerHTML="Valid Time"; 
    }
}
function age(){
    event.preventDefault();
    let ageToCheck = document.getElementById("checksenior").value; 
    let ageYear = ageToCheck.substr(0,4);
    let cdate=localStorage.getItem('currentYear');
    let age = cdate-ageYear;
    let len=ageToCheck.length;
    //alert(age+''+len+''+cdate+''+ageToCheck+''+ageYear);
    if(len==0){
        document.getElementById("noDate").innerHTML="Date cannot be Empty";
    }
    else{
        if(age>=60){
            document.getElementById("noDate").innerHTML="You are senior citizen to avail 50% discount";
        }
        else{
            document.getElementById("noDate").innerHTML="You are Not valid ";
        }

    }
} 
    

