const wrapper= document.querySelector('.wrapper')
const signUplink= document.querySelector('.signUp-link')
const signInlink= document.querySelector('.signIn-link')

signUplink.addEventListener('click', ()=>{
 wrapper.classList.toggle('show-sign');
});

signInlink.addEventListener('click', ()=>{
 wrapper.classList.toggle('show-sign');
});