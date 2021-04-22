let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
let gstprice = localStorage.getItem('gstprice');
let km = localStorage.getItem('km');
let priceWithoutGst =localStorage.getItem('priceWithoutGst');
let carType =localStorage.getItem('carType');
let currentYear =localStorage.getItem('currentYear');
let journeyDate =localStorage.getItem('journeyDate');  
let journeyTime =localStorage.getItem('journeyTime');
let finaldate =localStorage.getItem("finaldate");
let Gender =localStorage.getItem('Gender');
let peakPriceValue = localStorage.getItem('peakPrice');
let onlyHour = localStorage.getItem('onlyHour');
let gender = localStorage.getItem('Gender');
//alert(" Name " +name + " ageb "+age + " gstvalue " + gstprice +" kilometer "+ km +" Price with gst "+ priceWithoutGst +" Cartype " +carType + " Year "+currentYear+ " Year "+" date "+journeyDate+" FinalDate "+finaldate+" Gender "+Gender);
//alert("hellooooo");
document.getElementById('name').innerText=name;
document.getElementById('gender').innerText=gender;
document.getElementById('agedisplay').innerText=age +" years old";
document.getElementById('cabdisplay').innerText=carType+" Car";
document.getElementById('kmdisplay').innerText=km +" Km";
document.getElementById('jdateDisplay').innerText=journeyDate;
document.getElementById('jtimeDisplay').innerText=journeyTime;

document.getElementById('priceWithoutGst').innerText=priceWithoutGst +" Rs";
document.getElementById('priceWithGst').innerText=gstprice+" Rs";


if(onlyHour>=17 && onlyHour<=19){
    //alert("Yes");
    document.getElementById('peakhrdisplay').innerText="Yes it is Peak time";
}
else{
    //alert("NO")
    document.getElementById('peakhrdisplay').innerText="No it is not a peak Time";
}

if(age>60){
   // alert("Yes");
    document.getElementById('seniorOutput').innerText="Yes, Eligible ";
}
else{
    //alert("NO")
    document.getElementById('seniorOutput').innerText="No, Not Eligible";
}









