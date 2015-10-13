var maze_db1 = [[], [], [], [], [], []];
var maze_db2 = [[], [], [], [], [], []];
var maze_populated = false;

// 4 bits to represent the walls
// 1   1    1     1
// up left down right

var wall_db = [
    {
        // 6x6 --> 36x1
        "walls": [
        12, 10, 9, 12, 10, 11,
        5, 12, 3, 6, 10, 9,
        5, 6, 9, 12, 10, 1,
        5, 14, 2, 3, 14, 1,
        4, 10, 9, 12, 11, 5,
        6, 11, 6, 3, 14, 3
        ]
    },
    {
        "walls": [
        14, 8, 11, 12, 8, 11,
        12, 3, 12, 3, 6, 9,
        5, 12, 3, 12, 10, 1,
        4, 3, 12, 3, 13, 5,
        5, 13, 5, 12, 3, 5,
        7, 6, 3, 6, 10, 3
        ]
    },
    {
        "walls": [
        12, 10, 9, 13, 12, 9,
        7, 13, 5, 6, 3, 5,
        12, 1, 5, 12, 9, 5,
        5, 5, 5, 5, 5, 5,
        5, 6, 3, 5, 5, 5,
        6, 10, 10, 3, 6, 3
        ]
    },
    {
        "walls": [
        12, 9, 14, 10, 10, 9,
        5, 5, 12, 10, 10, 1,
        5, 6, 3, 12, 11, 5,
        5, 14, 10, 2, 10, 1,
        4, 10, 10, 10, 9, 5,
        6, 10, 11, 14, 3, 7
        ],
    },
    {
        "walls": [
        14, 10, 10, 10, 8, 9,
        12, 10, 10, 8, 3, 7,
        4, 9, 14, 3, 12, 9,
        5, 6, 10, 9, 7, 5,
        5, 12, 10, 2, 11, 5,
        7, 6, 10, 10, 10, 3
        ]
    },
    {
        "walls": [
        13, 12, 9, 14, 8, 9,
        5, 5, 5, 12, 3, 5,
        4, 3, 7, 5, 12, 3,
        6, 9, 12, 1, 5, 13,
        12, 3, 7, 5, 6, 1,
        6, 10, 10, 3, 14, 3
        ]
    },
    {
        "walls": [
        12, 10, 10, 9, 12, 9,
        5, 12, 11, 6, 3, 5,
        6, 3, 12, 11, 12, 3,
        12, 9, 4, 10, 3, 13,
        5, 7, 6, 10, 9, 5,
        6, 10, 10, 10, 2, 3
        ]
    },
    {
        "walls": [
        13, 12, 10, 9, 12, 9,
        4, 2, 11, 6, 3, 5,
        5, 12, 10, 10, 9, 5,
        5, 6, 9, 14, 2, 3,
        5, 13, 6, 10, 10, 11,
        6, 2, 10, 10, 10, 11
        ]
    },
    {
        "walls": [
        13, 12, 10, 10, 8, 9,
        5, 5, 12, 11, 5, 5,
        4, 2, 3, 12, 3, 5,
        5, 13, 12, 3, 14, 1,
        5, 5, 5, 12, 9, 7,
        6, 3, 6, 3, 6, 11
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

function __start_placement_callback(e) {
}

function __stop_placement_callback(e) {
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
    $('td.mazeCell').each(function(idx, elem) {
        var x = parseInt(elem.dataset.x), y = parseInt(elem.dataset.y);
        var wall_mask = wall_db[maze_number].walls[y*6 + x];
        elem.dataset['mask'] = wall_mask;
        if (wall_mask & 8) {
            $(elem).css("border-top", "1px solid #fff");
        }
        if (wall_mask & 4) {
            $(elem).css("border-left", "1px solid #fff");
        }
        if (wall_mask & 2) {
            $(elem).css("border-bottom", "1px solid #fff");
        }
        if (wall_mask & 1) {
            $(elem).css("border-right", "1px solid #fff");
        }
    });
}

function start_stop_transition() {
    $('td.mazeCell').addClass('start-stop');
}

function attempt_render_maze() {
	var maze_scaffold = -1;
	var placements = placements_made();
	if (placements.length != 1) {
		return;
	}
	placements.forEach(function(c, i, arr) {
		var pcoords = _parse_placement(c);
		if (maze_db1[pcoords.x][pcoords.y] !== undefined) {
			maze_scaffold = maze_db1[pcoords.x][pcoords.y];
		} else if (maze_db2[pcoords.x][pcoords.y] !== undefined) {
			maze_scaffold = maze_db2[pcoords.x][pcoords.y];
		}
	});
	if (maze_scaffold != -1) {
		// we have a match, render it
        currentTarget = maze_scaffold;
        build_walls(parseInt(maze_scaffold));
        start_stop_transition();
	}
}

function reset_pane() {
    reset_maze_walls();
    placed = {};
    lastPlacement = "-1";
    cur_maze = -1;
    $('td.mazeCell').removeClass('start-stop')
                    .click(__circle_placement_callback);
}

populate_maze_db();
reset_pane();
$("td.mazeCell").click(__circle_placement_callback);
