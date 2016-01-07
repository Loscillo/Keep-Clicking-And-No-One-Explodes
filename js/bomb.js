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

    serialVowelModal: function (callback, parameters) {

    },

    serialSuffixModal: function (callback, parameters) {
        $("#modalSerialSuffix").modal("toggle");
        this.callback = callback;
        this.parameters = parameters;
    },

    batteriesModal: function (callback, parameters) {
        $("#modalBatteries").modal("toggle");
        this.callback = callback;
        this.parameters = parameters;
    },

    parallelPortModal: function (callback, parameters) {
        $("#modalParallel").modal("toggle");
        this.callback = callback;
        this.parameters = parameters;
    },

    CARModal: function (callback, parameters) {
        $("#modalCAR").modal("toggle");
        this.callback = callback;
        this.parameters = parameters;
    },

    FRKModal: function (callback, parameters) {
        $("#modalFRK").modal("toggle");
        this.callback = callback;
        this.parameters = parameters;
    }
};

$("#test").click(function () {
    bomb.CARModal(undefined, undefined);
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