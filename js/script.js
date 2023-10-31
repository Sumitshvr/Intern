// JavaScript can be used to create interactive effects, like mouse parallax
const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});
// Function to simulate adding an item to the cart
function addToCart() {
    alert('Item added to the cart. Continue shopping or proceed to checkout.');
}

// Function to simulate the checkout process
function checkout() {
    alert('You are being redirected to the checkout page.');
}

// Function to simulate contacting an employee
function contactEmployee() {
    alert('Please fill out the contact form, and our employee will get in touch with you shortly.');
}
// JavaScript to open the online store in a new window
function openOnlineStore() {
    // Define the URL of the online store page
    const onlineStoreURL = 'online-store.html'; // Change this to the actual URL

    // Open a new window
    window.open(onlineStoreURL, '_blank');
}
// Initialize an empty shopping cart
const cart = [];

// Function to add items to the cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(productName + ' added to cart.');
}

// Function to handle the checkout process
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        let total = 0;
        for (const item of cart) {
            total += item.price;
        }
        alert('Checkout successful! Total: $' + total);
        cart.length = 0; // Clear the cart after checkout
    }
}
// Get the search button element
const searchButton = document.getElementById("search-button");

// Get the search bar element
const searchBar = document.getElementById("search-bar");

// Function to toggle the search bar
function toggleSearchBar() {
    searchBar.classList.toggle("active");
    searchBar.focus(); // Automatically focus on the search input field when the bar is opened
}

// Attach a click event to the search button
searchButton.addEventListener("click", toggleSearchBar);
// JavaScript functions for search functionality

// Function to toggle the visibility of the search box
function toggleSearchBox() {
    const searchBoxContainer = document.getElementById("search-box-container");
    searchBoxContainer.classList.toggle("active");
}

// Function to perform the search (You can customize this)
function performSearch() {
    const searchInput = document.getElementById("search-box");
    const searchTerm = searchInput.value;

    // You can implement your search logic here, e.g., filtering products based on the search term
    // For now, let's just alert the search term
    alert("Searching for: " + searchTerm);
}
// Function to perform the search and display results
function performSearch() {
    const searchInput = document.getElementById("search-box");
    const searchTerm = searchInput.value;

    // You can implement your search logic here, e.g., filtering products based on the search term
    // For demonstration purposes, we'll just simulate a search with sample data.
    const products = [
        { name: "AudioVista 5000", description: "Better Sound Quality with ENC Technology.", price: 199.99 },
        { name: "AudioVista Ferrari edition 121", description: "The Best Combo For 'BASS' and Sound 'Quality'.", price: 149.99 },
        // Add more products here
    ];

    const searchResults = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Display the search results in the HTML
    const resultsList = document.getElementById("results-list");
    resultsList.innerHTML = ""; // Clear previous results

    if (searchResults.length === 0) {
        resultsList.innerHTML = "<li>No results found.</li>";
    } else {
        searchResults.forEach(product => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            `;
            resultsList.appendChild(listItem);
        });
    }
}

