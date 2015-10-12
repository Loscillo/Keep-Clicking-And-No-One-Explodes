$("#showButton").click(function(){
    $("#button").toggle();
});

$("#buttonReset").click(function(){
    $("#buttonForm")[0].reset();
});

$("#buttonCompute").click(function(){
    var answer = "Answer: ";
    var buttonColor = $('input[name=buttonColor]:checked').val()
    var buttonText = $('input[name=buttonText]:checked').val()
    var numBatteries = 0;
    numBatteries+= parseInt($('#aaCount option:selected').text());
    numBatteries+= parseInt($('#dCount option:selected').text());
    var carLit = $('#carLit').is(':checked');
    var frkLit = $('#frkLit').is(':checked');
    
    if(buttonColor === "blue" && buttonText === "abort"){
        answer+="Hold button. Strip denotes release number: (blue=4 , yellow=5, other=1)";
        $("#buttonOutput").html(answer);
        return;
    }
    
    if(numBatteries > 1 && buttonText === "detonate"){
        answer+="Press and Immediately Release Button.";
        $("#buttonOutput").html(answer);
        return;
    }
    
    if(buttonColor === "white" && carLit){
        answer+="Hold button. Strip denotes release number: (blue=4 , yellow=5, other=1)"; 
        $("#buttonOutput").html(answer);
        return;
    }
    
    if(numBatteries > 2 && frkLit){
        answer+="Press and Immediately Release Button.";        
        $("#buttonOutput").html(answer);
        return;
    }

    if(buttonColor === "yellow"){
        answer+="Hold button. Strip denotes release number: (blue=4 , yellow=5, other=1)";        
        $("#buttonOutput").html(answer);
        return;
    }
    
    if(buttonColor === "red" && buttonText === "hold"){
        answer+="Press and Immediately Release Button.";       
        $("#buttonOutput").html(answer);
        return;        
    }
    
    answer+="Hold button. Strip denotes release number: (blue=4 , yellow=5, other=1)"; 
    $("#buttonOutput").html(answer);
    return;    
    
});