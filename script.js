var Open2 = false;
var Open5 = true;
var wasClosed2 = true;
var wasClosed5=false;
var lessThan600 = false;
var lessThan750 = false;
var auto2 = false;
var auto5 = false;
window.onload = () => {
	console.log("Hello world!");
	const Media750 = window.matchMedia('(max-width: 750px)');
	checkMedia750(Media750);
	Media750.addListener(checkMedia750);
	
	const Media600 = window.matchMedia('(max-width: 600px)');
	checkMedia600(Media600);
	Media600.addListener(checkMedia600);
	
	const over750 = window.matchMedia('(min-width: 750px)');
	resetOpacity(over750);
	over750.addListener(resetOpacity);
	
	document.getElementById("field").addEventListener("click", ()=>{
		if(window.matchMedia("(max-width: 750px)").matches && Open2){
			document.getElementById("field").style.opacity="1";
			closeVol2();
			wasClosed2 = true;
		}
		if(window.matchMedia("(max-width: 600px)").matches && (Open2 || Open5)){
			document.getElementById("field").style.opacity="1";
			if(Open2){
				closeVol2();
				wasClosed2 = true;
			}
			if(Open5){
				closeVol5();
				wasClosed5 = true;
			}
		}
	});
}

function checkMedia750(Media750){
	if(Media750.matches){
		//alert("Media query Matched!");
		if(Open2){
			wasClosed2=false;
		}
		else{
			wasClosed2=true;
		}
		closeVol2();
		lessThan750 = true;
	}
	else {
		if(wasClosed2==false){
			auto2==true;
			openVol2();
		}
		auto2=false;
		lessThan750 = false;
	}
	
}
function checkMedia600(Media600){
	if(Media600.matches){
		if(Open5){
			wasClosed5=false;
		}
		else{
			wasClosed5=true;
		}
		closeVol5();
		lessThan600 = true;
	}
	else {
		if(wasClosed5==false){
			auto5=true;
			openVol5();
		}
		auto5 = false;
		lessThan600 = false;
		if(Open2==false){
			document.getElementById("field").style.opacity="1";
		}
	}
}
function resetOpacity(over750){
	if(over750.matches){
		document.getElementById("field").style.opacity="1";
	}
}

function closeVol5(){
	let vol5= document.getElementById("volet5");
	//vol5.style.width=0;
	vol5.style.right= "-25%";
	//vol5.style.visibility="hidden";
	let openButton = document.getElementById("openButton");
	openButton.style.visibility="visible";
	Open5 = false;
	if(lessThan600 && Open2==false){
		document.getElementById("field").style.opacity="1";
	}
	
}
function openVol5(){
	let vol5= document.getElementById("volet5");
	//vol5.style.width= "25%";
	vol5.style.right= "0";
	vol5.style.visibility="visible";
	let openButton = document.getElementById("openButton");
	openButton.style.visibility="hidden";
	Open5 = true;
	if(lessThan600 && auto5==false){
		document.getElementById("field").style.opacity="0.2";
	}
}

function closeVol2(){
	let vol2= document.getElementById("volet2");
	//vol5.style.width=0;
	vol2.style.left= "-15%";
	//vol5.style.visibility="hidden";
	let openButton = document.getElementById("openButton2");
	openButton.style.left= "0";
	openButton.style.visibility="visible"
	Open2 = false;
	if(lessThan600 && Open5==false){
		document.getElementById("field").style.opacity="1";
	}
	if(lessThan750 && !lessThan600){
		document.getElementById("field").style.opacity="1";
	}
}
function openVol2(){
	let vol2= document.getElementById("volet2");
	vol2.style.left= "0";
	vol2.style.visibility="visible";
	let openButton = document.getElementById("openButton2");
	openButton.style.visibility="hidden";
	//openButton.style.transition ="visibility 0.5s";
	Open2 = true;
	if(lessThan750 && auto2==false){
		document.getElementById("field").style.opacity="0.2";
	}
}

function closeVol3(){
	let vol3= document.getElementById("volet3");
	//vol5.style.width=0;
	vol3.style.top= "-250px";
	vol3.style.visibility="hidden";
	let openButton = document.getElementById("openButton3");
	openButton.style.top= "19.5%";
	openButton.style.visibility="visible";
}
function openVol3(){
	let vol3= document.getElementById("volet3");
	//vol5.style.width= "25%";
	vol3.style.top= "20%";
	vol3.style.visibility="visible";
	let openButton = document.getElementById("openButton3");
	openButton.style.visibility="hidden";
}
