var wsequencesDB = {'red':0,'blue':0,'black':0};
$("#showWSequences").click(function(){
    $("#wsequences").toggle();
});

$("#wsequencesReset").click(function(){
    $("#wsequencesForm")[0].reset();
    wsequencesDB = {'red':0,'blue':0,'black':0};
    $("#wsequencesOutput").html("");


});

$("#wsequencesCompute").click(function(){
    var answer = "Answer: ";

    var wsequencesCutDB = {
        red:{
            1:['c'],
            2:['b'],
            3:['a'],
            4:['a','c'],
            5:['b'],
            6:['a','c'],
            7:['a','b','c'],
            8:['a','b'],
            9:['b']
        },
        black:{
            1:['a','b','c'],
            2:['a','c'],
            3:['b'],
            4:['a','c'],
            5:['b'],
            6:['b','c'],
            7:['a','b'],
            8:['c'],
            9:['c']      
        },
        blue:{
            1:['b'],
            2:['a','c'],
            3:['b'],
            4:['a'],
            5:['b'],
            6:['b','c'],
            7:['c'],
            8:['a','c'],
            9:['a']      
        }
    }
    var wire1Color = $('#wsequencesWire1Color option:selected').text();
    var wire1Connected = $('input[name=wsequencesWire1Connect]:checked').val();
    var wire2Color = $('#wsequencesWire2Color option:selected').text();
    var wire2Connected = $('input[name=wsequencesWire2Connect]:checked').val();
    var wire3Color = $('#wsequencesWire3Color option:selected').text();
    var wire3Connected = $('input[name=wsequencesWire3Connect]:checked').val();
    console.log("1:"+wire1Color+" : "+wire1Connected);
    console.log("2:"+wire2Color+" : "+wire2Connected);
    console.log("3:"+wire3Color+" : "+wire3Connected);
    
    var cutList = [];
    
    wsequencesDB[wire1Color]++;
    if(wsequencesCutDB[wire1Color][wsequencesDB[wire1Color]].indexOf(wire1Connected) != -1){
        cutList.push("First Wire");
    }
    wsequencesDB[wire2Color]++;
    if(wsequencesCutDB[wire2Color][wsequencesDB[wire2Color]].indexOf(wire2Connected) != -1){
        cutList.push("Second Wire");
    }
    wsequencesDB[wire3Color]++;
    if(wsequencesCutDB[wire3Color][wsequencesDB[wire3Color]].indexOf(wire3Connected) != -1){
        cutList.push("Third Wire");
    }    
    
    



    answer += cutList;
    $("#wsequencesOutput").html(answer);
    $("#wsequencesForm")[0].reset();
});