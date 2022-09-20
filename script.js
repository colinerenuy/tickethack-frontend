
document.querySelector('#search').addEventListener('click', {

    fetch('http://localhost:3000/trips')
 .then(response => response.json())
 .then(data => {
    for (obj of data) {
        document.querySelector('#results').innerHTML += `
    <div class = "trip-container">
        <div class = "trip-searched">${obj.departure} > ${obj.arrival}</div>
        <div class = "trip-time"></div>
        <div class = 'trip-price'>${obj.price}€</div>
        <button id = 'book' type = "button">Book</button>
    </div>
    }
    
    
    `
 }); 

})