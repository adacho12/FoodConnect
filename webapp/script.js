// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('wish-form');
    const wishList = document.getElementById('wish-list');
    const rankingList = document.getElementById('ranking-list');


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const text = document.getElementById('wish').value;
        saveWishToLocalStorage(name, email, text);
        loadWishesFromLocalStorage();
        form.reset();
    });

    function loadWishesFromLocalStorage() {
        const wishes = JSON.parse(localStorage.getItem('wishes')) || [];
        wishList.innerHTML = '';
        
        wishes.forEach(wish => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${wish.name}</strong> (${wish.email}): ${wish.text}`;
            wishList.appendChild(listItem);
            listItem.style.animation = 'fadeIn 0.5s ease';
        });
    }
    
    function saveWishToLocalStorage(name, email, text) {
        const wishes = JSON.parse(localStorage.getItem('wishes')) || [];
        wishes.push({ name, email, text });
        localStorage.setItem('wishes', JSON.stringify(wishes));
    }

});
