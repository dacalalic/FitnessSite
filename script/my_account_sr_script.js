for(let i = 0; i < 36; i++){
    $("#" + i).hide();
}

let sessAppointment = sessionStorage.getItem("appointment");
if (sessAppointment) {
    sessAppointment = JSON.parse(sessAppointment);
    let locA = localStorage.getItem("appointment");
    locA = JSON.parse(locA);

    let tempDate = new Date();
    tempDate.setMinutes(tempDate.getMinutes() + 30);
    for(let i = 0; i < sessAppointment.length; i++){
        $("#" + sessAppointment[i]).show();
        if(locA[sessAppointment[i]].timeDate <= tempDate){
            $("#" + sessAppointment[i] + " .cancel").hide();
        }
    }
}

$(".cancel").on("click", function(){
    $(this).parent().parent().hide();
    let id = $(this).parent().parent().attr("id");
    let locA = localStorage.getItem("appointment");
    locA = JSON.parse(locA);
    locA[id].freeNum++;
    
    for(let i = 0; i < sessAppointment.length; i++){
        if(sessAppointment[i] == id){
            sessAppointment.splice(i, 1);
        }
    }

    localStorage.setItem("appointment", JSON.stringify(locA));
    sessionStorage.setItem("appointment", JSON.stringify(sessAppointment));
});