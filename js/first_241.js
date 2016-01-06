$("input[name='firstStep1']").change(function(){
    var firstStage1DB = {
        "YES":"Middle Left",
        "FIRST":"Upper Right",
        "DISPLAY":"Lower Right",
        "OKAY":"Upper Right",
        "SAYS":"Lower Right",
        "NOTHING":"Middle Left",
        "    ":"Lower Left",
        "BLANK":"Middle Right",
        "NO":"Lower Right",
        "LED":"Middle Left",
        "LEAD":"Lower Right",
        "READ":"Middle Right",
        "RED":"Middle Right",
        "REED":"Lower Left",
        "LEED":"Lower Left",
        "HOLD ON":"Lower Right",
        "YOU":"Middle Right",
        "YOU ARE":"Lower Right",
        "YOUR":"Middle Right",
        "YOU'RE":"Middle Right",
        "UR":"Upper Left",
        "THERE":"Lower Right",
        "THEY'RE":"Lower Left",
        "THEIR":"Middle Right",
        "THEY ARE":"Middle Left",
        "SEE":"Lower Right",
        "C":"Upper Right",
        "CEE":"Lower Right"
    }
    var displayWord = $('input[name=firstStep1]:checked').val()
    if(displayWord === undefined){
    return;    
    }    
    var answer = "Position: "+firstStage1DB[displayWord];
   $("#firstStage1Output").html(answer);
});

$("input[name='firstWord']").change(function(){
    var answer = "Answer: ";
    var firstDB = {
        "READY": "YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY, NO, FIRST, UHHH, NOTHING, WAIT",
        "FIRST": "LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST",
        "NO": "BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO, MIDDLE",
        "BLANK": "WAIT, RIGHT, OKAY, MIDDLE, BLANK, PRESS, READY, NOTHING, NO, WHAT, LEFT, UHHH, YES, FIRST",
        "NOTHING": "UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING, READY",
        "YES": "OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES, LEFT, BLANK, NO, WAIT",
        "WHAT": "UHHH, WHAT, LEFT, NOTHING, READY, BLANK, MIDDLE, NO, OKAY, FIRST, WAIT, YES, PRESS, RIGHT",
        "UHHH": "READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH, MIDDLE, WAIT, FIRST",
        "LEFT": "RIGHT, LEFT, FIRST, NO, MIDDLE, YES, BLANK, WHAT, UHHH, WAIT, PRESS, READY, OKAY, NOTHING",
        "RIGHT": "YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT, MIDDLE, LEFT, UHHH, BLANK, OKAY, FIRST",
        "MIDDLE": "BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE, RIGHT, FIRST, UHHH, YES",
        "OKAY": "MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY, LEFT, READY, BLANK, PRESS, WHAT, RIGHT",
        "WAIT": "UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT, NOTHING, READY, RIGHT, MIDDLE",
        "PRESS": "RIGHT, MIDDLE, YES, READY, PRESS, OKAY, NOTHING, UHHH, BLANK, LEFT, FIRST, WHAT, NO, WAIT",
        "YOU": "SURE, YOU ARE, YOUR, YOU'RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU, UH UH, LIKE, DONE, U",
        "YOU ARE": "YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU'RE, SURE, UR, YOU ARE",
        "YOUR": "UH UH, YOU ARE, UH HUH, YOUR, NEXT, UR, SURE, U, YOU'RE, YOU, WHAT?, HOLD, LIKE, DONE",
        "YOU'RE": "YOU, YOU'RE, UR, NEXT, UH UH, YOU ARE, U, YOUR, WHAT?, UH HUH, SURE, DONE, LIKE, HOLD",
        "UR": "DONE, U, UR, UH HUH, WHAT?, SURE, YOUR, HOLD, YOU'RE, LIKE, NEXT, UH UH, YOU ARE, YOU",
        "U": "UH HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH UH, DONE, U, YOU, LIKE, HOLD, YOU ARE, YOUR",
        "UH HUH": "UH HUH, YOUR, YOU ARE, YOU, DONE, HOLD, UH UH, NEXT, SURE, LIKE, YOU'RE, UR, U, WHAT?",
        "UH UH": "UR, U, YOU ARE, YOU'RE, NEXT, UH UH, DONE, YOU, UH HUH, LIKE, YOUR, SURE, HOLD, WHAT?",
        "WHAT?": "YOU, HOLD, YOU'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?, SURE",
        "DONE": "SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE",
        "NEXT": "WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT, LIKE, DONE, YOU ARE, UR, YOU'RE, U, YOU",
        "HOLD": "YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD, UH HUH, YOUR, LIKE",
        "SURE": "YOU ARE, DONE, LIKE, YOU'RE, YOU, HOLD, UH HUH, UR, SURE, U, WHAT?, NEXT, YOUR, UH UH",
        "LIKE": "YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE, SURE, YOU ARE, YOUR"
    }
    
    var firstWord = $('input[name=firstWord]:checked').val()
    console.log(firstWord);
    if(firstWord === undefined){
    return;    
    }
    
    answer += firstDB[firstWord];
   $("#firstStage2Output").html(answer);
    
});