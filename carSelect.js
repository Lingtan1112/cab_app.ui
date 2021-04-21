function bill(){
    event.preventDefault();
    let km = document.getElementById("kilometers").value;
    let selected = document.querySelector('#cars').value;
    let calc= document.querySelector('#calculate').value;
    let nextpage = document.querySelector('#nextpage').value;
    //alert(km+selected+calc+nextpage);
    
    let type="";   
    let amt=0;
    let result=0;
    let gstprice="";
    if(calc=="calculator"){
        switch(selected){
    
        case "mini":
        type="Mini";
        amt=10; 
        result=km*amt;
        gstprice = gst(result);
        pricedisplay(type,result,gstprice);
        gstdisplay(type,gstprice);
        break;

        case "macro":
        type="Macro";
        amt=15; 
        result=km*amt;  
        gstprice = gst(result); 
        pricedisplay(type,result);
        gstdisplay(type,gstprice);
        break;

        case "prime":
        type="Prime";
        amt=20; 
        result=km*amt;   
        pricedisplay(type,result,gstprice);
        gstdisplay(type,gstprice);        
        break;
    
    }  
}
    else if(nextpage=="next"){
        alert("please close")
        window.location.href="journeyDetails.html";
        
    }
    
}
function gst(result){
    gstprice = (result*0.07)+result;

    return gstprice;
}


function pricedisplay(type,results) {
    document.getElementById('bill').innerHTML
        = 'The price for travelling in '+ type +" is Rs."+results;
}

function gstdisplay(type,gstprice){
    //alert("gst");
    document.getElementById('gst').innerHTML
        = 'The Total fare inclusive of GST for '+ type +" car is Rs."+gstprice;
}
