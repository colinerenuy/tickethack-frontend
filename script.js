//=========================GLOBAL VARIABLES=========================
 let date = '';

//========================SEARCH FORM===============================

document.querySelector('#search-form').onsubmit = function() {return false;}
document.querySelector('#search-form').addEventListener('submit', function() {
    
    
    const arrival = document.querySelector('#search_arrival').value;
    const departure = document.querySelector('#search_departure').value;
    date = document.querySelector('#search_date').value;
    let query = new URLSearchParams();
    query.append('departure', departure);
    query.append('arrival', arrival); 
    query.append('date', date);
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
        <div class = "trip-searched"><span class = "departure"> ${obj.departure}</span> > <span class = "arrival">${obj.arrival}</span></div>
        <div class = "trip-time"></div>
        <div class = 'trip-price'>${obj.price}€</div>
        <button type = "button" class = 'btn-book' type = "button">Book</button>
    </div>
    `
    addToCart()

 }});


})


//========================ADD TO CART===============================


addToCart()

function addToCart() {
    document.querySelectorAll('.btn-book').onsubmit = function() {return false;}

    const buttons = document.querySelectorAll('.btn-book');

    for (let i = 0 ; i < buttons.length ; i++) {

        buttons[i].addEventListener('click', function() {

        const departure = document.querySelectorAll('.departure')[i].textContent;
        const arrival = document.querySelectorAll('.arrival')[i].textContent;
        const priceEuro = document.querySelectorAll('.trip-price')[i].textContent;
        const price = Number(priceEuro.replace(/[^0-9.-]+/g,""))
        console.log(price);

        fetch(`http://localhost:3000/cart`, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ departure, arrival, date, price }),
    })
        .then(response => response.json())
        .then(data => { 
            console.log(data)
            console.log('added to cart')
 })

        })

    }

}
