$("#modSymbolsReset").click(function () {
    $(this).blur();
    for (var i = 1; i < 28; i++) {
        if ($('input[id=symbols' + i + ']:checked').val()) {
            $('button[id=symbolsButton' + i + ']').trigger("click");
        }
    }
    $("#modSymbolsErrorCombo").hide();
    $("#modSymbolsErrorNumber").hide();
    $("#modSymbolsSuccess").hide();
});

$("#modSymbolsSolve").click(function () {
    $(this).blur();
    $("#modSymbolsErrorNumber").hide();
    $("#modSymbolsErrorCombo").hide();
    $("#modSymbolsSuccess").hide();

    var answer = "";
    var symHTMLMap = {
        "1": "<font size=20>&#984;</font>",
        "2": "<font size=20>&#x4EC;</font>",
        "3": "<font size=20>&copy;</font>",
        "4": "<font size=20>&#1004;</font>",
        "5": "<font size=20>&Psi;</font>",
        "6": "<font size=20>&#1126;</font>",
        "7": "<font size=20>&#1148;</font>",
        "8": "<font size=20>&para;</font>",
        "9": "<font size=20>&#1660;</font>",
        "10": "<font size=20>&#411;</font>",
        "11": "<font size=20>&#1023;</font>",
        "12": "<font size=20>&#1192;</font>",
        "13": "<font size=20>&#1123;</font>",
        "14": "<font size=20>&#1154;</font>",
        "15": "<font size=20>&#990;</font>",
        "16": "<font size=20>&#1174;</font>",
        "17": "<font size=20>&#1132;</font>",
        "18": "<font size=20>&#1022;</font>",
        "19": "<font size=20>&#1237;</font>",
        "20": "<font size=20>&#9734;</font>",
        "21": "<font size=20>&#1286;</font>",
        "22": "<font size=20>&#983;</font>",
        "23": "<font size=20>&iquest;</font>",
        "24": "<font size=20>&#1135;</font>",
        "25": "<font size=20>&#1162;</font>",
        "26": "<font size=20>&#9733;</font>",
        "27": "<font size=20>&Omega;</font>"
    }
    var symDB = [
        [1, 6, 10, 15, 17, 22, 11],
        [2, 1, 11, 12, 20, 22, 23],
        [3, 7, 12, 16, 21, 10, 20],
        [4, 8, 13, 17, 16, 23, 9],
        [5, 9, 13, 18, 8, 24, 26],
        [4, 2, 14, 19, 5, 25, 27]
    ]
    var checkedVals = []
    for (var i = 1; i < 28; i++) {
        var currentId = "symbols" + i;

        if ($('input[id=' + currentId + ']:checked').val()) {
            checkedVals.push(i);
        }
    }

    if (checkedVals.length != 4) {
        $("#modSymbolsErrorNumber").show();
        return;
    }
    var solutionArr = getSolutionArr(symDB, checkedVals);
    if (solutionArr === undefined) {
        $("#modSymbolsErrorCombo").show();
        return;
    }
    var solutionHtml = "";
    for (var i = 0; i < solutionArr.length; i++) {
        if (checkedVals.indexOf(solutionArr[i]) > -1) {
            solutionHtml += symHTMLMap[solutionArr[i]];
        }
    }
    answer += solutionHtml;
    $("#modSymbolsSuccess").show();
    $("#modSymbolsAnswer").html(answer);
    return;


    function getSolutionArr(symDB, checkedVals) {
        for (var i = 0; i < symDB.length; i++) {
            var result = true;
            for (var j = 0; j < checkedVals.length; j++) {
                if (symDB[i].indexOf(checkedVals[j]) == -1) {
                    result = false;
                }
            }
            if (result == false) {
                continue;
            }
            else {
                return symDB[i];
            }
        }

    }

});