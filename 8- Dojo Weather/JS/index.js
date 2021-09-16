//===============================================Delete banner cookies================================================

/*function deletecookies(){
    banner.remove()
}

let accept = document.querySelector('.acceptbutton')
let banner = document.querySelector('.banner')

accept.addEventListener("click", deletecookies)*/

//  Or


function deletecookies(){

    let prueba = accept.closest('.banner')
    prueba.remove()
}

let accept = document.querySelector('.acceptbutton')


accept.addEventListener("click", deletecookies)

//===============================================Alerts================================================
function wheaterReport(){
    
    alert("Loading weather report...")
}

let cities = document.querySelectorAll('.city')

for(let i=0; i<cities.length; i++){
cities[i].addEventListener("click", wheaterReport)
}

//===============================================Change grades================================================

function c2f(temp){
    return Math.round( 9 / 5 * temp + 32);
}

function f2c(temp){
    return Math.round( 5 / 9 * (temp - 32));
}


function convert(element){
    
    console.log(element.value);
    for (let i=1; i<9; i++){
        let tempSpan = document.querySelector("#temp"+i)
        var tempVal = parseInt(tempSpan.innerText);
        
        if(element.value === "C") {
            tempSpan.innerText = (f2c(tempVal));
        }
        else{
            tempSpan.innerText = (c2f(tempVal));
        }
    }
}


//Personal Notes



/*function difTemp(event){
    let currentValue = event.target.value;

    if(currentValue === "Celsius"){
        console.log("Im in celsius");
        let tempValue = document.querySelectorAll('.temp');
        let convert
        for(let i=0; i<tempValue.length; i++){
            convert = (tempValue[i].innerHTML -32) *5/9;
            tempValue[i].innerHTML = Math.round(convert);
        }
        
    }

    else{
        if(currentValue === "Fahrenheit" ){
            console.log("Im in fahrenheit");
            let tempValue = document.querySelectorAll('.temp');
            let convert
            for(let i=0; i<tempValue.length; i++){
                convert = (tempValue[i].innerHTML * 9/5) + 32;
                tempValue[i].innerHTML = Math.round(convert);
        }
        } 
    }
}

let tempValue = document.querySelector('.selector');

tempValue.addEventListener('change', difTemp);
*/

/*let grades = document.querySelector('.temp');
temp.addEventListener('change', convert);*/