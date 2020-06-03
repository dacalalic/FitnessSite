for(let i = 0; i < 36; i++){
    $("#" + i).hide();
}

let sessAppointment = sessionStorage.getItem("appointment");
if (sessAppointment) {
    sessAppointment = JSON.parse(sessAppointment);
    for(let i = 0; i < sessAppointment.length; i++){
        $("#" + sessAppointment[i]).show();
    }
}