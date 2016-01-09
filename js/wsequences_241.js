var wsequencesDB = {'red':0,'blue':0,'black':0};
var wire = 1;

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
};

$("#modWireSReset").click(function(){
    $(this).blur();
    wsequencesDB = {'red':0,'blue':0,'black':0};
    wire = 1;
    $("input[name='modWireSColor']:checked").each(function(){
        removeChecked($(this));
    });
    $("input[name='modWireSEnd']:checked").each(function(){
        removeChecked($(this));
    });
    $("#modWireSNumber").html(wire);
    $("#modWireSCut").hide();
    $("#modWireSDoNotCut").hide();
});

function modWiresSequencesolve() {
    var wireColor = $('input[name="modWireSColor"]:checked').val();
    var wireConnected = $('input[name="modWireSEnd"]:checked').val();
    
    wsequencesDB[wireColor]++;

    if(wsequencesCutDB[wireColor][wsequencesDB[wireColor]].indexOf(wireConnected) != -1){
        $("#modWireSCut").show();
        $("#modWireSDoNotCut").hide();
    }
    else {
        $("#modWireSDoNotCut").show();
        $("#modWireSCut").hide();
    }
    wire++;
    $("#modWireSNumber").html(wire);

    $("input[name='modWireSColor']:checked").each(function(){
        removeChecked($(this));
    });
    $("input[name='modWireSEnd']:checked").each(function(){
        removeChecked($(this));
    });
}

$('input[name="modWireSColor"]').change(function() {
    if($('input[name="modWireSEnd"]:checked').val() != undefined) {
        modWiresSequencesolve();
    }
});

$('input[name="modWireSEnd"]').change(function() {
    if($('input[name="modWireSColor"]:checked').val() != undefined) {
        modWiresSequencesolve();
    }
});
