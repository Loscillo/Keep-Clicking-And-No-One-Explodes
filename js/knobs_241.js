$("#modKnobsReset").click(function () {
    for (var i = 0; i < 6; i++) {
        if ($('input[id=modKnobs' + i + ']:checked').val()) {
            $('button[id=modKnobsButton' + i + ']').trigger("click");
        }
    }
    $("#modKnobsError").hide();
    $("#modKnobsSuccess").hide();
    $(this).blur();
});

$("#modKnobsSolve").click(function () {
    $(this).blur();

    var ledDB = {
        '001001': "Up",
        '001010': "Up",
        '011001': "Down",
        '000000': "Down",
        '000010': "Left",
        '101010': "Right",
        '101000': "Right"
    };

    var ledKeys = Object.keys(ledDB);
    var ledConfig = "";
    for (var i = 0; i < 6; i++) {
        if ($('#modKnobs' + i).is(':checked')) {
            ledConfig += "1";
        }
        else {
            ledConfig += "0";
        }
    }

    if (ledKeys.indexOf(ledConfig) === -1) {
        $("#modKnobsError").show();
        $("#modKnobsSuccess").hide();
    }
    else {
        $("#modKnobsAnswer").html(ledDB[ledConfig]);
        $("#modKnobsSuccess").show();
        $("#modKnobsError").hide();
    }
});