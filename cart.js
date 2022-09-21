//============= DELETE TRIP =============//
function deletetrip(){
    for (let i=0; i < document.querySelectorAll('.btn-delete').length; i++){
        document.querySelectorAll('.btn-delete')[i].addEventListener('click',
        function(){
            this.parentNode.remove();
        });
    
    }
   

}
deletetrip()


