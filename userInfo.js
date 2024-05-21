document.addEventListener("DOMContentLoaded", function () {
	let usercard = document.getElementById("usercard");
	let profName = document.createElement('p');
	if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
		profName.innerText = `${tg.initDataUnsafe.user.first_name} (${tg.initDataUnsafe.user.language_code})`;
	} else {
		profName.innerText = 'No Name';
	  }
	usercard.appendChild(profName);
});