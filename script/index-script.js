let trainings = localStorage.getItem("trainings");

if (!trainings) {
    trainings = [
        {
            type: "Yoga",
            title: "Hatha",
            image: "images/slika1.png",
            link: "training_yoga_1.html",
            avgMark: 0
        },
        {
            type: "Pilates",
            title: "Reformer",
            image: "images/slika1.png",
            link: "training_pilates_1.html",
            avgMark: 0
        },
        {
            type: "Core",
            title: "Početni",
            image: "images/slika1.png",
            link: "training_core_1.html",
            avgMark: 0
        },
        {
            type: "Yoga",
            title: "Iyengar",
            image: "images/slika2.png",
            link: "training_yoga_2.html",
            avgMark: 0
        },
        {
            type: "Yoga",
            title: "Kundalini",
            image: "images/slika3.png",
            link: "training_yoga_3.html",
            avgMark: 0
        },
        {
            type: "Pilates",
            title: "Klinički",
            image: "images/slika2.png",
            link: "training_pilates_2.html",
            avgMark: 0
        },
        {
            type: "Pilates",
            title: "Klasični",
            image: "images/slika3.png",
            link: "training_pilates_3.html",
            avgMark: 0
        },
        {
            type: "Core",
            title: "Srednji",
            image: "images/slika2.png",
            link: "training_core_2.html",
            avgMark: 0
        },
        {
            type: "Core",
            title: "Napredni",
            image: "images/slika3.png",
            link: "training_core_3.html",
            avgMark: 0
        },
        {
            type: "Cardio",
            title: "Trčanje",
            image: "images/slika1.png",
            link: "training_cardio_1.html",
            avgMark: 0
        },
        {
            type: "Cardio",
            title: "Vožnja bicikla",
            image: "images/slika2.png",
            link: "training_cardio_2.html",
            avgMark: 0
        },
        {
            type: "Cardio",
            title: "HIIT",
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
    document.getElementById("best" + (i + 1)).innerHTML = 
    "<div class=\"card\"><img class=\"card-img\" src=\"" + trainings[i].image + "\" alt=\"\"><a href=\"" + trainings[i].link + "\"><div class=\"card-img-overlay\"><h2>"
    + trainings[i].type + "</h2><h4>"
    + trainings[i].title + "</h4></div></a></div>";
}