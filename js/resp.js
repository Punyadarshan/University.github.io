burgur= document.querySelector('.burgur')
navbar= document.querySelector('.navbar')
navlist= document.querySelector('.nav-list')
rightnav= document.querySelector('.right-nav')


burgur.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.class.toggle('h-nav-resp');
})

