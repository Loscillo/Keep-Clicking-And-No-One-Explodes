var bomb = {
    serialWithVowel: undefined,
    serialSuffixEven: undefined,
    batteries: undefined,
    parallelPort: undefined,
    CAR: undefined,
    FRK: undefined,
    strikes: 0,
    callback: undefined,
    parameters: undefined,

    serialVowelModal: function (callback, parameters) {

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

$("#test").click(function () {
    bomb.haveCARIndicator(undefined, undefined);
});

$("input[name='batteries']").change(function () {
    bomb.batteries = $(this).val();
    $("#modalBatteries").modal("toggle");
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
});

$("input[name='car']").change(function () {
    bomb.indicatorCARLit = ($(this).val() == "true");
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
    $("#modalCAR").modal("toggle");
});

$("input[name='frk']").change(function () {
    bomb.indicatorFRKLit = ($(this).val() == "true");
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
    $("#modalFRK").modal("toggle");
});

$("input[name='suffix']").change(function () {
    bomb.serialSuffixEven = ($(this).val() == "true");
    console.log(bomb.serialSuffixEven);
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
    $("#modalSerialSuffix").modal("toggle");
});

$("input[name='parallel']").change(function () {
    bomb.parallelPort = ($(this).val() == "true");
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
    $("#modalParallel").modal("toggle");
});

function removeChecked(element) {
    element.prop("checked", false);
    element.closest("label").removeClass("active");
}