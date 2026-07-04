//declaration et initialisation des variables
let sadBtn = document.getElementById("unhappyBtn");
let neutralBtn = document.getElementById("neutralBtn");
let satisBtn = document.getElementById("SatisfiedBtn");

let reviewBtn = document.getElementById("reviewBtn");

//ajoutons l'evenement sur notre button send review
reviewBtn.addEventListener("click", () => {
	if (sadBtn.click) {
		window.location.href = "feedback.html";
	}

	console.log("evement detecter");
	S;
});
