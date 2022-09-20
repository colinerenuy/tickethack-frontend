//============= DELETE TRIP =============//
function deletetrip(){
    for (let i=0; i < document.querySelectorAll('.btn-delete').length; i++){
        document.querySelectorAll('.btn-delete')[i].addEventListener('click',
        function(){
            this.parentNode.remove();
        });
    
        // if ( document.querySelectorAll('.btn-delete').length == 0){
        //     console.log('hello')
        //     console.log( document.querySelectorAll('.btn-delete').length)
        //     document.querySelector(".total-trip").style.display = none;
            
    
        //     // document.querySelector('.container-info-trip').innerHTML += `
        //     // <div class="info-trip">
        //     //     <div class="no-found">
        //     //         <p>No tickets in your cart.</p>
        //     //         <p>Why not plan a trip ?</p>
        //     //     </div>   
        //     // </div>`
        // }
    }
   

}
deletetrip()