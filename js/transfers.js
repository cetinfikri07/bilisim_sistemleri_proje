

const ui = new UI();


eventListeners();

function eventListeners(){
    document.querySelectorAll(".add").forEach(function(item){
        item.addEventListener("click",function(){
            ui.showMessage("danger","Please make reservation first");
            
        });
    });

    document.getElementById("find-transfer").addEventListener("click",findTransfers);

}


function findTransfers(e){

    // if (document.getElementById("form1").style.display =! "none" && document.getElementById("form2").style.display =! "none" ){

    // }

    const formControlSelect1 = document.getElementById("FormControlSelect1");
    const formControlSelect2 = document.getElementById("FormControlSelect2");
    const arr_date = document.getElementById("arrival-date").value;
    const arr_time = document.getElementById("arrival-time").value;
    const arr_guests = document.getElementById("arrival-guests").value;
    const dep_date = document.getElementById("dep-date").value;
    const dep_time = document.getElementById("dep-time").value;
    const dep_guests = document.getElementById("dep-guests").value;
    const selectValue1 = formControlSelect1.options[formControlSelect1.selectedIndex].text;
    const selectValue2 = formControlSelect2.options[formControlSelect2.selectedIndex].text;

    if (document.getElementById("form1").style.display === "" && document.getElementById("form2").style.display === "none"){
        if(selectValue1 === "" || selectValue2 === "" || arr_date === "" || arr_time === "" || arr_guests === "" ){
            ui.showMessage("danger","Please fill required blanks");
        }else{
            if(arr_guests < 1){
                ui.showMessage("danger","Guests can't be negative number or 0");
            }else {
                ui.showVehicles(arr_guests,arr_guests);
                }
            
            }
        }else if (document.getElementById("form1").style.display === "none" && document.getElementById("form2").style.display === ""){
            if(selectValue1 === "" || selectValue2 === "" || dep_date === "" || dep_guests === "" || dep_time === "" ){
                ui.showMessage("danger","Please fill required blanks");
            }else{
                if(dep_guests < 1 ){
                    ui.showMessage("danger","Guests can't be negative number or 0 ");
                }else{
                    ui.showVehicles(dep_guests,dep_guests);
                }
            }
        }else if (document.getElementById("form1").style.display === "" && document.getElementById("form2").style.display === ""){
            if (selectValue1 === "" || selectValue2 === "" || arr_date === "" || arr_time === "" || arr_guests === "" || dep_date === "" || dep_guests === "" || dep_time === "" ){
                ui.showMessage("danger","Please fill required blanks");
            }else{
                if(dep_guests < 1 || arr_guests < 1 ){
                    ui.showMessage("danger","Guests can't be negative number or 0 ");
                }else if(arr_guests != dep_guests){
                    ui.showMessage("danger","If guests numbers are not equal please make reservation as one way");
                }else{
                    ui.showVehicles(dep_guests,dep_guests);
                   
                    }
            }
        }

        e.preventDefault();
    }



    // if(selectValue1 === "" || selectValue2 === "" || arr_date === "" || arr_time === "" || arr_guests === "" || dep_date === "" || dep_guests === "" || dep_time === ""){
    //     ui.showMessage("danger", "Please fill required blanks");
    // }else {
    //     if ( arr_guests < 1  || dep_guests < 1){
    //         ui.showMessage("danger","Guests can't be negative number or 0");
    //     }else{
    //         ui.showVehicles(arr_guests,dep_guests);
    //     }
    // }












