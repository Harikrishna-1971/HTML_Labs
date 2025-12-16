// Book data
let bookData = [
    { name: "You Can Win", price: "₹250" },
    { name: "JavaScript Basics", price: "₹399" },
    { name: "Think and Grow Rich", price: "₹299" },
    { name: "Wings of Fire", price: "₹320" }
];

// Function to display books
function displayBooks() {
    let box = document.getElementById("bookList");

    for (let book of bookData) {
        let item = `
        <div class="col-6 col-md-3 mb-3">
            <div class="border p-3 rounded text-center bg-white">
                <strong>${book.name}</strong>
                <p class="text-success">${book.price}</p>
            </div>
        </div>`;
        
        box.innerHTML += item;
    }
}

// Run function
displayBooks();
