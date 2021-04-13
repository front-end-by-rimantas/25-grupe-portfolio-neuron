const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.btn-chatbox');
const closeBtn = document.querySelector('.close-chat-btn');

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

closeBtn.addEventListener('click', ()=>{
    popup.classList.toggle('close');
})

