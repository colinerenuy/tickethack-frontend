

document.querySelector('#search-form').addEventListener('submit', function() {
    const arrival = document.querySelector('#search-departure').value;
    console.log(arrival);
    const departure = document.querySelector('#search-arrival').value;
    const date = document.querySelector('#search_date').value;
    /*const form = document.querySelector("#search-form");
    const formData = new FormData();
    formData.append("departure", document.querySelector("search-departure").value)
    console.log(formData);*/

fetch(`http://localhost:3000/trips/?departure=${arrival}&arrival=${departure}&date=${date}`)
.then(response => response.json())
 .then(data => {
    for (obj of data) {
        document.querySelector('#results').innerHTML += `
    <div class = "trip-container">
        <div class = "trip-searched">${obj.departure} > ${obj.arrival}</div>
        <div class = "trip-time"></div>
        <div class = 'trip-price'>${obj.price}€</div>
        <button class = 'book-btn' type = "button">Book</button>
    </div>
    }
    `
 }});
})