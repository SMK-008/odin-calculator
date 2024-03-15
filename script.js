//mapping numbers onto buttons
const zero=document.querySelector('#zero')
const one=document.querySelector('#one')
const two=document.querySelector('#two')
const three=document.querySelector('#three')
const four=document.querySelector('#four')
const five=document.querySelector('#five')
const six=document.querySelector('#six')
const seven=document.querySelector('#seven')
const eight=document.querySelector('#eight')
const nine=document.querySelector('#nine')
const multiplication=document.querySelector('#times')
const division=document.querySelector('#divide')
const addition=document.querySelector('#plus')
const subtraction=document.querySelector('#minus')
const equals=document.querySelector('#equals')
const clear=document.querySelector('#clear')
const decimal=document.querySelector('#decimal')
const power=document.querySelector("#power")
const squared=document.querySelector("#squared")
const root=document.querySelector("#root")

let display=document.querySelector('input')
//butttons functionalities

let numbers=[]//array for numbers
let signs=[]//array for signs
let firstNum=""
let secondNum=""
let sign=""

zero.addEventListener('click',()=>{
    display.value+=0
    if(sign.includes("-") || sign.includes("+")|| sign.includes("/") || sign.includes("x") || sign.includes("^")){
        secondNum+=0
    }
    else{
        firstNum+=0
    }
})

one.addEventListener('click',()=>{
    display.value+=1
    if(sign.includes("-") || sign.includes("+")|| sign.includes("/") || sign.includes("x") || sign.includes("^")){
        secondNum+=1
    }
    else{
        firstNum+=1
    }
})

two.addEventListener('click',()=>{
    display.value+=2
    if(sign.includes("-") || sign.includes("+")|| sign.includes("/") || sign.includes("x") || sign.includes("^")){
        secondNum+=2
    }
    else{
        firstNum+=2
    }
})

three.addEventListener('click',()=>{
    display.value+=3
    if(sign.includes("-") || sign.includes("+")|| sign.includes("/") || sign.includes("x") || sign.includes("^")){
        secondNum+=3
    }
    else{
        firstNum+=3
    }
})

four.addEventListener('click',()=>{
    display.value+=4
    if(sign.includes("-") || sign.includes("+")|| sign.includes("/") || sign.includes("x") || sign.includes("^")){
        secondNum+=4
    }
    else{
        firstNum+=4
    }

})

five.addEventListener('click',()=>{
    display.value+=5
    if(sign.includes("-") || sign.includes("+")|| sign.includes("/") || sign.includes("x") || sign.includes("^")){
        secondNum+=5
    }
    else{
        firstNum+=5
    }

})

six.addEventListener('click',()=>{
    display.value+=6
    if(sign.includes("-") || sign.includes("+")|| sign.includes("/") || sign.includes("x") || sign.includes("^")){
        secondNum+=6
    }
    else{
        firstNum+=6
    }

})

seven.addEventListener('click',()=>{
    display.value+=7
    if(sign.includes("-") || sign.includes("+")|| sign.includes("/") || sign.includes("x") || sign.includes("^")){
        secondNum+=7
    }
    else{
        firstNum+=7
    }

})

eight.addEventListener('click',()=>{
    display.value+=8
    if(sign.includes("-") || sign.includes("+")|| sign.includes("/") || sign.includes("x") || sign.includes("^")){
        secondNum+=8
    }
    else{
        firstNum+=8
    }
})

nine.addEventListener('click',()=>{
    display.value+=9
    if(sign.includes("-") || sign.includes("+")|| sign.includes("/") || sign.includes("x") || sign.includes("^")){
        secondNum+=9
    }
    else{
        firstNum+=9
    }
})

multiplication.addEventListener('click',()=>{
    //allows doing multiple operations without pressing equals
    if((!(firstNum=="")) && (!(secondNum=="")) && (!(sign==""))){
        if(sign=="+"){
            let result=parseFloat(firstNum)+parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="-"){
            let result=parseFloat(firstNum)-parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="x"){
            let result=parseFloat(firstNum)*parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="/"){
            let result=parseFloat(firstNum)/parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="^"){
            let result=Math.pow(parseFloat(firstNum),parseFloat(secondNum))
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }
    }else{
        if(sign.includes("x")){
            display.value+=""
        }else{
            display.value+="x"
            sign+="x"    
        }
    }

})

division.addEventListener('click',()=>{
    // allows multiple operations without pressing equals
    if((!(firstNum=="")) && (!(secondNum=="")) && (!(sign==""))){
        if(sign=="+"){
            let result=parseFloat(firstNum)+parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="-"){
            let result=parseFloat(firstNum)-parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="x"){
            let result=parseFloat(firstNum)*parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="/"){
            let result=parseFloat(firstNum)/parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="^"){
            let result=Math.pow(parseFloat(firstNum),parseFloat(secondNum))
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }
    }else{
        if(sign.includes("/")){
            display.value+=""
        }else{
            display.value+="/"
            sign+="/" 
        }
    }

})

addition.addEventListener('click',()=>{
    // allows multiple operations without pressing equals
    if((!(firstNum=="")) && (!(secondNum=="")) && (!(sign==""))){
        if(sign=="+"){
            let result=parseFloat(firstNum)+parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="-"){
            let result=parseFloat(firstNum)-parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="x"){
            let result=parseFloat(firstNum)*parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="/"){
            let result=parseFloat(firstNum)/parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }
        else if(sign=="^"){
            let result=Math.pow(parseFloat(firstNum),parseFloat(secondNum))
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }
    }else{
        if(sign.includes("+")){
            display.value+=""
        }else{
            display.value+="+"
            sign+="+" 
        }
    }   
})

subtraction.addEventListener('click',()=>{
    // allows multiple operations without pressing equals
    if((!(firstNum=="")) && (!(secondNum=="")) && (!(sign==""))){
        if(sign=="+"){
            let result=parseFloat(firstNum)+parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="-"){
            let result=parseFloat(firstNum)-parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="x"){
            let result=parseFloat(firstNum)*parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="/"){
            let result=parseFloat(firstNum)/parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="^"){
        let result=Math.pow(parseFloat(firstNum),parseFloat(secondNum))
        firstNum=result
        secondNum=""
        sign=""
        display.value=result
        }
    }else{
        if(sign.includes("-")){
            display.value+=""
        }else{
            display.value+="-"
            sign+="-"
        }
    }
    
})
power.addEventListener('click',()=>{
    if(!(sign=="") && !(secondNum=="") && !(firstNum=="")){
        if(sign=="+"){
            let result=parseFloat(firstNum)+parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="-"){
            let result=parseFloat(firstNum)-parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="x"){
            let result=parseFloat(firstNum)*parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="/"){
            let result=parseFloat(firstNum)/parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="^"){
            let result=Math.pow(parseFloat(firstNum),parseFloat(secondNum))
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }
    }else{
        if(sign.includes("^")){
            display.value+=""
        }else{
            display.value+="^"
            sign+="^"
        }
        
    }
    
})
squared.addEventListener('click',()=>{
    if((!(firstNum=="")) && (!(secondNum=="")) && (!(sign==""))){
        if(sign=="+"){
            let result=parseFloat(firstNum)+parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="-"){
            let result=parseFloat(firstNum)-parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="x"){
            let result=parseFloat(firstNum)*parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="/"){
            let result=parseFloat(firstNum)/parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="^"){
            let result=Math.pow(parseFloat(firstNum),parseFloat(secondNum))
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }
    }else{
        if(sign.includes("^2")){
            display.value+=""
        }else{
            display.value+="^2"
            sign+="^2"
        }
    }
})
root.addEventListener('click',()=>{
    if((!(firstNum=="")) && (!(secondNum=="")) && (!(sign==""))){
        if(sign=="+"){
            let result=parseFloat(firstNum)+parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="-"){
            let result=parseFloat(firstNum)-parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="x"){
            let result=parseFloat(firstNum)*parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="/"){
            let result=parseFloat(firstNum)/parseFloat(secondNum)
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }else if(sign=="^"){
            let result=Math.pow(parseFloat(firstNum),parseFloat(secondNum))
            firstNum=result
            secondNum=""
            sign=""
            display.value=result
        }
    }else{
        if(sign.includes("√")){
            display.value+=""
        }else{
            display.value+="√"
            sign+="√"
        }
    }
})
decimal.addEventListener('click',()=>{
  if(!(firstNum.includes("."))){
    display.value+="."
    firstNum+="."
  }else if(!(secondNum.includes("."))){
    display.value+="."
    secondNum+="."
  }else{
    display.value+=""
    secondNum+=""
    firstNum+=""
  }
})

clear.addEventListener('click',()=>{
    display.value=""
    firstNum=""
    secondNum=""
    sign=""
    signs.splice(0,signs.length)
    numbers.splice(0,numbers.length)
})

const operate=()=>{
    numbers.push(parseFloat(firstNum))
    numbers.push(parseFloat(secondNum))
    signs.push(sign)

    const final=numbers.reduce((total,item)=>{
        if(signs.includes("+")){
            return total+item
        }else if(signs.includes("-")){
            return total-item
        }else if(signs.includes("/")){
                return total/item
        }else if(signs.includes("x")){
            return total*item
        }else if(signs.includes("^")){
            return Math.pow(total,item)
        }else if(signs.includes("^2")){
            return Math.pow(total,2)
        }else if(signs.includes("√")){
            return Math.sqrt(total)
        }
    })
    
    display.value=Math.round(final*1000)/1000
}

equals.addEventListener('click',operate)
