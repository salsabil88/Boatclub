//navbar js starts from here
const navSlide=()=>{
    const burger= document.querySelector('.burger');
    const nav= document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
    
    
    burger .addEventListener('click',()=>{
        //toggle nav
         nav.classList.toggle('nav-active');

     //animate links
         navLinks.forEach((link, index)=>{
           if(link.style.animation){
            link.style.animation = '';
           }else{
            link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
           }
          
       });
    });
   
}
navSlide();

//sign up form js starts from here

const form = documents.getElementById('form');
const username = documents.getElementById('username');
const email = documents.getElementById('email');
const password = documents.getElementById('password');
const password2 = documents.getElementById('confirm password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
})
function checkInputs(){
    //get values from input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue===''){
        //show error
        //add error class
        setErrorFor(username,'Username cannot be blank');
    }
    else{
        //add success class
        setSuccessFor(username);
    }
    if(emailValu===''){
        setErrorFor(email,'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'Email is not valid');
    }else{
        setSuccessFor(email);
    }
    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
    if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}
function setErrorFor(input, message){
    const formControl=input.parentElement; //.form-control
    const small= formControl.querySelector('small');
    //add error message inside small
    small.innerText=message;
    //add error class
    formControl.className='form-control error';
}
function setSuccessFor(input){
    const formControl= input.parentElement;
    formControl.className='form-control success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

