const servicesButtons = document.querySelectorAll('.service__item');
// const servicesButtons = document.getElementsByClassName('.service__item');
// const serviceDetails = document.getElementsByClassName('.services__right');
const serviceDetails = document.querySelectorAll('.services__right');

const getService = (category)=>{  //here in category =java
    const details = servicesData.find(item => item.category === category); // sevicesData means data.js  mei serviceData 
    console.log(details);
    serviceDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(paragraph => "<p>"+ paragraph +"</p>")}
    `
    serviceDetails.innerHTML = `
        <h3>${details.title}</h3>
        ${details.description.map(paragraph => "<p>"+paragraph + "</p>")}
    `
    
    
}

servicesButtons.forEach(item =>{   // service button means  all li
    item.addEventListener('click',()=>{
        const serviceClass = item.classList[1];   // here its java
        getService(serviceClass); // fuction calls with getService(java)
    })
})

const containerE1 = document.querySelectorAll('.projects__container')
var mixer = mixitup(containerE1);

mixer.filter('*');
// mixer.filter('.category-a');


// nav toggle
const navMenu = document.querySelector('.nav__menu');
const navOpenBtn = document.querySelector('.nav__toggle-open');
const navCloseBtn = document.querySelector('.nav__toggle-close');

const openNavHandler =()=>{
    navMenu.style.display='flex';
    navOpenBtn.style.display='none';
    navCloseBtn.style.display='inline-block';
}
const closeNavHandler =()=>{
    navMenu.style.display='none';
    navOpenBtn.style.display='inline-block';
    navCloseBtn.style.display='none';
}



navOpenBtn.addEventListener('click',openNavHandler);
navCloseBtn.addEventListener('click',closeNavHandler);

//close nav when on click 
const navItems= navMenu.querySelectorAll('a');
if(window.innerWidth<786){
    navItems.forEach(item=>{
        item.addEventListener('click',closeNavHandler)
    })
}

// dark them toggle btn
const themeBtn = document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click',()=>{
     bodyClass = document.body.className;
    if(!bodyClass){
        bodyClass='dark';
        document.body.className=bodyClass;
        //change toggle btn
       themeBtn.innerHTML="<i class='uil uil-sun'></i>";
       //save theme to local storage
       window.localStorage.setItem('theme',bodyClass)
    }else{
        bodyClass='';
        document.body.className=bodyClass;
        //change toggle btn
       themeBtn.innerHTML="<i class='uil uil-moon'></i>";
    }
})

//load theme on load
window.addEventListener('load',()=>{
    document.body.className=window.localStorage.getItem('theme');
})