//header
const headerbg = document.querySelector('header');
const gnb = document.querySelectorAll('.gnb>li>a>i');
const sns = document.querySelectorAll('.topSns>li>a>i');
const headerHeight = headerbg.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        headerbg.style.backgroundColor = '#ffffff';
        headerbg.style.boxShadow = '0 4px 6px 0 hsla(0,0%,0%,0.2)';
        gnb.forEach(item => {
            item.style.color = '#3c3b3b';
        })
        sns.forEach(item => {
            item.style.color = '#3c3b3b';
        })


    } else {
        headerbg.style.backgroundColor = 'transparent';
        headerbg.style.boxShadow = 'none';
        gnb.forEach(item => {
            item.style.color = 'white';
        })
        sns.forEach(item => {
            item.style.color = 'white';
        })
    }
});

//guest add number

var adultNum = 0;
var addnum1 = document.querySelector('.number1>.num');
var remove1 = document.querySelector('.number1>.remove');
var add1 = document.querySelector('.number1>.add');
var total = document.querySelector('.addGuests>span');

var guestTotal = () => {
    total.innerHTML=adultNum+childrenNum+infantNum;
}

add1.addEventListener('click', () => { 
    addnum1.innerHTML = ++adultNum;
    guestTotal();
});


remove1.addEventListener('click', () => {
    if (adultNum > 0) {
        addnum1.innerHTML = --adultNum;
    }   
   guestTotal();
})

//children
var childrenNum = 0;
var addnum2 = document.querySelector('.number2>.num');
var remove2 = document.querySelector('.number2>.remove');
var add2 = document.querySelector('.number2>.add');

add2.addEventListener('click', () => {
    addnum2.innerHTML =++childrenNum;
    guestTotal();
});
remove2.addEventListener('click', () => {
     if (childrenNum > 0) {
        addnum2.innerHTML = --childrenNum;
    }  
    guestTotal();
});

//infant
var infantNum = 0;
var addnum3 = document.querySelector('.number3>.num');
var remove3 = document.querySelector('.number3>.remove');
var add3 = document.querySelector('.number3>.add');

add3.addEventListener('click', () => {
   
    addnum3.innerHTML = ++infantNum;
    guestTotal();

});

remove3.addEventListener('click', () => {
   
    if (infantNum > 0) {
        
        addnum3.innerHTML = --infantNum;
        guestTotal();

    } 

})

//banner text rolling
