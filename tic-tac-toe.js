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
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        });
    });

    document.querySelectorAll('#board div').forEach(square => {
        square.addEventListener('mouseover', function() {
            square.classList.add('hover');
        });
        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });
});
