//============= BOOKING TO REGISTER =============//
const tripInfo = {
    arrival : document.querySelector('.departure').value,
    departure : document.querySelector('.arrival').value,
    date : document.querySelector('.trip-time').value,
    price : document.querySelector('.trip-price').value,
}


fetch('http://localhost:3000/booking')
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.trips[0]);
    if (data.trips[0]){

    for (obj of data.trips) {
        document.querySelector('.container-info-trip').innerHTML += ` 

            <div class="trip-container">
                    <div class="destination">
                        <p> 
                            <span class="departure">${obj.departure}</span>
                            >
                            <span class="arrival">${obj.arrival}</span> 
                        </p>

                    </div>
                    <p class="trip-time">${obj.date}</p>
                    <p class="trip-price">${obj.price}</p>
                    <p class="time-departure"> Departure in 5 hours</p>
            </div>
        
        
    `
 } 
}
 
});

//============= BOOKINGS EMPTY =============//

function bookingEmpty(){
    for(let i=0; i < document.querySelectorAll(".trip-container").length; i++){
        if(document.querySelectorAll('.trip-container').length == 0){
            let bookings = document.querySelectorAll('.bookings-with-trip')

            bookings.style.display = 'none'

            document.querySelector('.container-info-trip').innerHTML += `
                <div class="info-trip">
                <p>No booking yet.</p>
                <p>Why not plan a trip ?</p>
                </div>
            `
        }

    }
}