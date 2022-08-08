var number= document.querySelectorAll(".number-button");
var myOperation= document.querySelectorAll(".operation-button");
var myResult=document.querySelector(".result-box")
var darkLightMode=document.querySelector(".dark-light-mode")
var lightIcon= document.querySelector(".light")
var darkIcon= document.querySelector(".darkM")
var allButtons=document.querySelectorAll(".DLM")
var num1=0
var num11=0
var num2=0
var sign=null 
var sum
console.log("num1"+num1);
console.log("num2"+num2);
var clearBtn=document.querySelector(".clear-button");


number.forEach((number1)=>{
number1.addEventListener("click",(num)=>{
    if(sign==null){
    console.log(number1);
/*num1=num.target.dataset.number;*/
num1 += number1.innerHTML
myResult.innerHTML =+ num1
console.log("num11"+"  "+num11);
num1=Number(num1)
console.log("num1"+"  "+num1);
console.log("type"+"  "+typeof(num1));
num.target.dataset.number

    }else{
            num2 += number1.innerHTML
            myResult.innerHTML =+ num2
            console.log("num11"+"  "+num2);
            num2=Number(num2)
            console.log("num2"+"  "+num2);
            console.log("type"+"  "+typeof(num2));
            

        

    }

    switch (sign){ 
        case "/":
           
            sum=num1/num2;
            
            
            break;
        case "*":
            sum=num1*num2;
           
            
            break;
        case "+":
            sum= num1+num2;
           
            
            break;
        case "-":
            sum=num1-num2;
           
            
                       
    
        }

   
    
    })


})


myOperation.forEach((oprt)=>{
    oprt.addEventListener("click",(att)=>{
        if(oprt.innerHTML== "="){
            sign= oprt.innerHTML
            console.log(sign);
            console.log("sum"+"   "+sum);
            myResult.innerHTML=sum
            num1=num2=0
            sign=null;
        }else{
            sign= oprt.innerHTML
            console.log(sign); 
            myResult.innerHTML += sign;  
            
            
        }
        
    })
})


clearBtn.addEventListener("click",()=>{
    num1=num2=0
    myResult.innerHTML=null

})


darkLightMode.addEventListener("click",()=>{
    
    
    console.log(darkIcon.style.display);


  
    document.querySelector("body").classList.toggle("dark")
    allButtons.forEach((btn)=>{
     btn.classList.toggle("dark")
    })
    if(lightIcon.style.display =='block'){
        darkIcon.style.display= 'block'
        lightIcon.style.display= 'none'
     }else{
       darkIcon.style.display= 'none'
       lightIcon.style.display= 'block'
     }

    


})