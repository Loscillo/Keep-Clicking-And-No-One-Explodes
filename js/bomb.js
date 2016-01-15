var bomb = {
    serialVowel: undefined,
    serialSuffixEven: undefined,
    batteries: undefined,
    parallelPort: undefined,
    CAR: undefined,
    FRK: undefined,
    strikes: 0,
    callback: undefined,
    parameters: undefined,

    serialContainsVowel: function (callback, parameters) {
        if (this.serialVowel === undefined) {
            $("#modalSerialVowel").modal("toggle");
            this.callback = callback;
            this.parameters = parameters;
            throw "SerialSVowelUndefined";
        }
        else {
            return this.serialVowel;
        }
    },

    getSerialSuffixEven: function (callback, parameters) {
        if (this.serialSuffixEven === undefined) {
            $("#modalSerialSuffix").modal("toggle");
            this.callback = callback;
            this.parameters = parameters;
            throw "SerialSuffixUndefined";
        }
        else {
            return this.serialSuffixEven;
        }
    },

    getBatteriesCount: function (callback, parameters) {
        if (this.batteries === undefined) {
            $("#modalBatteries").modal("toggle");
            this.callback = callback;
            this.parameters = parameters;
            throw "BatteriesUndefined";
        }
        else {
            return this.batteries;
        }
    },

    haveParallelPort: function (callback, parameters) {
        if (this.parallelPort === undefined) {
            $("#modalParallel").modal("toggle");
            this.callback = callback;
            this.parameters = parameters;
            throw "ParallelPortUndefined";
        }
        else {
            return this.parallelPort;
        }
    },

    haveCARIndicator: function (callback, parameters) {
        if (this.CAR === undefined) {
            $("#modalCAR").modal("toggle");
            this.callback = callback;
            this.parameters = parameters;
            throw "CARIndicatorUndefined";
        }
        else {
            return this.CAR;
        }
    },

    haveFRKIndicator: function (callback, parameters) {
        if (this.FRK === undefined) {
            $("#modalFRK").modal("toggle");
            this.callback = callback;
            this.parameters = parameters;
            throw "FRKIndicatorUndefined";
        }
        else {
            return this.FRK;
        }
    },
};

$("input[name='batteries']").change(function () {
    bomb.batteries = $(this).val();
    $("#modalBatteries").modal("toggle");
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
});

$("input[name='car']").change(function () {
    bomb.CAR = ($(this).val() == "true");
    $("#modalCAR").modal("toggle");
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
});

$("input[name='frk']").change(function () {
    bomb.FRK = ($(this).val() == "true");
    $("#modalFRK").modal("toggle");
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
});

$("input[name='vowel']").change(function () {
    bomb.serialVowel = ($(this).val() == "true");
    $("#modalSerialVowel").modal("toggle");
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
});

$("input[name='suffix']").change(function () {
    bomb.serialSuffixEven = ($(this).val() == "true");
    $("#modalSerialSuffix").modal("toggle");
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
});

$("input[name='parallel']").change(function () {
    bomb.parallelPort = ($(this).val() == "true");
    $("#modalParallel").modal("toggle");
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
});

$("#strikesIncrement").click(function() {
    $(this).blur();
    if(bomb.strikes < 2) {
        bomb.strikes++;
        $("#strikesValue").html(bomb.strikes);
        modSimonResolve();
    }
});

$("#strikesDecrement").click(function() {
    $(this).blur();
    if(bomb.strikes > 0) {
        bomb.strikes--;
        $("#strikesValue").html(bomb.strikes);
        modSimonResolve();
    }
});

function removeChecked(element) {
    element.prop("checked", false);
    element.closest("label").removeClass("active");
}