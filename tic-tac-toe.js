document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    squares.forEach(square => {
        square.classList.add('square');
    });

    let currentPlayer = 'X';
    const board = Array(9).fill(null);

    squares.forEach((square, index) => {
        square.addEventListener('click', function() {
            if (!board[index] && !document.getElementById('status').classList.contains('you-won')) {
                board[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                checkWinner();
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        });
    });

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                document.getElementById('status').textContent = `Congratulations! ${board[a]} is the Winner!`;
                document.getElementById('status').classList.add('you-won');
                break;
            }
        }
    }

    document.querySelectorAll('#board div').forEach(square => {
        square.addEventListener('mouseover', function() {
            square.classList.add('hover');
        });
        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });

    document.querySelector('.btn').addEventListener('click', function() {
        board.fill(null);
        currentPlayer = 'X';
        squares.forEach(square => {
            square.textContent = '';
            square.className = 'square';
        });
        document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
        document.getElementById('status').classList.remove('you-won');
    });
});
