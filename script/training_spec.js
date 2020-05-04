function addComment() {
    let comment = $("#commentTA").val();
    $("#commentTA").val("");
    if (comment === "") {
        return;
    }
    let commentArr = localStorage.getItem("comments");
    if (!commentArr) {
        commentArr = [[[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    }
    else {
        commentArr = JSON.parse(commentArr);
    }

    let type = findType(document.URL);
    let trNum = findTrNum(document.URL);

    commentArr[type][trNum].push(comment);
    commentArr = JSON.stringify(commentArr);
    localStorage.setItem("comments", commentArr);

    let commentElement = $("<div class=\"card card-body\"><div>").text(comment);
    commentElement.css("opacity", '0');
    $("#commentsCol").prepend(commentElement);
    commentElement.animate({
        opacity: "1"
    }, "slow");
}

document.getElementById("commentBtn").addEventListener("click", addComment);

function addMark() {
    let markElem = document.getElementById("mark");
    let mark = markElem.options[markElem.selectedIndex].value;
    let marks;

    if (mark === "default") {
        return;
    }

    marks = localStorage.getItem("marks");
    if (!marks) {
        marks = [[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]];
    }
    else {
        marks = JSON.parse(marks);
    }

    let type;
    let trNum;
    let docNameArr = document.URL.split("/");
    let docName = docNameArr[docNameArr.length - 1];

    type = findType(docName);
    trNum = findTrNum(docName);

    marks[type][trNum][mark - 1]++;

    let avgMark = findAverageMark(marks[type][trNum]);

    localStorage.setItem("marks", JSON.stringify(marks));
    $("#markText").text("Ocena: " + avgMark);

    let trainings = localStorage.getItem("trainings");
    trainings = JSON.parse(trainings);

    for (let i = 0; i < trainings.length; i++) {
        if (trainings[i].title === $("#title").text()) {
            trainings[i].avgMark = avgMark;
        }
    }

    trainings.sort(comp);
    localStorage.setItem("trainings", JSON.stringify(trainings));
}

document.getElementById("markBtn").addEventListener("click", addMark);

let com = localStorage.getItem("comments");
if (com) {
    com = JSON.parse(com);

    let docNameArr = document.URL.split("/");
    let docName = docNameArr[docNameArr.length - 1];
    let type = findType(docName);
    let trNum = findTrNum(docName);
    com = com[type][trNum];

    com.forEach(function (item) {
        let comElement = $("<div class=\"card card-body\"><div>").text(item);
        $("#commentsCol").prepend(comElement);
    });
}

let m = localStorage.getItem("marks");
if (m) {
    m = JSON.parse(m);
    let docNameArr = document.URL.split("/");
    let docName = docNameArr[docNameArr.length - 1];
    let type = findType(docName);
    let trNum = findTrNum(docName);

    let avgMark = findAverageMark(m[type][trNum]);
    if (avgMark !== 0) {
        $("#markText").text("Ocena: " + avgMark);
    }
    else {
        $("#markText").text("Ocena: nema podataka");
    }
}
else {
    $("#markText").text("Ocena: nema podataka");
}

function findAverageMark(marks) {
    let sum = 0;
    let sumOfMarks = 0;
    marks.forEach(function (item, index) {
        sum += item;
        sumOfMarks += item * (index + 1);
    });
    if (sum === 0) {
        return 0;
    }
    let avgMark = sumOfMarks / sum;
    return avgMark.toFixed(2);
}

function findType(docName) {
    if (docName.includes("yoga")) {
        return 0;
    }
    else if (docName.includes("pilates")) {
        return 1;
    }
    else if (docName.includes("core")) {
        return 2;
    }
    else {
        return 3;
    }
}

function findTrNum(docName) {
    if (docName.includes("1")) {
        return 0;
    }
    else if (docName.includes("2")) {
        return 1;
    }
    else if (docName.includes("3")) {
        return 2;
    }
}

function comp(a, b) {
    return b.avgMark - a.avgMark;
}