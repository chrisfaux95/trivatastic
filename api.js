
$(".categoryBtn").on("click", function() {
// var value = $(this).val();
// var difficulty = $(this).data...
//var type = ...
const MAXAMNT = 50;
quizAjax(MAXAMNT, value, difficulty, type)
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