let xPos = 400;
let yPos = -100;

function randomRange(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
  
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeTitle(title) {
	document.title = title;
}

function openWindow(url) {
	window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}

function openWindowAmountOfTimes(url,times) {
	for (let i = 0; i < times; i++) {
		openWindow(url)
	}
}

function annoyments() {
    xPos = randomRange(screen.width + 357, screen.width - 357);
    yPos = randomRange(screen.height + 330, screen.height - 330);
    window.moveTo(xPos, yPos);
    setTimeout(annoyments, 1);
}
