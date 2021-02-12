$(function () {
    var N_SIZE = 3,
      EMPTY = '&nbsp;',
      boxes = [],
      turn = 'X',
      score,
      moves;
    
        var N_SIZE = 3,
            EMPTY = "&nbsp;",
            boxes = [],
            turn = "X",
            score,
            moves;
            function init() {
                var board = document.createElement('table');
                board.setAttribute('border', 1);
                board.setAttribute('cellspacing', 0);
                function init() {
                    var board = $("<table border=1 cellspacing=0>"),
                        identifier = 1;
                    for (var i = 0; i < N_SIZE; i++) {
                        var row = $("<tr>");
                        board.append(row);
                        for (var j = 0; j < N_SIZE; j++) {
                            var cell = $("<td height=120 width=120 align=center valign=center></td>");
                            cell.addClass('col' + j).addClass('row' + i);
                            if (i == j) {
                                cell.addClass('diagonal0');
                            }
                            if (j == N_SIZE - i - 1) {
                                cell.addClass('diagonal1');
                            }
                            cell[0].identifier = identifier;
                            cell.click(set);
                            row.append(cell);
                            boxes.push(cell);
                            identifier += identifier;
                        }
                    }
                    var identifier = 1;
  for (var i = 0; i < N_SIZE; i++) {
    var row = document.createElement('tr');
    board.appendChild(row);
    for (var j = 0; j < N_SIZE; j++) {
      var cell = document.createElement('td');
      cell.setAttribute('height', 120);
      cell.setAttribute('width', 120);
      cell.setAttribute('align', 'center');
      cell.setAttribute('valign', 'center');
      cell.classList.add('col' + j, 'row' + i);
      if (i == j) {
        cell.classList.add('diagonal0');
      }
      if (j == N_SIZE - i - 1) {
        cell.classList.add('diagonal1');
      }
      cell.identifier = identifier;
      cell.addEventListener('click', set);
      row.appendChild(cell);
      boxes.push(cell);
      identifier += identifier;
    }
  }             
  $(document.getElementById("tictactoe") || document.body).append(board);
		startNewGame();
	}
  document.getElementById('tictactoe').appendChild(board);
  startNewGame();
}
function startNewGame() {
    score = {
        "X": 0,
        "O": 0
    };
    moves = 0;
    turn = "X";
    boxes.forEach(function (square) {
        square.html(EMPTY);
    });
}
function startNewGame() {
    score = {
      'X': 0,
      'O': 0
    };
    moves = 0;
    turn = 'X';
    boxes.forEach(function (square) {
      square.innerHTML = EMPTY;
    });
  }

  function win(clicked) {
    // Get all cell classes
    var memberOf = clicked[0].className.split(/\s+/);
    for (var i = 0; i < memberOf.length; i++) {
        var testClass = '.' + memberOf[i];
        // winning condition: turn == N_SIZE,
        if ($('#tictactoe').find(testClass + ':contains(' + turn + ')').length == N_SIZE) {
            return true;
        }
    }
    return false;
}

function win(clicked) {
    // Get all cell classes
    var memberOf = clicked.className.split(/\s+/);
    for (var i = 0; i < memberOf.length; i++) {
      var testClass = '.' + memberOf[i];
      var items = contains('#tictactoe ' + testClass, turn);
      // winning condition: turn == N_SIZE
      if (items.length == N_SIZE) {
        return true;
      }
    }
    return false;
  }
  function set() {
    if ($(this).html() !== EMPTY) {
        return;
    }
    $(this).html(turn);
    moves += 1;
    score[turn] += $(this)[0].identifier;
    if (win($(this))) {
        alert('Winner: Player ' + turn);
        startNewGame();
    } else if (moves === N_SIZE * N_SIZE) {
        alert("Draw");
        startNewGame();
    } else {
        turn = turn === "X" ? "O" : "X";
        $('#turn').text('Player ' + turn);
    }
}
function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return [].filter.call(elements, function (element) {
      return RegExp(text).test(element.textContent);
    });
  }
  function set() {
    if (this.innerHTML !== EMPTY) {
      return;
    }
    this.innerHTML = turn;
    moves += 1;
    score[turn] += this.identifier;
    if (win(this)) {
      alert('Winner: Player ' + turn);
      startNewGame();
    } else if (moves === N_SIZE * N_SIZE) {
      alert('Draw');
      startNewGame();
    } else {
      turn = turn === 'X' ? 'O' : 'X';
      document.getElementById('turn').textContent = 'Player ' + turn;
    }
  }
  init();
});
init();     