// Solution Handling
function modButtonSolve(buttonColor, buttonText) {
    modButtonHideAnswers();

    // Solution Cases
    if (buttonColor === "blue" && buttonText === "abort") {
        modButtonShowAnswer("hold");
        return;
    }

    if (bomb.batteries === undefined) {
        bomb.batteriesModal(modButtonSolve, [buttonColor, buttonText]);
        return;
    }

    if (bomb.batteries > 1 && buttonText === "detonate") {
        modButtonShowAnswer("click");
        return;
    }

    if (bomb.indicatorCARLit === undefined) {
        bomb.CARModal(modButtonSolve, [buttonColor, buttonText]);
        return;
    }

    if (buttonColor === "white" && bomb.indicatorCARLit) {
        modButtonShowAnswer("hold");
        return;
    }

    if (bomb.indicatorFRKLit === undefined) {
        bomb.FRKModal(modButtonSolve, [buttonColor, buttonText]);
        return;
    }

    if (bomb.batteries > 2 && bomb.indicatorFRKLit) {
        modButtonShowAnswer("click");
        return;
    }

    if (buttonColor === "yellow") {
        modButtonShowAnswer("hold");
        return;
    }

    if (buttonColor === "red" && buttonText === "hold") {
        modButtonShowAnswer("click");
        return;
    }

    modButtonShowAnswer("hold");
}

function modButtonHideAnswers() {
    $("#modButtonHold").hide();
    $("#modButtonClick").hide();
    $("#modButtonChoice").hide();
}
function modButtonShowAnswer(answer) {
    if(answer === "hold") {
        $("input[name='buttonStrip']:checked").each(function(){
            $(this).prop("checked", false);
        });
        $("#modalButtonStrip").modal("toggle");
    }
    else if(answer === "click") {
        $("#modButtonClick").show();
    }
    else if(answer === "choice") {
        $("#modButtonChoice").show();
    }
    else {
        $("#modButtonRelease").html(answer);
        $("#modButtonHold").show();
    }
}

$("#modButtonSolve").click(function () {
    var color = $("input[name='modButtonColor']:checked").val();
    var text = $("input[name='modButtonText']:checked").val();

    if(color === undefined || text === undefined) {
        modButtonShowAnswer("choice");
    }
    else {
        modButtonSolve(color, text);
    }
    $(this).blur();
});

$("#modButtonReset").click(function () {
    modButtonHideAnswers();
    $("input[name='modButtonColor']:checked").each(function(){
        removeChecked($(this));
    });
    $("input[name='modButtonText']:checked").each(function(){
        removeChecked($(this));
    });
    $(this).blur();
});

$("input[name='buttonStrip']").change(function () {
    $("#modalButtonStrip").modal("toggle");
    modButtonShowAnswer($(this).val());
});