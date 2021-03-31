function alertDiscord() {
	alert('PatrickMSM#9997');
}

function dropdown(dropdownelem) {
	let content = dropdownelem.querySelector('#dropdowncontent');
	if (content.style.display == 'none') {
		content.style.display = 'block';
	} else {
		content.style.display = 'none';
	}
}

localStorage.removeItem('MinerShutOff'); // old shit i only put for compat
