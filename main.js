const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// to close modal when we click outside the modal as well.
window.addEventListener('click' , outsideClick);


function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none'; 
}

function outsideClick(e){ //we pass parameter as this fnx fires off when the event fires off.
    if(e.target == modal){
        closeModal();
    }
}


// ****** Adding smooth scroll ******

var btn = document.getElementById('trigger')
btn.addEventListener('click', function(event){
    event.preventDefault();
    var targetSection = document.querySelector('.live-sports');
    var interval = setInterval(function(){
        var coordinates = targetSection.getBoundingClientRect();
        if(coordinates.top<=0){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,30);
    },20);
})