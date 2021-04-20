function bill(){
    event.preventDefault();
    let km = document.getElementById("kilometers").value;
    let selected = document.querySelector('#cars').value;
    let calc= document.querySelector('#calculate').value;
    let nextpage = document.querySelector('#nextpage').value;
    
    let type="";   
    let amt=0;
    let result=0;
    if(calc=="calculator"){
    switch(selected){
    
        case "mini":
        type="Mini";
        amt=10; 
        result=km*amt;   
        myGeeks(type,result);
        break;

        case "macro":
        type="Macro";
        amt=15; 
        result=km*amt;   
        myGeeks(type,result);
        break;

        case "prime":
        type="Prime";
        amt=20; 
        result=km*amt;   
        myGeeks(type,result);
        break;
    
    }  
}
}

function myGeeks(type,results) {
    document.getElementById('bill').innerHTML
        = 'The price for travelling in '+ type +" is "+results;
}
