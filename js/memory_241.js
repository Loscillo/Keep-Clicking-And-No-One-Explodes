var memory = {
    positions: [],
    numbers: [],
    round: 1,

    solveScreen: function (screenVal) {
        switch (this.round) {
            case 1:
                roundOne(screenVal);
                break;
            case 2:
                roundTwo(screenVal);
                break;
            case 3:
                roundThree(screenVal);
                break;
            case 4:
                roundFour(screenVal);
                break;
            case 5:
                roundFive(screenVal);
                break;
        }
        this.round++;
    },

    reset: function () {
        this.positions = [];
        this.numbers = [];
        this.round = 1;
        $("#modMemoryStage").html(1);
        showScreenForm();
    }
};

$("#modMemoryReset").click(function () {
    memory.reset();
    $(this).blur();
});

$("input[name='modMemoryScreen']").change(function () {
    var screenVal = $(this).val();
    removeChecked($(this));
    $(this).blur();
    memory.solveScreen(parseInt(screenVal));
});

$("input[name='modMemoryNumber']").change(function () {
    memory.numbers.push($(this).val());
    removeChecked($(this));
    $(this).blur();
    showScreenForm();
    $("#modMemoryStage").html(memory.round);
});

$("input[name='modMemoryPosition']").change(function () {
    memory.positions.push($(this).val());
    removeChecked($(this));
    $(this).blur();
    showScreenForm();
    $("#modMemoryStage").html(memory.round);
});

function showNumberForm(position) {
    memory.positions.push(position);
    $("#modMemoryPositionOutput").html(position);
    $("#modMemoryNumberForm").show();
    $("#modMemoryScreenForm").hide();
}

function showPositionForm(number) {
    memory.numbers.push(number);
    $("#modMemoryNumberOutput").html(number);
    $("#modMemoryPositionForm").show();
    $("#modMemoryScreenForm").hide();
}

function showScreenForm() {
    $("#modMemoryScreenForm").show();
    $("#modMemoryPositionForm").hide();
    $("#modMemoryNumberForm").hide();
}

function roundOne(screenVal) {
    if (screenVal < 3) {
        showNumberForm(2);
    }
    else if (screenVal == 3) {
        showNumberForm(3);
    }
    else {
        showNumberForm(4);
    }
}

function roundTwo(screenVal) {
    switch (screenVal) {
        case 1:
            showPositionForm(4);
            break;
        case 3:
            showNumberForm(1);
            break;
        case 2:
        case 4:
            showNumberForm(memory.positions[0]);
            break;
    }
}

function roundThree(screenVal) {
    switch (screenVal) {
        case 1:
            showPositionForm(memory.numbers[1]);
            break;
        case 2:
            showPositionForm(memory.numbers[0]);
            break;
        case 3:
            showNumberForm(3);
            break;
        case 4:
            showPositionForm(4);
            break;
    }
}

function roundFour(screenVal) {
    switch (screenVal) {
        case 1:
            showNumberForm(memory.positions[0]);
            break;
        case 2:
            showNumberForm(1);
            break;
        case 3:
        case 4:
            showNumberForm(memory.positions[1]);
            break;
    }
}

function roundFive(screenVal) {
    switch (screenVal) {
        case 1:
            showPositionForm(memory.numbers[0]);
            break;
        case 2:
            showPositionForm(memory.numbers[1]);
            break;
        case 3:
            showPositionForm(memory.numbers[3]);
            break;
        case 4:
            showPositionForm(memory.numbers[2]);
            break;
    }
}