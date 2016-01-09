$("#modSimpleReset").click(function () {
    $(this).blur();
    for (var i = 0; i < 6; i++) {
        $("input[name='modSimpleW" + i + "']:checked").each(function () {
            removeChecked($(this));
        });
    }
    modSimpleWiresHideOutput();
});

function modSimpleWiresHideOutput() {
    $("#modSimpleWireSuccess").hide();
    $("#modSimpleWireError").hide();
}

function modSimpleWiresSolve(wiresArr) {
    var answer = "";
    switch (wiresArr.length) {
        case 3:
            answer += wiresCalc3(wiresArr);
            break;
        case 4:
            answer += wiresCalc4(wiresArr);
            break;
        case 5:
            answer += wiresCalc5(wiresArr);
            break;
        case 6:
            answer += wiresCalc6(wiresArr);
            break;
        default:
            $("#modSimpleWireError").show();
            return;
    }

    // Calculate answer given 3 wires.
    function wiresCalc3(wires) {
        if (wires.indexOf('red') === -1) {
            return 2;
        }
        if (wires[wires.length - 1] === "white") {
            return 3;
        }

        var countBlue = wires.reduce(function (n, val) {
            return n + (val === "blue");
        }, 0);

        if (countBlue > 1) {
            return wires.lastIndexOf("blue") + 1;
        }
        return 3;
    }


    // Calculate answer given 4 wires.
    function wiresCalc4(wires) {
        // Count occurence of red wires.
        var countRed = wires.reduce(function (n, val) {
            return n + (val === "red");
        }, 0);
        var countBlue = wires.reduce(function (n, val) {
            return n + (val === "blue");
        }, 0);
        var countYellow = wires.reduce(function (n, val) {
            return n + (val === "yellow");
        }, 0);
        if (countRed > 1 && !bomb.getSerialSuffixEven(modSimpleWiresSolve, [wires])) {
            return wires.lastIndexOf("red") + 1;
        }

        if (wires[wires.length - 1] === "yellow" && countRed == 0) {
            return 1;
        }

        if (countBlue == 1) {
            return 1;
        }

        if (countYellow > 1) {
            return 4;
        }
        return 2;
    }

    // Calculate answer given 5 wires.
    function wiresCalc5(wires) {
        var countRed = wires.reduce(function (n, val) {
            return n + (val === "red");
        }, 0);
        var countYellow = wires.reduce(function (n, val) {
            return n + (val === "yellow");
        }, 0);

        if (wires[wires.length - 1] == "black" && !bomb.getSerialSuffixEven(modSimpleWiresSolve, [wiresArr])) {
            return 4;
        }

        if (countRed == 1 && countYellow > 1) {
            return 1;
        }

        if (wires.indexOf('black') === -1) {
            return 2;
        }

        return 1;
    }

    // Calculate answer given 6 wires.
    function wiresCalc6(wires) {
        var countWhite = wires.reduce(function (n, val) {
            return n + (val === "white");
        }, 0);
        var countYellow = wires.reduce(function (n, val) {
            return n + (val === "yellow");
        }, 0);

        if (countYellow == 0 && !bomb.getSerialSuffixEven(modSimpleWiresSolve, [wiresArr])) {
            return 3;
        }

        if (countYellow == 1 && countWhite > 1) {
            return 4;
        }

        if (wires.indexOf('red') === -1) {
            return 6;
        }

        return 4;
    }

    $("#modSimpleWireAnswer").html(answer);
    $("#modSimpleWireSuccess").show();
}

$("#modSimpleSolve").click(function () {
    $(this).blur();
    modSimpleWiresHideOutput();

    var wiresArr = [];
    for (var i = 0; i < 6; i++) {
        if ($("input[name='modSimpleW" + i + "']:checked").val() !== undefined) {
            wiresArr.push($("input[name='modSimpleW" + i + "']:checked").val());
        }
    }
    modSimpleWiresSolve(wiresArr);
});