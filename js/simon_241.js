var simonSequence = [];

$("#modSimonReset").click(function () {
    $(this).blur();
    simonSequence = [];
    $("#modSimonAnswer").empty();
});

$('#simonRed').click(function () {
    $(this).blur();
    simonSequence.push("red");
    getNextColor('red');
});
$('#simonBlue').click(function () {
    $(this).blur();
    simonSequence.push("blue");
    getNextColor('blue');
});
$('#simonGreen').click(function () {
    $(this).blur();
    simonSequence.push("green");
    getNextColor('green');
});
$('#simonYellow').click(function () {
    $(this).blur();
    simonSequence.push("yellow");
    getNextColor('yellow');
});

function modSimonResolve() {
    if(simonSequence.length != 0) {
        $("#modSimonAnswer").empty();
        for(var i = 0; i < simonSequence.length; i++) {
            getNextColor(simonSequence[i]);
        }
    }
}

function getNextColor(inputColor) {
    var ssDB = {
        red: {
            0: {true: "primary", false: "primary"},
            1: {true: "warning", false: "danger"},
            2: {true: "success", false: "warning"}
        },
        blue: {
            0: {true: "danger", false: "warning"},
            1: {true: "success", false: "primary"},
            2: {true: "danger", false: "success"}
        },
        green: {
            0: {true: "warning", false: "success"},
            1: {true: "primary", false: "warning"},
            2: {true: "warning", false: "primary"}
        },
        yellow: {
            0: {true: "success", false: "danger"},
            1: {true: "danger", false: "success"},
            2: {true: "primary", false: "danger"}
        }
    };

    var resultColor = ssDB[inputColor][bomb.strikes][bomb.serialContainsVowel(undefined, undefined)];
    $("#modSimonAnswer").append("<button class='btn btn-" + resultColor + "'>&nbsp;</button>");
}

function modSimonShowView() {
    $("#modSimonStart").hide();
    $("#modSimonView").show();
}

$("#modSimonStartButton").click(function () {
    $(this).blur();
    bomb.serialContainsVowel(modSimonShowView, undefined);
});
