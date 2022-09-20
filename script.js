//========================SEARCH FORM===============================

document.querySelector('#search-form').onsubmit = function() {return false;}
document.querySelector('#search-form').addEventListener('submit', function() {
    
    const arrival = document.querySelector('#search_departure').value;
    const departure = document.querySelector('#search_arrival').value;
    const date = document.querySelector('#search_date').value;
    let query = new URLSearchParams();
    query.append('arrival', arrival);
    query.append('departure', departure)
    query.append('date', date)
    //console.log({arrival, departure, date});
    //console.log(query.toString());

document.querySelector('#result-container').innerHTML = '';

fetch(`http://localhost:3000/trips?${query.toString()}`)
.then(response => response.json())
 .then(data => {
    //console.log(data);
    //console.log(data.trips);
    for (obj of data.trips) {
        document.querySelector('#result-container').innerHTML += `
    <div class = "trip-container">
        <div class = "trip-searched">${obj.departure} > ${obj.arrival}</div>
        <div class = "trip-time"></div>
        <div class = 'trip-price'>${obj.price}€</div>
        <button type = "button" class = 'btn-book' type = "button">Book</button>
    </div>
    `
    addToCart()
 }});


})

//========================ADD TO CART===============================

function addToCart() {

document.querySelectorAll('.btn-book').onsubmit = function() {return false;}

const buttons = document.querySelectorAll('.btn-book');

for (let i = 0 ; i<buttons.length ; i++) {

    buttons[i].addEventListener('click', function() {
        const tripSearched = document.querySelectorAll('.trip-searched')[i].textContent;
        const tripPrice = document.querySelectorAll('.trip-price')[i].textContent;
        const tripTime = document.querySelectorAll('.trip-time')[i].textContent;
        
        window.location.assign('cart.html');

        
        
    })
}

}
