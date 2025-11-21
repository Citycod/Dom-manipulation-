const heading = document.getElementById('heading');
const message = document.getElementById('message');
const changeBtn = document.getElementById('change-btn');
const toggleBtn = document.getElementById('toggle-btn');

let clickCount = 0;

changeBtn.addEventListener('click', function() {
    clickCount++;
    message.textContent = `Button clicked ${clickCount} times`;
    
    const messages = [
        "You changed me",
        "Changed again",
        "Keep clicking",
        "Yo",
        "Okay"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    heading.textContent = randomMessage;
});


toggleBtn.addEventListener('click', function() {
    if (message.classList.contains('red-text')) {
        message.classList.remove('red-text');
        message.classList.add('blue-text');
    } else {
        message.classList.remove('blue-text');
        message.classList.add('red-text');
    }
    

    if (toggleBtn.textContent === 'Toggle Color') {
        toggleBtn.textContent = 'Toggle Back';
    } else {
        toggleBtn.textContent = 'Toggle Color';
    }
});