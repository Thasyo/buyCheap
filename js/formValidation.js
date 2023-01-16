const form = document.querySelector("#form");
const nameInput = document.querySelectorAll("label");
const fields = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    nameValidation();
    emailValidation();
    messageValidation();
})


const setError = (index) => {
    fields[index].style.border="solid 2px red";
    nameInput[index].style.color="red";
    spans[index].style.display="block";
}

const removeError = (index) => {
    fields[index].style.border="";
    nameInput[index].style.color="";
    spans[index].style.display="";
}


const nameValidation = () => {
    if(fields[0].value.length < 3){
        setError(0);
    } else {
        removeError(0);
    }
}

const emailValidation = () => {
    if(!emailRegex.test(fields[1].value)){
        setError(1);
    } else {
        removeError(1);
    }
}

const messageValidation = () => {
    if(fields[2].value.length <= 20){
        setError(2);
    } else {
        removeError(2);
    }
}