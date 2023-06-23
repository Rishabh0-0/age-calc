let inputYear = document.getElementById("yearInput");
let inputMonth = document.getElementById("monthInput");
let inputDay = document.getElementById("dayInput");

document.querySelector(".btn").addEventListener("click", function(){
    if (validationCheck()){
        dateCalc();
    }  
});

function validationCheck(){
    
    let inputValid = document.querySelectorAll(".inputValid");
    let inputBox = document.querySelectorAll("input");
    
    if (inputDay.value === ''){
        emptyCheckDisplay(0);
        return false;
    }   
    else if (inputDay.value > 31 || inputDay.value < 1){
        validCheckDisplay(0);
        return false;
    }

    if (inputMonth.value === ''){
        emptyCheckDisplay(1);
        return false;
    }
    else if (inputMonth.value > 12 || inputMonth.value < 1){
        validCheckDisplay(1);
        return false;
    } 

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    
    if (inputYear.value === ''){
        emptyCheckDisplay(2);
        return false;
    }
    else if (inputYear.value > currentYear || inputYear.value < 999){
        validCheckDisplay(2);
        return false;
    }

    return true;


    
    function emptyCheckDisplay(n){
        inputValid[n].textContent = "This field is Required";
        inputValid[n].style.visibility = "visible";
        inputBox[n].classList.add("warningBorder");
        setTimeout(function(){
            inputValid[n].style.visibility = "hidden";
            inputBox[n].classList.remove("warningBorder");
        }, 1500);
        
    }

    function validCheckDisplay(n){
        inputValid[n].textContent = "Must be a valid input";
        inputValid[n].style.visibility = "visible";
        inputBox[n].classList.add("warningBorder");
        setTimeout(function(){
            inputValid[n].style.visibility = "hidden";
            inputBox[n].classList.remove("warningBorder");
        }, 1500);
        
    }
    
}

function dateCalc() {
    let currentDate = new Date();
    
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    let calcYear = currentYear - inputYear.value;
    let calcMonth = currentMonth - inputMonth.value;
    let calcDay = currentDay - inputDay.value;

    let actualYear, actualMonth, actualDay;

    actualYear = calcYear;
    actualMonth = calcMonth;
    actualDay = calcDay;

    if (calcMonth <= 0){
        actualMonth = 12 + calcMonth ;
        actualYear = actualYear - 1;
    }
    if (calcDay < 0){
        actualDay = 30 + calcDay;
        actualMonth = actualMonth - 1;
    }

    let dateDisplay = document.querySelectorAll(".dateDisplay");
    dateDisplay[0].textContent = actualYear;
    dateDisplay[1].textContent = actualMonth;
    dateDisplay[2].textContent = actualDay;
}

