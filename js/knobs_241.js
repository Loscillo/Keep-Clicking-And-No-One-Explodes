$("#showKnobs").click(function(){
    $("#knobs").toggle();
});

$("#knobsReset").click(function(){
    $("#knobsForm")[0].reset();
});

$("#knobsCompute").click(function(){
    var answer = "Answer: ";
    var ledDB = {
        '001001':"Up",
        '001010':"Up",
        '011001':"Down",
        '000000':"Down",
        '000010':"Left",
        '101010':"Right",
        '101000':"Right",
    }
    var ledKeys = Object.keys(ledDB);
    var ledConfig = $('#ledConfig').val();
    if(ledKeys.indexOf(ledConfig) === -1){
        answer = "ERR - Input not in DB.";
    }else{
        answer+=ledDB[ledConfig];
    }

    $("#knobsOutput").html(answer);
    return;     
});