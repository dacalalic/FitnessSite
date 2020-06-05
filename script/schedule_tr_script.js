$(".text-success").hide();

let locAppointment = localStorage.getItem("appointment");
if (!locAppointment) {
    let initDate = new Date();
    locAppointment = new Array(36);
    for(let i = 0; i < locAppointment.length; i++){
        locAppointment[i] = {
            freeNum: 10,
            timeDate: initDate
        };
    }
    localStorage.setItem("appointment", JSON.stringify(locAppointment));
}
else {
    locAppointment = JSON.parse(locAppointment);
    let initDate = new Date();
    for(let i = 0; i < locAppointment.length; i++){
        if(locAppointment[i].timeDate <= initDate){
            locAppointment[i].timeDate = initDate;
            locAppointment[i].freeNum = 10;
        }
    }
}

for (let i = 0; i < locAppointment.length; i++) {
    $("#" + (i + 1)).prev().text(" " + locAppointment[i].freeNum);
}

let sessAppointment = sessionStorage.getItem("appointment");
if (!sessAppointment) {
    sessAppointment = [];
    sessionStorage.setItem("appointment", JSON.stringify(sessAppointment));
}
else {
    sessAppointment = JSON.parse(sessAppointment);
}

for (let i = 0; i < sessAppointment.length; i++) {
    $("#" + (sessAppointment[i] + 1)).hide();
    for(let j = sessAppointment[i] % 3; j < 36; j = j + 3){
        $("#" + (j + 1)).hide();
    }

    $("#" + (sessAppointment[i] + 1)).next().show();
}

$(".resBtn").click(function () {
    let id = parseInt($(this).attr("id")) - 1;
    locAppointment[id].freeNum--;
    $(this).prev().text(" " + locAppointment[id].freeNum);

    let d = new Date();
    if ((d.getDay() !== 2 * (id % 3)) || ((d.getDay() === 2 * (id % 3)) && (d.getHours >= 10) || (d.getHours == 10 && d.getMinutes() >= 30))) {
        d.setDate(d.getDate() + 7 - ((d.getDay() + 6) % 7 + 7 - (id % 3) * 2) % 7);
    }

    d.setHours(10);
    d.setMinutes(30);
    d.setSeconds(0);
    d.setMilliseconds(0);

    $(this).hide();
    $(this).next().show();

    locAppointment[id].timeDate = d;
    sessAppointment.push(id);

    localStorage.setItem("appointment", JSON.stringify(locAppointment));
    sessionStorage.setItem("appointment", JSON.stringify(sessAppointment));

    for (let i = id % 3; i < 36; i = i + 3) {
        $("#" + (i + 1)).hide();
    }
});

let typeArr = ["yoga", "pilates", "core", "cardio"];

$("#yoga").click(function(){
    showAndHide("yoga");
});
$("#pilates").click(function(){
    showAndHide("pilates");
});
$("#core").click(function(){
    showAndHide("core");
});
$("#cardio").click(function(){
    showAndHide("cardio");
});

function showAndHide(type){
    for(let i = 0; i < typeArr.length; i++){
        if(typeArr[i] === type){
            $("." + typeArr[i] + "Tr").show();
        }
        else{
            $("." + typeArr[i] + "Tr").hide();
        }
    }
}