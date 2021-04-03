function alertDiscord() {
	alert('PatrickMSM#9997');
}

function dropdown(dropdownelem) {
	let content = dropdownelem.querySelector('#dropdowncontent');
	if (content.style.display == 'none') {
		content.style.display = 'block';
		let icon = dropdownelem.querySelector('#container').querySelector('#icon');
		icon.style.transition = "1s";
		icon.style.transform = "rotateZ(90deg)";
	} else {
		content.style.display = 'none';
		let icon = dropdownelem.querySelector('#container').querySelector('#icon');
		icon.style.transition = "1s";
		icon.style.transform = "rotateZ(0deg)";
	}
}
