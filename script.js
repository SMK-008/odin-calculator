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

let display=document.querySelector('input')
//butttons functionalities

let numbers=[]//array for numbers
let signs=[]//array for signs

let number=""//stores number for each part of the operation
zero.addEventListener('click',()=>{
    number+=0
    display.value+=0
})
one.addEventListener('click',()=>{
    number+=1
    display.value+=1

})
two.addEventListener('click',()=>{
    number+=2
    display.value+=2
})
three.addEventListener('click',()=>{
    number+=3
    display.value+=3
})
four.addEventListener('click',()=>{
    number+=4
    display.value+=4

})
five.addEventListener('click',()=>{
    number+=5
    display.value+=5

})
six.addEventListener('click',()=>{
    number+=6
    display.value+=6

})
seven.addEventListener('click',()=>{
    number+=7
    display.value+=7

})
eight.addEventListener('click',()=>{
    number+=8
    display.value+=8
})
nine.addEventListener('click',()=>{
    number+=9
    display.value+=9
})
multiplication.addEventListener('click',()=>{
    display.value+="x"
    signs.push("*")
    numbers.push(parseFloat(number))
    number=""
})
division.addEventListener('click',()=>{
    display.value+="/"
    signs.push("/")
    numbers.push(parseFloat(number))
    number=""
})
addition.addEventListener('click',()=>{
    display.value+="+"
    signs.push("+")
    numbers.push(parseFloat(number))
    number=""
})
subtraction.addEventListener('click',()=>{
    display.value+="-"
    signs.push("-")
    numbers.push(parseFloat(number))
    number=""
})
decimal.addEventListener('click',()=>{
    display.value+="."
    number+="."
})

clear.addEventListener('click',()=>{
    display.value=""
    numbers.splice(0,numbers.length)
    signs.splice(0,signs.length)
    number=""
})


const operate=()=>{
    numbers.push(parseInt(number))
const final=numbers.reduce((result,item)=>{
    let newNumber
    //check if only 2 numbers and one sign
    if(numbers.length==2 || signs.length==1){
        if(signs.includes("+")){
            return  result+item
        }else if(signs.includes("-")){
            return result-item  
        }else if(signs.includes("*")){
            return  result*item
        }else if(signs.includes("/")){
            return result/item  
        }
    }else if(signs.length==2){//what happens when there is multiple signs in the display
        if(signs[0].includes("+")){
            newNumber=numbers[0]+numbers[1]
            numbers.splice(0,2)
            signs.splice(0,1)
            numbers.unshift(newNumber)
            newNumber=`${newNumber}${signs[0]}${numbers[1]}`
            return newNumber
        }else if(signs[0].includes("-")){
            newNumber=numbers[0]-numbers[1]
            numbers.splice(0,2)
            signs.splice(0,1)
            numbers.unshift(newNumber)
            newNumber=`${newNumber}${signs[0]}${numbers[1]}`
            return newNumber
        }else if(signs[0].includes("*")){
            newNumber=numbers[0]*numbers[1]
            numbers.splice(0,2)
            signs.splice(0,1)
            numbers.unshift(newNumber)
            newNumber=`${newNumber}${signs[0]}${numbers[1]}`
            return newNumber
        }else if(signs[0].includes("/")){
            newNumber=numbers[0]/numbers[1]
            numbers.splice(0,2)
            signs.splice(0,1)
            numbers.unshift(newNumber)
            newNumber=`${newNumber}${signs[0]}${numbers[1]}`
            return newNumber 
        }
}
    else if(numbers.includes(newNumber)){
        if(signs.includes("+")){
            return  numbers[0]+numbers[1]
        }else if(signs.includes("-")){
            return numbers[0]-numbers[1]  
        }else if(signs.includes("*")){
            return  numbers[0]*numbers[1]
        }else if(signs.includes("/")){
            return numbers[0]/numbers[1]  
        }
    }
})
display.value=(Math.round(final*100))/100   

}


equals.addEventListener('click',operate)
equals.addEventListener('click',()=>{
    number=""
})

