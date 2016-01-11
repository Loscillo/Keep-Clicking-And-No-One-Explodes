var maze_db1 = [[], [], [], [], [], []];
var maze_db2 = [[], [], [], [], [], []];
var maze_populated = false;

var wall_db = [
    {
        "edges": [
            [[1, 10], [0, 20], [10, 21], [31, 40], [30, 50], [40]],
            [[0, 2], [12, 21], [11, 20], [30, 41], [31, 51], [41, 52]],
            [[1, 3], [11, 22], [12, 23], [42, 33], [32, 52], [42, 51, 53]],
            [[2, 4], [23], [13, 22, 33], [23, 32], [53], [43, 52, 54]],
            [[3, 14, 5], [4, 24], [14, 25], [44, 35], [34], [53, 55]],
            [[4, 15], [5], [24, 35], [25, 34], [55], [45, 54]]
        ]
    },
    {
        "edges": [
            [[10], [0, 20, 11], [10], [40, 31], [30, 50, 41], [40]],
            [[11, 2], [1, 10], [31, 22], [21, 30], [40, 51], [41, 52]],
            [[1, 3], [22, 13], [12, 21], [42, 33], [32, 52], [42, 51, 53]],
            [[2, 13, 4], [3, 12], [33, 24], [23, 32], [44], [52, 54]],
            [[3, 5], [15], [23, 25], [44, 35], [34, 43], [53, 55]],
            [[4], [14, 25], [15, 24], [34, 45], [35, 55], [45, 54]]
        ]
    },
    {
        "edges": [
            [[1, 10], [0, 20], [10, 21], [31], [50, 41], [40, 51]],
            [[0], [12], [20, 22], [30, 41], [31, 40], [50, 52]],
            [[12, 3], [2, 11, 13], [21, 23], [42, 33], [32, 43], [51, 53]],
            [[2, 4], [12, 14], [22, 24], [32, 34], [42, 44], [52, 54]],
            [[3, 5], [13, 24], [14, 23], [33, 35], [43, 45], [53, 55]],
            [[4, 15], [5, 25], [15, 35], [25, 34], [44, 55], [45, 54]]
        ]
    },
    {
        "edges": [
            [[1, 10], [0, 11], [30], [20, 40], [30, 50], [40, 51]],
            [[0, 2], [10, 12], [31, 22], [21, 41], [31, 51], [41, 50, 52]],
            [[1, 3], [11, 22], [12, 21], [42, 33], [32], [51, 53]],
            [[2, 4], [23], [13, 33], [23, 32, 43], [33, 53], [43, 52, 54]],
            [[3, 14, 5], [4, 24], [14, 34], [24, 44], [34, 45], [53, 55]],
            [[4, 15], [5, 25], [15], [45], [35, 44], [54]]
        ]
    },
    {
        "edges": [
            [[10], [0, 20], [10, 30], [20, 40], [30, 50, 41], [40, 51]],
            [[2, 11], [1, 21], [11, 31], [21, 41, 32], [31, 40], [50]],
            [[1, 12, 3], [2, 13], [32], [22, 31], [52, 43], [42, 53]],
            [[2, 4], [12, 23], [13, 33], [23, 34], [42], [52, 54]],
            [[3, 5], [24, 15], [14, 34], [24, 33, 44], [34], [53, 55]],
            [[4], [14, 25], [15, 35], [25, 45], [35, 55], [45, 54]]
        ]
    },
    {
        "edges": [
            [[1], [20, 11], [10, 21], [40], [30, 50, 41], [40, 51]],
            [[0, 2], [10, 12], [20, 22], [41, 32], [31, 40], [50, 52]],
            [[1, 12, 3], [2, 11], [21], [31, 33], [52, 43], [42, 51]],
            [[2, 13], [3, 14], [33, 24], [23, 32, 34], [42, 44], [54]],
            [[14, 5], [4, 13], [23], [33, 35], [43, 54], [44, 53, 55]],
            [[4, 15], [5, 25], [15, 35], [25, 34], [55], [45, 54]]
        ]
    },
    {
        "edges": [
            [[1, 10], [0, 20], [10, 30], [20, 31], [50, 41], [40, 51]],
            [[0, 2], [21, 12], [11], [30, 41], [31, 40], [50, 52]],
            [[1, 12], [2, 11], [32, 23], [22], [52, 43], [42, 51]],
            [[13, 4], [3, 14], [22, 33, 24], [23, 43], [33, 42], [54]],
            [[3, 5], [13], [23, 34], [24, 44], [34, 45], [53, 55]],
            [[4, 15], [5, 25], [15, 35], [25, 45], [35, 44, 55], [45, 54]]
        ]
    },
    {
        "edges": [
            [[1], [20, 11], [10, 30], [20, 31], [50, 41], [40, 51]],
            [[0, 11, 2], [1, 10, 21], [11], [30, 41], [31, 40], [50, 52]],
            [[1, 3], [22, 13], [12, 32], [22, 42], [32, 43], [51, 53]],
            [[2, 4], [12, 23], [13, 24], [43], [33, 42, 53], [43, 52]],
            [[3, 5], [15], [23, 34], [24, 44], [34, 54], [44]],
            [[4, 15], [5, 14, 25], [15, 35], [25, 45], [35, 55], [45]]
        ]
    },
    {
        "edges": [
            [[1], [20, 11], [10, 30], [20, 40], [30, 50, 41], [40, 51]],
            [[0, 2], [10, 12], [31, 22], [21], [40, 42], [50, 52]],
            [[1, 12, 3], [2, 11, 22], [12, 21], [42, 33], [32, 41], [51, 53]],
            [[2, 4], [14], [33, 24], [23, 32], [53], [43, 52, 54]],
            [[3, 5], [13, 15], [23, 25], [44, 35], [34, 45], [53]],
            [[4, 15], [5, 14], [24, 35], [25, 34], [44, 55], [45]]
        ]
    }
];

function populate_maze_db() {
    maze_db1[0][1] = 0;
    maze_db2[5][2] = 0;
    maze_db1[1][3] = 1;
    maze_db2[4][1] = 1;
    maze_db1[3][3] = 2;
    maze_db2[5][3] = 2;
    maze_db1[0][0] = 3;
    maze_db2[0][3] = 3;
    maze_db1[4][2] = 4;
    maze_db2[3][5] = 4;
    maze_db1[4][0] = 5;
    maze_db2[2][4] = 5;
    maze_db1[1][0] = 6;
    maze_db2[1][5] = 6;
    maze_db1[3][0] = 7;
    maze_db2[2][3] = 7;
    maze_db1[2][1] = 8;
    maze_db2[0][4] = 8;
}

var placed = {};
var lastPlacement = "-1";
var cur_maze = -1;
var start_marker = {x: -1, y: -1},
    stop_marker = {x: -1, y: -1};

function _object_count(obj) {
    var count = 0;
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            ++count;
        }
    }
    return count;
}

function placements_made() {
    var placements = Array();
    for (var k in placed) {
        if (placed.hasOwnProperty(k)) {
            placements.push(k);
        }
    }
    return placements;
}

function _parse_placement(placestr) {
    var f = Object();
    f.x = parseInt(placestr[0]);
    f.y = parseInt(placestr[2]);
    return f;
}

function __circle_placement_callback(e) {
    var cell = e.currentTarget;
    var x = parseInt(cell.dataset.x), y = parseInt(cell.dataset.y);
    var placementString = "" + x + "_" + y;
    if (_object_count(placed) > 0 && lastPlacement != "-1" && placed[lastPlacement] !== undefined) {
        console.debug("Deleting last circle placement...");
        delete placed[lastPlacement];
        $("#mazeCell_" + lastPlacement).removeClass("placed");
        lastPlacement = "-1";
        reset_maze_walls();
    }
    placed[placementString] = 1;
    lastPlacement = placementString;
    $(cell).addClass("placed");

    if (_object_count(placed) > 0) {
        attempt_render_maze();
    }
}

function _build_path_segment(path, currentPosition, stopPosition, maze_num, level) {
    if (level > 36) {
        // we're doing something wrong if we go beyond 6x6 traversals
        console.log('recursion bugs ahoy');
        return null;
    }

    path.push(currentPosition);

    if (currentPosition == stopPosition) {
        return path;
    }
    else {
        for (var i = 0; i < wall_db[maze_num].edges[currentPosition % 10][Math.floor(currentPosition / 10)].length; i++) {
            var nextPosition = wall_db[maze_num].edges[currentPosition % 10][Math.floor(currentPosition / 10)][i];
            if (path.indexOf(nextPosition) == -1) {
                var result = _build_path_segment(path.slice(0), nextPosition, stopPosition, maze_num, level + 1);
                if (result != null) {
                    return result;
                }
            }
        }
        return null;
    }
}

function clone(arr) {
    var newarr = Array();
    arr.forEach(function (val, idx) {
        newarr.push(val);
    });
    return newarr;
}

function build_and_show_path() {
    console.debug("This is the part where I build out a maze at " +
        "(" + start_marker.x + ", " + start_marker.y + ") and " +
        "(" + stop_marker.x + ", " + stop_marker.y + ")");
    var spoken_directions = Array();
    var path = _build_path_segment([], start_marker.x * 10 + start_marker.y, stop_marker.x * 10 + stop_marker.y, cur_maze, 0);
    console.debug(path);
    if (path) {
        for (var i = 0; i < path.length - 1; i++) {
            $('#mazeCell_' + Math.floor(path[i] / 10) + '_' + Math.floor(path[i] % 10)).addClass('path-segment');
            console.log(path[i] - path[i + 1]);
            switch (path[i + 1] - path[i]) {
                case -1:
                    spoken_directions.push("up");
                    break;
                case -10:
                    spoken_directions.push("left");
                    break;
                case 1:
                    spoken_directions.push("down");
                    break;
                case 10:
                    spoken_directions.push("right");
                    break;
            }
        }
        $('#mazeCell_' + stop_marker.x + '_' + stop_marker.y).addClass('path-segment');
        $('#mazeDirections').text(spoken_directions.join(', '));
    } else {
        console.log('we fail');
    }
    $('td.mazeCell').unbind('click').click(reset_pane);
}

function place_start_marker(cell) {
    start_marker.x = parseInt(cell.dataset.x);
    start_marker.y = parseInt(cell.dataset.y);
    $(cell).addClass('start-marker');
}

function place_stop_marker(cell) {
    stop_marker.x = parseInt(cell.dataset.x);
    stop_marker.y = parseInt(cell.dataset.y);
    $(cell).addClass('stop-marker');
}

function __start_placement_callback(e) {
    place_start_marker(e.currentTarget);
    stop_placement_transition();
}

function __stop_placement_callback(e) {
    place_stop_marker(e.currentTarget);
    build_and_show_path();
}

function stop_placement_transition() {
    $('td.mazeCell').addClass('place-stop')
        .unbind('click')
        .click(__stop_placement_callback);
}

function start_placement_transition() {
    $('td.mazeCell').addClass('start-stop')
        .unbind('click')
        .click(__start_placement_callback);
}


function reset_maze_walls() {
    console.debug('resetting walls...');
    $('td.mazeCell').css("border-top", "none")
        .css("border-left", "none")
        .css("border-bottom", "none")
        .css("border-right", "none")
        .data('mask', null);
}

function build_walls(maze_number) {
    console.debug('building walls for #' + maze_number);
    $('td.mazeCell').each(function (idx, elem) {
        var x = parseInt(elem.dataset.x);
        var y = parseInt(elem.dataset.y);
        var total = x * 10 + y;
        var edges = wall_db[maze_number].edges[y][x];
        if (edges.indexOf(total - 1) == -1) {
            $(elem).css("border-top", "1px solid #fff");
        }
        if (edges.indexOf(total - 10) == -1) {
            $(elem).css("border-left", "1px solid #fff");
        }
        if (edges.indexOf(total + 1) == -1) {
            $(elem).css("border-bottom", "1px solid #fff");
        }
        if (edges.indexOf(total + 10) == -1) {
            $(elem).css("border-right", "1px solid #fff");
        }
    });
}

function attempt_render_maze() {
    var maze_scaffold = -1;
    var placements = placements_made();
    if (placements.length != 1) {
        return;
    }
    placements.forEach(function (c, i, arr) {
        var pcoords = _parse_placement(c);
        if (maze_db1[pcoords.x][pcoords.y] !== undefined) {
            maze_scaffold = maze_db1[pcoords.x][pcoords.y];
        } else if (maze_db2[pcoords.x][pcoords.y] !== undefined) {
            maze_scaffold = maze_db2[pcoords.x][pcoords.y];
        }
    });
    if (maze_scaffold != -1) {
        // we have a match, render it
        cur_maze = maze_scaffold;
        build_walls(parseInt(maze_scaffold));
        start_placement_transition();
    }
}

function reset_pane() {
    reset_maze_walls();
    placed = {};
    lastPlacement = "-1";
    cur_maze = -1;
    start_marker.x = start_marker.y = -1;
    stop_marker.x = stop_marker.y = -1;
    $('#mazeDirections').html('&nbsp;');
    $('td.mazeCell').removeClass('path-segment start-stop place-stop placed start-marker stop-marker')
        .unbind('click')
        .click(__circle_placement_callback);
}

populate_maze_db();
reset_pane();
$("td.mazeCell").click(__circle_placement_callback);