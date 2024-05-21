// Функция для сохранения состояния игры в LocalStorage
function saveGameData() {
	localStorage.setItem('gameBoard', JSON.stringify(board));
	localStorage.setItem('gameScore', score);
}

// Функция для загрузки состояния игры из LocalStorage
function loadGameData() {
	const storedBoard = JSON.parse(localStorage.getItem('gameBoard'));
	const storedScore = parseInt(localStorage.getItem('gameScore'), 10);
		if (storedBoard && storedScore >= 0) {
			board = storedBoard;
			score = storedScore;
		} else {
			board = newGame();
			score = 0;
		}

		document.getElementById('score').textContent = score;
		render(board);
}

// Сохранение состояния при закрытии или перезагрузке
window.addEventListener('beforeunload', saveGameData);