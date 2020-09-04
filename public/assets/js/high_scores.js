
const categories = [
    { name: "All", value: 0 },
    { name: "General Knowledge", value: 9 },
    { name: "Entertainment: Books", value: 10 },
    { name: "Entertainment: Film", value: 11 },
    { name: "Entertainment: Music", value: 12 },
    { name: "Entertainment: Musicals & Theatres", value: 13 },
    { name: "Entertainment: TV", value: 14 },
    { name: "Entertainment: Video Games", value: 15 },
    { name: "Entertainment: Board Games", value: 16 },
    { name: "Science & Nature", value: 17 },
    { name: "Science: Computers", value: 18 },
    { name: "Science: Mathematics", value: 19 },
    { name: "Mythology", value: 20 },
    { name: "Sports", value: 21 },
    { name: "Geography", value: 22 },
    { name: "History", value: 23 },
    { name: "Politics", value: 24 },
    { name: "Art", value: 25 },
    { name: "Celebrities", value: 26 },
    { name: "Animals", value: 27 },
    { name: "Vehicles", value: 28 },
    { name: "Entertainment: Comics", value: 29 },
    { name: "Science: Gadgets", value: 30 },
    { name: "Entertainment: Japanese Anime & Manga", value: 31 },
    { name: "Entertainment: Cartoons & Animation", value: 32 }
]

categories.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});



function getHighScores() {
    let category = $("#inputCategory :selected").val();
    if (category == 0) {
        $.get("/api/scores", (data) => {
            displayScores(data);
        });
    } else {
        $.get("/api/scores/by_category/" + category, (data) => {
            displayScores(data);
        })
    }
}

function displayScores(data) {
    //EMPTY THE SCORE TABLE
    let scoreDump = $("#scores-display")
    scoreDump.empty();
    // console.log(data);
    //CONSTRUCT THE TABLE HEADER
    let thead = $("<thead>");
    let tr = $("<tr>");
    let headerArr = ["Score", "Category", "Name", "Date"]
    headerArr.forEach(e => {
        let th = $("<th>").attr("scope", "col").text(e);
        tr.append(th);
    });
    thead.append(tr);
    //BEGIN CONSTRUCTION OF THE BODY
    let tbody = $("<tbody>");
    data.forEach(e => {
        
        let row = $("<tr>").attr("scope", "row");
        let score = $("<td>").text(e.score);
        let cat = $("<td>").text(e.Category.name);
        let user = $("<td>").text(e.User.username)
        let date = $("<td>").text(formatDate(e.updatedAt));
        row.append(score,cat,user,date);
        row.appendTo(tbody);
    });
    //APPEND HEAD AND BODY
    scoreDump.append(thead,tbody);
}

// HACKY FUNCTION TO FORMAT DATES
function formatDate(date) {
    var dateArr = date.split("");
    // console.log(dateArr);
    var dateStr = "";
    
    dateStr += dateArr[11];
    dateStr += dateArr[12];
    dateStr += dateArr[13];
    dateStr += dateArr[14];
    dateStr += dateArr[15];
    dateStr += dateArr[16];
    dateStr += dateArr[17];
    dateStr += dateArr[18];
    dateStr += dateArr[19];

    dateStr += dateArr[5];
    dateStr += dateArr[6];
    dateStr += dateArr[7];
    dateStr += dateArr[8];
    dateStr += dateArr[9];
    dateStr += dateArr[4];
    dateStr += dateArr[0];
    dateStr += dateArr[1];
    dateStr += dateArr[2];
    dateStr += dateArr[3];

    return dateStr;
}

// EVENT LISTENER
$("#search-hs").on("click", () => {
    event.preventDefault();
    getHighScores();
});

// ON READY MAKE SELECTION LIST
$(document).ready(() => {
    categories.forEach(e => {
        let s = $("<option>").text(e.name);
        s.attr("value", e.value)
        s.appendTo($("#inputCategory"));
    });
});
