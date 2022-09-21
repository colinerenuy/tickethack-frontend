//=========================GLOBAL VARIABLES=========================

let searchedDate = '';
//========================SEARCH FORM===============================

document.querySelector('#search-form').onsubmit = function() {return false;}

document.querySelector('#search-form').addEventListener('submit', function() {
    
    const arrival = document.querySelector('#search_arrival').value;
    const departure = document.querySelector('#search_departure').value;
    const date = document.querySelector('#search_date').value;
    searchedDate = date;
    let query = new URLSearchParams();
    query.append('arrival', arrival); 
    query.append('departure', departure);
    query.append('date', date);
    console.log({departure, arrival, date});
    //console.log(query.toString());
    document.querySelector('#result-container').innerHTML = '';

    fetch(`http://localhost:3000/trips?${query.toString()}`)
    .then(response => response.json())
     .then(data => {
        console.log(data);
        console.log(data.trips);
        for (obj of data.trips) {
            document.querySelector('#result-container').innerHTML += `
        <div class = "trip-container">
            <div class="destination">
                <p> 
                    <span class="departure-city">${obj.departure}</span>
                    >
                    <span class="arrival-city">${obj.arrival}</span> 
                </p>

            </div>
            <div class = "trip-time"></div>
            <div class = 'trip-price'>${obj.price}€</div>
            <button type = "submit" class = 'btn-book' type = "button">Book</button>
        </div>
        `

        addToCart()
     }});

})


//========================ADD TO CART===============================


function addToCart() {

    document.querySelectorAll('.btn-book').onsubmit = function() {return false;}

    const buttons = document.querySelectorAll('.btn-book');

    for (let i = 0 ; i < buttons.length ; i++) {

        buttons[i].addEventListener('click', function() {

        const departure = document.querySelectorAll('.departure-city')[i].textContent;
        const arrival = document.querySelectorAll('.arrival-city')[i].textContent;
        const date = searchedDate;
        const priceEuro = document.querySelectorAll('.trip-price')[i].textContent;
        const price = Number(priceEuro.replace(/[^0-9.-]+/g,""));
        let query = new URLSearchParams();
        query.append('arrival', arrival); 
        query.append('departure', departure);
        query.append('date', date);
        
        
    fetch(`http://localhost:3000/trips?${query.toString()}`)
    .then(response => response.json())
     .then(data => {
        console.log(data)
        
        const tripToCart = data[0].filter(trip => trip.price == price)
        console.log(tripToCart)
       /* fetch(`http://localhost:3000/cart`, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ departure, arrival, date, price }),
    })
        .then(response => response.json())
        .then(data => { 
            console.log('Added to cart')
 })*/
     })

        

        })

    }

}
