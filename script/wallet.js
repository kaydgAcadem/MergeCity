document.addEventListener("DOMContentLoaded", function () {
let isConnected = false; // Флаг, указывающий на состояние подключения
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
	manifestUrl: 'https://mcity.kaydg.keenetic.pro/public/mcity/tonconnect-manifest.json',
	buttonRootId: 'ton-connect'
});

	async function connectToWallet() {
		try {
			const connectedWallet = await tonConnectUI.connectWallet();
			if (connectedWallet && connectedWallet.account && connectedWallet.account.address) {
				const address = connectedWallet.account.address;
				console.log("Адрес вашего кошелька:", address);
				isConnected = true;
				window.connectedWallet = connectedWallet; // Убедимся, что переменная установлена
			}
		} catch (error) {
			console.error('Ошибка подключения к кошельку:', error);
		}
	}

	const connectButton = document.getElementById("ton-connect");
	connectButton.addEventListener("click", function() {
		if (!isConnected) { // Если кошелек не подключен, запускаем функцию
			connectToWallet().then(connectedWallet => {
			if (connectedWallet) {
				isConnected = true;
				window.connectedWallet = connectedWallet; // Убедимся, что переменная обновляется
			}
			});
		} else {
			console.log("Кошелек уже подключен.");
			}
	});

	const unsubscribe = tonConnectUI.onStatusChange((walletAndWalletInfo) => {
		if (walletAndWalletInfo && walletAndWalletInfo.account && walletAndWalletInfo.account.address) {
			isConnected = true; // Обновляем флаг
			window.connectedWallet = walletAndWalletInfo; // Обновляем переменную
			console.log("Состояние кошелька изменено:", walletAndWalletInfo.account.address);
		} else {
			isConnected = false;
			console.log("Кошелек не подключен.");
		}
	});

});