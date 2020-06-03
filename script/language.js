var serbian = [];
var english = [];

serbian.push('about-us.html');
serbian.push('cardio-sr.html');
serbian.push('core-sr.html');
serbian.push('index-sr.html');
serbian.push('massage-sr.html');
serbian.push('my-account-sr.html');
serbian.push('nutritionist-sr.html');
serbian.push('pilates-sr.html');
serbian.push('schedule-training-sr.html');
serbian.push('services-sr.html');
serbian.push('training_cardio_1.html');
serbian.push('training_cardio_2.html');
serbian.push('training_cardio_3.html');
serbian.push('training_core_1.html');
serbian.push('training_core_2.html');
serbian.push('training_core_3.html');
serbian.push('training_pilates_1.html');
serbian.push('training_pilates_2.html');
serbian.push('training_pilates_3.html');
serbian.push('training_yoga_1.html');
serbian.push('training_yoga_2.html');
serbian.push('training_yoga_3.html');
serbian.push('trainings-sr.html');
serbian.push('yoga-sr.html');


english.push('about-us-eng.html');
english.push('cardio-eng.html');
english.push('core-eng.html');
english.push('index-sr.html');
english.push('massage-eng.html');
english.push('my-account-eng.html');
english.push('nutritionist-eng.html');
english.push('pilates-eng.html');
english.push('schedule-training-eng.html');
english.push('services-eng.html');
english.push('training_cardio_1-eng.html');
english.push('training_cardio_2-eng.html');
english.push('training_cardio_3-eng.html');
english.push('training_core_1-eng.html');
english.push('training_core_2-eng.html');
english.push('training_core_3-eng.html');
english.push('training_pilates_1-eng.html');
english.push('training_pilates_2-eng.html');
english.push('training_pilates_3-eng.html');
english.push('training_yoga_1-eng.html');
english.push('training_yoga_2-eng.html');
english.push('training_yoga_3-eng.html');
english.push('trainings-eng.html');
english.push('yoga-eng.html');

function save(znak){

    localStorage.setItem("jezik",znak);

}


function change(znak){

    if (znak){
        var i = 0;
        var pom = window.location.href;
        var arr = pom.split('/');
        while (i < serbian.length){
            if (arr[3] == serbian[i]){
                window.location.href = english[i];
            }   
        i++;
        }
    }
    else{
        var i = 0;
        var pom = window.location.href;
        var arr = pom.split('/');
        while (i < english.length){
            if (arr[3] == english[i]){
                window.location.href = serbian[i];
            }   
        i++;
        }
    } 
} 