$("#showPasswords").click(function(){
    $("#passwords").toggle();
});

$("#passwordsReset").click(function(){
    $("#passwordsForm")[0].reset();
});

$("#passwordsCompute").click(function(){
  
   var answer = "Answer: ";
   var wordsDB = [
    'about','after','again','below','could',
    'every','first','found','great','house',
    'large','learn','never','other','place',
    'plant','point','right','small','sound',
    'spell','still','study','their','there',
    'these','thing','think','three','water',
    'where','which','world','would','write'
   ]
    
   var wordBank = wordsDB;
   
   var block1Text = $('#passwordsBlock1').val();
   var block2Text = $('#passwordsBlock2').val();
   var block3Text = $('#passwordsBlock3').val();
   var block4Text = $('#passwordsBlock4').val();
   var block5Text = $('#passwordsBlock5').val();
   
   wordBank = getBank(block1Text,wordBank,0);
   wordBank = getBank(block2Text,wordBank,1);
   wordBank = getBank(block3Text,wordBank,2);
   wordBank = getBank(block4Text,wordBank,3);
   wordBank = getBank(block5Text,wordBank,4);
   
   answer += wordBank;
   $("#passwordsOutput").html(answer);
   return;   
   
   function getBank(blockLetters,wordBank,indx){
       
       var newBank = [];
       for(var i=0;i<wordBank.length;i++){
           var tstChar = wordBank[i][indx];
           
           for(var j=0;j<blockLetters.length;j++){
               if(blockLetters[j] === tstChar){
                   
                   newBank.push(wordBank[i]);
               }
           }
       }
       
       newBank = jQuery.unique(newBank);

       // Check letters of current bank to ensure they match.
       return newBank;
   }
});