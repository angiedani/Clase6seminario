
 function operaciones(){
    let num1, num2;
    num1= parseInt(document.getElementById('numero1').value);
    num2= parseInt(document.getElementById('numero2').value);
    sum = num1+num2;
    alert("la suma es:"+sum);
    rest = num1-num2;
    alert("la resta es:"+rest);
    mult = num1*num2;
    alert("la multipliacion es:"+mult);
    if(num2>0){
        div = num1/num2;
        alert("la division es:"+div);
       
    }else{
        alert("No existe division entre cero");
        
    }
       

    
 }