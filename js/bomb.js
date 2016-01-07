var bomb = {
    serialVowel: undefined,
    serialSuffix: undefined,
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

    },

    batteriesModal: function (callback, parameters) {
        $("#modalBatteries").modal("toggle");
        this.callback = callback;
        this.parameters = parameters;
    },

    parallelPortModal: function (callback, parameters) {

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
    bomb.FRKModal(undefined, undefined);
});

$("input[name='batteries']").change(function () {
    bomb.batteries = $(this).val();
    $("#modalBatteries").modal("toggle");
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
});

$("input[name='car']").change(function () {
    bomb.indicatorCARLit = Boolean($(this).val());
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
    $("#modalCAR").modal("toggle");
});

$("input[name='frk']").change(function () {
    bomb.indicatorFRKLit = Boolean($(this).val());
    if (bomb.callback != undefined) {
        bomb.callback.apply(this, bomb.parameters);
    }
    $("#modalFRK").modal("toggle");
});

function removeChecked(element) {
    element.prop("checked", false);
    element.closest("label").removeClass("active");
}