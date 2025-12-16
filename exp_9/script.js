// Async function using fetch and await
async function loadDestinations() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await response.json();
    displayDestinations(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

// DOM manipulation
function displayDestinations(destinations) {
  const container = document.getElementById("destinations");
  container.innerHTML = "";

  destinations.forEach(place => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${place.title}</h3>
      <p>${place.body}</p>
    `;
    container.appendChild(div);
  });
  fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(user => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(res => res.json())
  .then(posts => console.log(posts));

}
