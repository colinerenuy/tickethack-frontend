//============= RECOVER DATA =============//
const tripInfos = {
    arrival : document.querySelector('.departure').value,
    departure : document.querySelector('.arrival').value,
    date : document.querySelector('.trip-time').value,
    price : document.querySelector('.trip-price').value,
}

function getHour(date) {
    const tripDate = new Date(date)
    const hoursMinutes = ((tripDate.getHours()<10?'0':'') + tripDate.getHours()) + ':' + ((tripDate.getMinutes()<10?'0':'') + tripDate.getMinutes()) ;
    return hoursMinutes
}


fetch('http://localhost:3000/cart')
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.cart);
    if (data.cart){
        let donnees = data.cart
   
    for (let i = 0 ; i< donnees.length  ; i++) {
        document.querySelector('.containe-all-trip').innerHTML += ` 

        <div class="trip-container">
                    <div class="destination">
                        <p> 
                            <span class="departure">${donnees[i].tripInCart.departure}</span>
                            >
                            <span class="arrival">${donnees[i].tripInCart.arrival}</span> 
                        </p>

                    </div>
                    
                    <p class="trip-time">${getHour(donnees[i].tripInCart.date)}</p>
                    <p class="trip-price">${donnees[i].tripInCart.price}  €</p>
                    <button class="btn-delete">✖</button>
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


