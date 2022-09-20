

document.querySelector('#search-form').onsubmit = function() {return false;}
document.querySelector('#search-form').addEventListener('submit', function() {
    
    const arrival = document.querySelector('#search_departure').value;
    const departure = document.querySelector('#search_arrival').value;
    const date = document.querySelector('#search_date').value;
    let query = new URLSearchParams();
    query.append('arrival', arrival);
    query.append('departure', departure)
    query.append('date', date)
    console.log({arrival, departure, date});
    console.log(query.toString());
    /*const form = document.querySelector("#search-form");
    const formData = new FormData();
    formData.append("departure", document.querySelector("search-departure").value)
    console.log(formData);*/

  //  http://localhost:3000/trips?departure=Paris&arrival=Lyon&date=2022-09-20
//http://localhost:3000/trips?departure=${arrival}&arrival=${departure}&date=${date}
document.querySelector('#result-container').innerHTML = '';

fetch(`http://localhost:3000/trips?${query.toString()}`)
.then(response => response.json())
 .then(data => {
    console.log(data);
    console.log(data.trips);
    for (obj of data.trips) {
        document.querySelector('#result-container').innerHTML += `
    <div class = "trip-container">
        <div class = "trip-searched">${obj.departure} > ${obj.arrival}</div>
        <div class = "trip-time"></div>
        <div class = 'trip-price'>${obj.price}€</div>
        <button type = "submit" class = 'btn-book' type = "button">Book</button>
    </div>
    `
 }});
})