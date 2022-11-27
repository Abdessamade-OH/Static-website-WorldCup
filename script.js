function closeVol5(){
	let vol5= document.getElementById("volet5");
	//vol5.style.width=0;
	vol5.style.right= "-25%";
	//vol5.style.visibility="hidden";
	let openButton = document.getElementById("openButton");
	openButton.style.visibility="visible"
}
function openVol5(){
	let vol5= document.getElementById("volet5");
	//vol5.style.width= "25%";
	vol5.style.right= "0";
	vol5.style.visibility="visible";
	let openButton = document.getElementById("openButton");
	openButton.style.visibility="hidden";
	console.log(width);
}
function closeVol2(){
	let vol2= document.getElementById("volet2");
	//vol5.style.width=0;
	vol2.style.left= "-15%";
	//vol5.style.visibility="hidden";
	let openButton = document.getElementById("openButton2");
	openButton.style.left= "0";
	openButton.style.visibility="visible"

}
function openVol2(){
	let vol2= document.getElementById("volet2");
	//vol5.style.width= "25%";
	vol2.style.left= "0";
	vol2.style.visibility="visible";
	let openButton = document.getElementById("openButton2");
	openButton.style.visibility="hidden";
	//openButton.style.transition ="visibility 0.5s";
	console.log(width);
}

//landing page
function takeUHome(){
	const section = document.querySelector("section");
	if (section.style.display === "none") {
		section.style.display = "block";
		} else {
		section.style.display = "none";
		  }


}
