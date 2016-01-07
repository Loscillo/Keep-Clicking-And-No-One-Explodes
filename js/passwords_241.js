$("#modPasswordsReset").click(function () {
    $("#modPasswordsForm")[0].reset();
    passwordsHideAnswers();
    $(this).blur();
});

$('#passwordsBlock1').blur(solvePassword);
$('#passwordsBlock2').blur(solvePassword);
$('#passwordsBlock3').blur(solvePassword);
$('#passwordsBlock4').blur(solvePassword);
$('#passwordsBlock5').blur(solvePassword);

function passwordsHideAnswers() {
    $("#modPasswordsAnswer").hide();
    $("#modPasswordsNoAnswer").hide();
    $("#modPasswordsPossibilities").hide();
    $("#modPasswordsTooMany").hide();
}

function solvePassword() {
    passwordsHideAnswers();

    var wordsDB = [
        'about', 'after', 'again', 'below', 'could',
        'every', 'first', 'found', 'great', 'house',
        'large', 'learn', 'never', 'other', 'place',
        'plant', 'point', 'right', 'small', 'sound',
        'spell', 'still', 'study', 'their', 'there',
        'these', 'thing', 'think', 'three', 'water',
        'where', 'which', 'world', 'would', 'write'
    ];

    var wordBank = wordsDB;

    var block1Text = $('#passwordsBlock1').val();
    var block2Text = $('#passwordsBlock2').val();
    var block3Text = $('#passwordsBlock3').val();
    var block4Text = $('#passwordsBlock4').val();
    var block5Text = $('#passwordsBlock5').val();

    wordBank = getBank(block1Text, wordBank, 0);
    wordBank = getBank(block2Text, wordBank, 1);
    wordBank = getBank(block3Text, wordBank, 2);
    wordBank = getBank(block4Text, wordBank, 3);
    wordBank = getBank(block5Text, wordBank, 4);

    if(wordBank.length == 0) {
        $("#modPasswordsNoAnswer").show();
    }
    else if(wordBank.length == 1) {
        $("#modPasswordsAnswerOutput").html(wordBank[0]);
        $("#modPasswordsAnswer").show();
    }
    else if(wordBank.length != wordsDB.length) {
        if(wordBank.length > 5) {
            $("#modPasswordsTooMany").show();
        }
        else {
            $("#modPasswordsPossibilitiesOutput").html("" + wordBank);
            $("#modPasswordsPossibilities").show();
        }
    }
}

function getBank(blockLetters, wordBank, indx) {
    if (blockLetters.length === 0) {
        return wordBank;
    }
    var newBank = [];
    for (var i = 0; i < wordBank.length; i++) {
        var tstChar = wordBank[i][indx];

        for (var j = 0; j < blockLetters.length; j++) {
            if (blockLetters[j] === tstChar) {

                newBank.push(wordBank[i]);
            }
        }
    }

    newBank = jQuery.unique(newBank);

    // Check letters of current bank to ensure they match.
    return newBank;
}