$("#showMorse").click(function(){
    $("#morse").toggle();
});

$("#morseReset").click(function(){
    $("#morseForm")[0].reset();
    $("#morseOutput").html("");


});

var morseWordsDB = {
    'shell':'3.505MHz',
    'halls':'3.515MHz',
    'slick':'3.522MHz',
    'trick':'3.532MHz',
    'boxes':'3.535MHz',
    'leaks':'3.542MHz',
    'strobe':'3.545MHz',
    'bistro':'3.552MHz',
    'flick':'3.555MHz',
    'bombs':'3.565MHz',
    'break':'3.572MHz',
    'brick':'3.575MHz',
    'steak':'3.582MHz',
    'sting':'3.592MHz',
    'vector':'3.595MHz',
    'beats':'3.600MHz'
}

var morseTable = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e',
    '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j',
    '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o',
    '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
    '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y',
    '--..': 'z', '.----': '1', '..---': '2', '...--': '3', 
    '....-': '4', '.....': '5', '-....': '6', '--...': '7',
    '---..': '8', '----.': '9', '-----': '0', '.-.-.-': '.',
    '--..--': ',', '..--..': '?', '-..-.': '/', '.--.-.': '@'
};

$("#morseCompute").click(function(){
    var answer = "";
    var morseKeys = Object.keys(morseTable);
    var morseWords = Object.keys(morseWordsDB);
    var morseCharArr = [];
    
    for(var i=0;i<6;i++){
        var morseCharIndx = "morseChar"+i;
        var curChar = $('input[id='+morseCharIndx+']').val();
        if(morseKeys.indexOf(curChar) != -1){
                morseCharArr.push(morseTable[curChar]);
        }
    }
    // Building Map for Repeating Characters.
    var morseMap = {};
    for(var i=0;i<morseCharArr.length;i++){
        // Get current Morse Keys.
        var currentMorseKeys = Object.keys(morseMap);
        var currentChar = morseCharArr[i];
        if(currentMorseKeys.indexOf(currentChar) > -1){
            morseMap[currentChar]++;
        }else{
            morseMap[currentChar] = 1;
        }
    }   
    // Do the Lookup!
    var possibleWords = morseWords;
    for(var i=0;i<morseCharArr.length;i++){
        possibleWords = getPossibleWords(morseCharArr[i],possibleWords);
    }

    
    function getPossibleWords(testChar,possibleWords){
        var newWords = [];
        for(var i=0;i<possibleWords.length;i++){
            // Check the map for repeating.
            if(morseMap[testChar] == 1){
            if(possibleWords[i].indexOf(testChar) > -1){
                newWords.push(possibleWords[i]);
            }    
            }else{
              var numOccurences = $.grep(possibleWords[i], function (elem) {
                return elem === testChar;
                }).length;
              if(numOccurences >= morseMap[testChar]){
                  newWords.push(possibleWords[i]);
              }
            }
            
        }
        return newWords;
    }
    
    // Remove Duplicates.
    possibleWords = jQuery.unique(possibleWords);
    
    answer+="Chars:"+morseCharArr+"<br/>Possible Words: "+possibleWords;
    $("#morseOutput").html(answer);
});







