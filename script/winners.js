    function createNewWinnerEntry(address, score, deviceTypeText) {
    const data = {
        connectedWallet: {
            account: {
                address: address
            }
        },
        score: score,
		deviceTypeText: deviceTypeText
				
    };

    console.log(JSON.stringify(data)); // Проверяем формат данных перед отправкой

    fetch('/saveWinner', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Server response:', data);
    })
    .catch(error => {
        console.error('Error sending data to server:', error);
    });
}