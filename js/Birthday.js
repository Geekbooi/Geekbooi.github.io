// Get the wish list element
const wishList = document.querySelector('.wish-list');

// Create an array to store wishes
let wishes = [];

// Function to add a wish to the list
function addWish(wish) {
  // Add the wish to the array
  wishes.push(wish);
  
  // Create a new li element for the wish
  const li = document.createElement('li');
  li.classList.add('wish');
  
  // Add the wish text to the li element
  li.innerText = wish;
  
  // Append the li element to the wish list
  wishList.appendChild(li);
}

// Function to remove all wishes from the list
function clearWishes() {
  // Clear the wishes array
  wishes = [];
  
  // Remove all li elements from the wish list
  while (wishList.firstChild) {
    wishList.removeChild(wishList.firstChild);
  }
}

// Add event listener to the add wish form
const addWishForm = document.querySelector('.add-wish-form');
const addWishInput = addWishForm.querySelector('input[type="text"]');
addWishForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const wish = addWishInput.value.trim();
  if (wish !== '') {
    addWish(wish);
    addWishInput.value = '';
  }
});

// Add event listener to the clear wishes button
const clearWishesBtn = document.querySelector('.clear-wishes-btn');
clearWishesBtn.addEventListener('click', () => {
  clearWishes();
});
