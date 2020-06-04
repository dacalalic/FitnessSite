var name;
var surname;
var email;
var date;
var number;
var problem;
var checkbox;

function checking(i){

   document.getElementById('error-name').innerHTML = "";
   document.getElementById('error-surname').innerHTML = "";
   document.getElementById('error-email').innerHTML = "";      
   document.getElementById('error-number').innerHTML = "";
   document.getElementById('error-date').innerHTML = "";

   if(i){
        
    name = document.nutri_form.name.value;
    surname = document.nutri_form.surname.value;
    email = document.nutri_form.email.value;
    date = document.nutri_form.date.value;
    number = document.nutri_form.number.value;
    problem = document.nutri_form.problem.value;
    checkbox = document.nutri_form.checkbox.value;
    var checkbox = document.getElementById("checkn");

    if (checkbox.checked == true) goNutri();
    }
    else{
        
    name = document.massage_form.name.value;
    surname = document.massage_form.surname.value;
    email = document.massage_form.email.value;    
    date = document.massage_form.date.value;
    number = document.massage_form.number.value;
    problem = document.massage_form.problem.value;
    var checkbox = document.getElementById("checkm");
   
    if (checkbox.checked == true) goMassage();
    }


    if (name == '')  document.getElementById('error-name').innerHTML = "* Neispravno uneseno ime *";
    if (surname == '')   document.getElementById('error-surname').innerHTML = "* Neispravno uneseno prezime *";
    if (email == '')    document.getElementById('error-email').innerHTML = "* Neispravno unesen email *";      
    if (number == '')         document.getElementById('error-number').innerHTML = "* Neispravno unesen telefon *";
    if (date == '')  document.getElementById('error-date').innerHTML = "* Neispravno unesen datum *";
        

    
    date1 = new Date();

    var regName = /^[A-Z][a-z]+$/
    var regMail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;

    if (date == ''){
        document.getElementById('error-date').innerHTML = "* Neispravno unesen datum *"
    }

    if (!(name.match(regName))){
        document.getElementById('error-name').innerHTML = "* Neispravno uneseno ime *"
    }

    if (!(surname.match(regName))){
        document.getElementById('error-surname').innerHTML = "* Neispravno uneseno prezime *"
    }

    if (!(email.match(regMail))){
        document.getElementById('error-email').innerHTML = "* Neispravno unesen email *"
    }
    

    var month1 = date1.getMonth() + 1;
    var day1 = date1.getDate();
    var year1 = date1.getYear() + 1900;

    var year = date[0] + date[1] + date[2] + date[3];
    var month = date[5] + date[6];  
    var day;

    if (date[8] == 0) day = date[9];
    else day = date[8] + date[9];
  
    if (year1 > year){
        document.getElementById('error-date').innerHTML = "* Neispravno unesen datum *";
    }
    else if (year == year1){
        if (month1 >  month){
        document.getElementById('error-date').innerHTML = "* Neispravno unesen datum *";
        }
        else if (month1 == month) {
            if (day1 > day)  document.getElementById('error-date').innerHTML = "* Neispravno unesen datum *";
        }
    }

    var phoneno = /^\+381\d{8,9}$/;
  if (!(number.match(phoneno))) 
            document.getElementById('error-number').innerHTML = "* Neispravno unesen telefon *";
    

    if (problem == ''){
            document.getElementById('error-problem').innerHTML = "* Nije unesen problem *";   
    }
}


function goNutri(){
    var doc = new jsPDF({
        orientation: 'landscape'
    });
    
    name = document.nutri_form.name.value;
    surname = document.nutri_form.surname.value;
    email = document.nutri_form.email.value;
    date = document.nutri_form.date.value;
    number = document.nutri_form.number.value;
    problem = document.nutri_form.problem.value;
    
    doc.setFontSize(50);
    doc.text(20, 20,'Nutritionist form');
    doc.text(20,30,"---------------------")
    doc.setFontSize(28);

    doc.text(20, 45,'Name:');
    doc.text(60,45,name);    
    doc.text(165, 45,'Surname:');
    doc.text(215,45,surname); 
    doc.text(20, 60,'Date:');
    doc.text(60,60,date);    
    doc.text(165, 60,'Number:');
    doc.text(215,60,number); 
    doc.text(70, 75,'Email:');
    doc.text(110,75,email); 
    doc.text(20,100,"Problem:");
    doc.text(20,110,"------------");
    doc.setFontSize(18);
    doc.text(0,125,problem);   
    doc.save('Nutritionist.pdf');
}

function goMassage(){
    var doc1 = new jsPDF({
        orientation: 'landscape'
    });

    name = document.massage_form.name.value;
    surname = document.massage_form.surname.value;
    email = document.massage_form.email.value;
    date = document.massage_form.date.value;
    number = document.massage_form.number.value;
    problem = document.massage_form.problem.value;
    
    doc1.setFontSize(50);
    doc1.text(20, 20,'Nutritionist form');
    doc1.text(20,30,"---------------------")
    doc1.setFontSize(28);

    doc1.text(20, 45,'Name:');
    doc1.text(60,45,name);    
    doc1.text(165, 45,'Surname:');
    doc1.text(215,45,surname); 
    doc1.text(20, 60,'Date:');
    doc1.text(60,60,date);    
    doc1.text(165, 60,'Number:');
    doc1.text(215,60,number); 
    doc1.text(70, 75,'Email:');
    doc1.text(110,75,email); 
    doc1.text(20,100,"Problem:");
    doc1.text(20,110,"------------");
    doc1.setFontSize(18);
    doc1.text(0,125,problem);
    doc1.save('Massage.pdf');
}