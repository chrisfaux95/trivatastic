const categories = [
    {name: "General Knowledge", value: 9},
    {name: "Entertainment: Books", value: 10},
    {name: "Entertainment: Film", value: 11},
    {name: "Entertainment: Music", value: 12},
    {name: "Entertainment: Musicals & Theatres", value: 13},
    {name: "Entertainment: TV", value: 14},
    {name: "Entertainment: Vvalueeo Games", value: 15},
    {name: "Entertainment: Board Games", value: 16},
    {name: "Science & Nature", value: 17},
    {name: "Science: Computers", value: 18},
    {name: "Science: Mathematics", value: 19},
    {name: "Mythology", value: 20},
    {name: "Sports", value: 21},
    {name: "Geography", value: 22},
    {name: "History", value: 23},
    {name: "Politics", value: 24},
    {name: "Art", value: 25},
    {name: "Celebrities", value: 26},
    {name: "Animals", value: 27},
    {name: "Vehicles", value: 28},
    {name: "Entertainment: Comics", value: 29},
    {name: "Science: Gadgets", value: 30},
    {name: "Entertainment: Japanese Anime & Manga", value: 31},
    {name: "Entertainment: Cartoons & Animation", value: 32}
]
categories.sort((a,b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
})


categories.forEach(e => {
    let s = $("<option>").text(e.name);
    s.attr("value", e.value)
    s.appendTo($("#inputCategory"));

});
const difficulties = [
    {name: "Easy", value: "easy"},
    {name: "Medium", value: "medium"},
    {name: "Hard", value: "hard"},
    {name: "Any", value: null}];
difficulties.forEach(e => {
    let d = $("<div>").addClass("form-check");
    let i = $("<input>").addClass("form-check-input").attr({
        type: "radio", name: "difficultyRadios", value: e.value
    })
    let l = $("<label>").text(e.name).addClass("form-check-label")
    d.append(i,l);
    $("#difficulties").append(d);
});

const types = [
    {name: "True/False", value: "boolean"}, 
    {name: "Multiple Choice", value: "multiple"}, 
    {name: "Any", value: null}];

types.forEach(e => {
    let d = $("<div>").addClass("form-check");
    let i = $("<input>").addClass("form-check-input").attr({
        type: "radio", name: "typeRadios", value: e.value
    })
    let l = $("<label>").text(e.name).addClass("form-check-label")
    d.append(i,l);
    $("#types").append(d);
});


$(".categoryBtn").on("click", function() {
    // var value = $(this).val();
    // var difficulty = $(this).data...
    //var type = ...
    const category = $("#inputCategory :selected").val()
    const difficulty = $("input[type='radio'][name='categoryRadios']:checked").val();
    const type = $("input[type='radio'][name='typeRadios']:checked").val();
    const MAXAMNT = 50;
    quizAjax(MAXAMNT, category, difficulty, type)
    });
    
    function quizAjax(amntNum, catNum, type, difficulty) {
        $.ajax({
            url: "https://opentdb.com/api.php?amount=" + amntNum + "&category=" + catNum + "&difficulty=" + difficulty + "&type=" + qType,
            method: "GET"
        }).then(function (res) {
            if (res.response_code === 0) {
                console.log(res);
                count++;
                console.log(count);
            }
            else {
                if (amntNum > 0) {
                    amntNum--;
                    quizAjax(amntNum, i, type, difficulty);
                }
            }
        });
    }  