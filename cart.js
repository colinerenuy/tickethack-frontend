//============= RECOVER DATA =============//
const tripInfos = {
    arrival : document.querySelector('.departure').value,
    departure : document.querySelector('.arrival').value,
    date : document.querySelector('.trip-time').value,
    price : document.querySelector('.trip-price').value,
}


fetch('http://localhost:3000/cart')
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.cart);
    if (data.cart){

   
    for (obj of data.cart) {
        document.querySelector('.containe-all-trip').innerHTML += ` 

        <div class="bookings-with-trip">
        <div class="info-trip">
            <h3> My bookings</h3>
            <div class="trip-container">
                <div class="destination">
                    <p> 
                        <span class="departure">${obj.departure}</span>
                        >
                        <span class="arrival">${obj.arrival}</span> 
                    </p>
                </div>
                <p class="trip-time">${obj.date}/p>
                <p class="trip-price">${obj.price} €</p>
                <p class="time-departure"> Departure in 5 hours</p>
            </div>  
            <hr>
            <p class="msg-goodbye">Enjoy your travels with Tickethack !</p>  
        </div> 
    </div>        
    `
    deletetrip();
 } 
}
 
});



//============= DELETE TRIP =============//

function deletetrip(){
    for (let i=0; i < document.querySelectorAll('.btn-delete').length; i++){
        document.querySelectorAll('.btn-delete')[i].addEventListener('click',
        function(){
            console.log("click");
            this.parentNode.remove();

            if(document.querySelectorAll('.btn-delete').length == 0){
        
                document.querySelector('.total-trip').style.display = "none";
                document.querySelector('.title_h3').style.display = "none";
                
            
                document.querySelector('.container-info-trip').innerHTML += `
                <div class="info-trip">
                    <div class="no-found">
                        <p>No tickets in your cart.</p>
                        <p>Why not plan a trip ?</p>
                    </div>   
                 </div> 
                 ` 
            }
        })
    }    
}
deletetrip()



