let navMenu =document.querySelector('.nav-ul');
let closeMenu =document.querySelector('.close-btn');
let openMenu =document.querySelector('.btn-menu');
closeMenu.addEventListener('click', () =>{
    navMenu.style.right='-300px';
})
openMenu.addEventListener('click', () =>{
    navMenu.style.right=0;
})
