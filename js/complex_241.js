$( document ).ready(function() {
   for(var i=0;i<6;i++){
       $('#modComplexW'+i+'Red').button();
       $('#modComplexW'+i+'Blue').button();
       $('#modComplexW'+i+'Star').button();
       $('#modComplexW'+i+'Lit').button();
   }
});

$("#modComplexReset").click(function(){
    $(this).blur();
    $("#modComplexWRedButton").trigger("click");
    $("#modComplexWBlueButton").trigger("click");
    $("#modComplexWStarButton").trigger("click");
    $("#modComplexWLitButton").trigger("click");
    modComplexHideAnswers();
});

function modComplexHideAnswers() {
    $("#modComplexCut").hide();
    $("#modComplexDoNotCut").hide();
}

function modComplexSolve(number) {
    switch(number) {
        // Cut
        case 0:
        case 2:
        case 10:
            $("#modComplexCut").show();
            break;
        // Do not cut
        case 1:
        case 6:
        case 15:
            $("#modComplexDoNotCut").show();
            break;
        // Cut if Batteries > 1
        case 3:
        case 9:
        case 11:
            if(bomb.batteries === undefined) {
                bomb.batteriesModal(modComplexSolve, [number]);
            }
            else if(bomb.batteries > 1) {
                $("#modComplexCut").show();
            }
            else {
                $("#modComplexDoNotCut").show();
            }
            break;
        // Cut if even serial
        case 4:
        case 8:
        case 12:
        case 13:
            if(bomb.serialSuffixEven === undefined) {
                bomb.serialSuffixModal(modComplexSolve, [number]);
            }
            else if(bomb.serialSuffixEven) {
                $("#modComplexCut").show();
            }
            else {
                $("#modComplexDoNotCut").show();
            }
            break;
        // Cut if Parallel port
        case 5:
        case 7:
        case 14:
            if(bomb.parallelPort === undefined) {
                bomb.parallelPortModal(modComplexSolve, [number]);
            }
            else if(bomb.parallelPort) {
                $("#modComplexCut").show();
            }
            else {
                $("#modComplexDoNotCut").show();
            }
            break;
    }
}

$("#modComplexSolve").click(function(){
    $(this).blur();
    modComplexHideAnswers();
    var number = 0;

    if($("#modComplexWRed").is(":checked")) {
        number += 8;
    }
    if($("#modComplexWBlue").is(":checked")) {
        number += 4;
    }
    if($("#modComplexWStar").is(":checked")) {
        number += 2;
    }
    if($("#modComplexWLit").is(":checked")) {
        number += 1;
    }

    modComplexSolve(number);
});