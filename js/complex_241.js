$("#showComplex").click(function(){
    $("#complex").toggle();
});

$("#complexReset").click(function(){
    $("#complexForm")[0].reset();
    $("#complexOutput").html("");
});

$("#complexCompute").click(function(){
    var answer = "Answer: Cut Wires ";
    // NOTE: There are 16 Possible Outcomes for each wire.
    var evenSerial = $('input[name=serialSuffix]:checked').val() === "even";
    var hasParallel = $('#hasParallel').is(':checked');
    var numBatteries = 0;
    numBatteries+= parseInt($('#aaCount option:selected').text());
    numBatteries+= parseInt($('#dCount option:selected').text());
    var wireArr = {
        0:{},
        1:{},
        2:{},
        3:{},
        4:{},
        5:{}
    }
    //$('input[name=memoryNum]:checked').val()
    for(var i=0;i<6;i++){
        var wireID = 'complex'+i;
        var hasRed = $('input[id='+wireID+'HasRed'+']:checked').val();
        var hasBlue = $('input[id='+wireID+'HasBlue'+']:checked').val();
        var hasStar = $('input[id='+wireID+'HasStar'+']:checked').val();
        var hasLit = $('input[id='+wireID+'HasLit'+']:checked').val();
        wireArr[i] = {'red':hasRed,'blue':hasBlue,'star':hasStar,'lit':hasLit};
    }
    // The Wires to Cut.
    
    var cutWires = [];
    for(var i=0;i<6;i++){
        var hasRed = wireArr[i]['red']!=undefined;
        var hasBlue = wireArr[i]['blue']!=undefined;
        var hasStar = wireArr[i]['star']!=undefined;
        var hasLit = wireArr[i]['lit']!=undefined;
        
        // C Handle 1: Nothing
        if(!hasRed && !hasBlue && !hasStar && !hasLit){
            cutWires.push(i+1);
            continue;
        }
        // C Handle 2: Star
        if(!hasRed && !hasBlue && hasStar && !hasLit){
            cutWires.push(i+1);
            continue;
        }
        // C Handle 3: Red, Star
        if(hasRed && !hasBlue && hasStar && !hasLit){
            cutWires.push(i+1);
            continue;
        }       
        // D Handles - DO NOT CUT.
        // --D Handle 1: Lit
        if(!hasRed && !hasBlue && !hasStar && hasLit){
            continue;
        }
        // --D Handle 2: Lit, Star, Red, Blue
        if(hasRed && hasBlue && hasStar && hasLit){
            continue;
        }
        // --D Handle 3: Blue, Star
        if(!hasRed && hasBlue && hasStar && !hasLit){
            continue;
        }
        // S Handles - Cut if even serial.
        // --S Handle 1: Blue
        if(!hasRed && hasBlue && !hasStar && !hasLit){
            if(evenSerial){
                cutWires.push(i+1);
            }
            continue;
        }
        // --S Handle 2: Blue, Red
        if(hasRed && hasBlue && !hasStar && !hasLit){
            if(evenSerial){
                cutWires.push(i+1);
            }
            continue;           
        }
        // --S Handle 3: Red
        if(hasRed && !hasBlue && !hasStar && !hasLit){
            if(evenSerial){
                cutWires.push(i+1);
            }
            continue;                
        }
        // --S Handle 4: Blue, Red, Lit
        if(hasRed && hasBlue && !hasStar && hasLit){
            if(evenSerial){
                cutWires.push(i+1);
            }
            continue;    
        }
        // P Handles - Cut if Parallel Port.
        
        // --P Handle 1: Lit, Blue
        if(!hasRed && hasBlue && !hasStar && hasLit){
            if(hasParallel){
                cutWires.push(i+1);
            }
            continue;
        }
        // --P Handle 2: Blue, Star, Lit
        if(!hasRed && hasBlue && hasStar && hasLit){
            if(hasParallel){
                cutWires.push(i+1);
            }
            continue;          
        }
        // --P Handle 3: Red, Blue, Star
        if(hasRed && hasBlue && hasStar && !hasLit){
            if(hasParallel){
                cutWires.push(i+1);
            }
            continue;           
        }
        // B Handles - Cut if Batteries > 1.
        // --B Handle 1: Lit, Star
        if(!hasRed && !hasBlue && hasStar && hasLit){
            if(numBatteries > 1){
                cutWires.push(i+1);
            }
            continue;
        }
        // --B Handle 2: Lit, Star, Red
        if(hasRed && !hasBlue && hasStar && hasLit){
            if(numBatteries > 1){
                cutWires.push(i+1);
            }
            continue;           
        }
        // --B Handle 3: Lit, Red
        if(hasRed && !hasBlue && !hasStar && hasLit){
            if(numBatteries > 1){
                cutWires.push(i+1);
            }
            continue;           
        }
        
    }
    answer +=cutWires;
    $("#complexOutput").html(answer);
});