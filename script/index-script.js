let trainings = localStorage.getItem("trainings");

if (!trainings) {
    trainings = [
        {
            type: "Yoga",
            title: "Hatha",
            titleEng: "Hatha",
            image: "images/slika1.png",
            link: "training_yoga_1.html",
            avgMark: 0
        },
        {
            type: "Pilates",
            title: "Reformer",
            titleEng: "Reformer",
            image: "images/slika1.png",
            link: "training_pilates_1.html",
            avgMark: 0
        },
        {
            type: "Core",
            title: "Početni",
            titleEng: "Beginner",
            image: "images/slika1.png",
            link: "training_core_1.html",
            avgMark: 0
        },
        {
            type: "Yoga",
            title: "Iyengar",
            titleEng: "Iyengar",
            image: "images/slika2.png",
            link: "training_yoga_2.html",
            avgMark: 0
        },
        {
            type: "Yoga",
            title: "Kundalini",
            titleEng: "Kundalini",
            image: "images/slika3.png",
            link: "training_yoga_3.html",
            avgMark: 0
        },
        {
            type: "Pilates",
            title: "Klinički",
            titleEng: "Clinical",
            image: "images/slika2.png",
            link: "training_pilates_2.html",
            avgMark: 0
        },
        {
            type: "Pilates",
            title: "Klasični",
            titleEng: "Classical",
            image: "images/slika3.png",
            link: "training_pilates_3.html",
            avgMark: 0
        },
        {
            type: "Core",
            title: "Srednji",
            titleEng: "Normal",
            image: "images/slika2.png",
            link: "training_core_2.html",
            avgMark: 0
        },
        {
            type: "Core",
            title: "Napredni",
            titleEng: "Advanced",
            image: "images/slika3.png",
            link: "training_core_3.html",
            avgMark: 0
        },
        {
            type: "Cardio",
            title: "Trčanje",
            titleEng: "Running",
            image: "images/slika1.png",
            link: "training_cardio_1.html",
            avgMark: 0
        },
        {
            type: "Cardio",
            title: "Vožnja bicikla",
            titleEng: "Cycling",
            image: "images/slika2.png",
            link: "training_cardio_2.html",
            avgMark: 0
        },
        {
            type: "Cardio",
            title: "HIIT",
            titleEng: "HIIT",
            image: "images/slika3.png",
            link: "training_cardio_3.html",
            avgMark: 0
        },
    ];
    localStorage.setItem("trainings", JSON.stringify(trainings));
}
else {
    trainings = JSON.parse(trainings);
}

for (let i = 0; i < 3; i++) {
    let title;
    if(document.URL.includes("eng.html")){
        title = trainings[i].titleEng;
    }
    else{
        title = trainings[i].title;
    }

    document.getElementById("best" + (i + 1)).innerHTML = 
    "<div class=\"card\"><img class=\"card-img\" src=\"" + trainings[i].image + "\" alt=\"\"><a href=\"" + trainings[i].link + "\"><div class=\"card-img-overlay\"><h2>"
    + trainings[i].type + "</h2><h4>"
    + title + "</h4></div></a></div>";
}