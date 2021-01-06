function UI(){

};


UI.prototype.showMessage = function(type,message){
    const container = document.querySelector(".container");
    const alertDiv = document.createElement("div");

    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    container.prepend(alertDiv);

    setTimeout(function(){
        alertDiv.remove();
    },2000);


}

UI.prototype.showVehicles = function(arr_guests = 0 ,dep_guests = 0 ){

    if( arr_guests <= 3 && dep_guests <= 3 ){
        console.log("1-3");
    }else if (arr_guests > 3 && arr_guests <= 6 && dep_guests > 3 && dep_guests <= 6){
        document.getElementById("1-3").style.display = "none";
    }else if (arr_guests > 6 && arr_guests <= 16 && dep_guests > 6 && dep_guests <= 16){
        document.getElementById("1-3");
        document.getElementById("1-6");
    }else{
        this.showMessage("danger","Guests can't be greater than 16");
    }

}









