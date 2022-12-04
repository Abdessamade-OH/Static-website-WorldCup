var Open2 = false;
var Open5 = true;
var wasClosed2 = true;
var wasClosed5=false;
var lessThan600 = false;
var lessThan750 = false;
var auto2 = false;
var auto5 = false;
var over860 = true;
var openCard = false;

window.onload = () => {
	console.log("Hello world!");
	
	acceuil();
	
	const Media750 = window.matchMedia('(max-width: 750px)');
	checkMedia750(Media750);
	Media750.addListener(checkMedia750);
	
	const Media600 = window.matchMedia('(max-width: 600px)');
	checkMedia600(Media600);
	Media600.addListener(checkMedia600);
	
	const media860 = window.matchMedia('(min-width: 860px)');
	checkMedia860(media860);
	media860.addListener(checkMedia860);
	
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
		document.getElementById("field").style.opacity="1";
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

function checkMedia860(media860){
	if(media860.matches){
		console.log("over 860px");
		over860 = true;
		if(openCard){
			document.getElementById("FT").style.width="35%";
			document.getElementById("CONTAIN").style.width="65%";
			document.getElementById("CONTAIN").style.width="65%";
			document.getElementById("CONTAIN").style.top="0";
			document.getElementById("FT").style.position="sticky";
			document.getElementById("FT").style.left="65%";
			document.getElementById("FT").style.height="95%";
			document.getElementById("FT").style.top="5%";
			document.getElementById("card-close").style.left="3%";
			
			/*if(Open5){
				document.getElementById("card-img").style.height="60%";
			}*/
		}
	}
	else{
		document.getElementById("CONTAIN").style.width="100%";
		document.getElementById("CONTAIN").style.width="100%";
		console.log("under 860px");
		over860 = false;
		if(openCard){
			document.getElementById("CONTAIN").style.top="200px";
			document.getElementById("FT").style.width="100%";
			document.getElementById("FT").style.left="0%";
			document.getElementById("FT").style.position="absolute";
			document.getElementById("FT").style.height="200px";
			document.getElementById("FT").style.top="0%";
			if(Open2 && Open5)
				document.getElementById("card-close").style.left="10%";
				
			//document.getElementById("card-img").style.height="90%";
		}
	}
}



function closeVol5(){
	let vol5= document.getElementById("volet5");
	//vol5.style.width=0;
	vol5.style.right= "-25%";
	//vol5.style.boxShadow="0";
	//vol5.style.visibility="hidden";
	let openButton = document.getElementById("openButton");
	openButton.style.visibility="visible";
	Open5 = false;
	if(lessThan600 && Open2==false){
		document.getElementById("field").style.opacity="1";
	}
	
	document.getElementById("volet4").style.right="0%";
	document.getElementById("volet4").style.transitionDelay = "0s";
	if(Open2){
		document.getElementById("volet4").style.width="85%";
	}
	else
		document.getElementById("volet4").style.width="100%";
		
	/*if(!over860){
		document.getElementById("FT-card").style.left="calc( ( 100% - 500px) / 2 )";
	}*/
	
	document.getElementById("card-close").style.left="10%";
	
	document.getElementById("News-Ads").style.width="100%";
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
	
	document.getElementById("volet4").style.right="25%";
	document.getElementById("volet4").style.transitionDelay = "0.4s";
	if(Open2){
		document.getElementById("volet4").style.width="60%";
	}
	else
		document.getElementById("volet4").style.width="75%";
		
	/*if(!over860){
		document.getElementById("FT-card").style.left="calc( ( 100% - 500px) / 4 )";
	}*/
	
	document.getElementById("News-Ads").style.width="75%";
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
	
	document.getElementById("volet4").style.left="0%";
	document.getElementById("volet4").style.transitionDelay = "0s";
	if(Open5){
		document.getElementById("volet4").style.width="75%";
	}
	else
	document.getElementById("volet4").style.width="100%";
	document.getElementById("card-close").style.left="5%";
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
	
	document.getElementById("volet4").style.left="15%";
	document.getElementById("volet4").style.transitionDelay = "0.4s";
	if(Open5){
		document.getElementById("volet4").style.width="60%";
	}
	else
	document.getElementById("volet4").style.width="85%";
	
	closePlayerCard();
}

function closeVol3(){
	let vol3= document.getElementById("volet3");
	//vol5.style.width=0;
	vol3.style.top= "-250px";
	vol3.style.visibility="hidden";
	let openButton = document.getElementById("openButton3");
	openButton.style.top= "110px";
	openButton.style.visibility="visible";
	
	document.getElementById("volet4").style.top="110px";
	document.getElementById("volet4").style.height="calc(100% - 150px)";
	document.getElementById("volet4").style.transitionDelay = "0s";
}
function openVol3(){
	let vol3= document.getElementById("volet3");
	//vol5.style.width= "25%";
	vol3.style.top= "109px";
	vol3.style.visibility="visible";
	let openButton = document.getElementById("openButton3");
	openButton.style.visibility="hidden";
	
	document.getElementById("volet4").style.top="335px";
	document.getElementById("volet4").style.height="calc(100% - 375px)";
	document.getElementById("volet4").style.transitionDelay = "0.4s";
	
	if(lessThan600){
		if(Open2)
			closeVol2();
		if(Open5)
			closeVol5();
	}
	if(lessThan750){
		if(Open5)
			closeVol5();
	}
	table();
	
	document.getElementById("News-Ads").style.display="none";
	
	document.getElementById("volet4").style.display="block";
	
}

function classement(){
	console.log("Classment: done.");
	closeVol2();
	closeVol3();

	document.getElementById("acceuil").style.display='none';
	document.getElementById("CONTAIN").style.display='none';
	document.getElementById("match").style.display='none';
	document.getElementById("News-Ads").style.display="none";
	
	document.getElementById("openButton2").style.visibility="hidden";
	document.getElementById("openButton3").style.visibility="hidden";
	
	closePlayerCard();
	
	document.getElementById("classement").style.display='block';
	document.getElementById("volet4").style.display="block";
	
	document.getElementById("volet4").style.backgroundColor="#cecece";
}
function acceuil(){
	console.log("Acceuil: done.");
	closeVol2();
	closeVol3();
	
	document.getElementById("classement").style.display='none';
	document.getElementById("match").style.display='none';
	document.getElementById("CONTAIN").style.display='none';
	document.getElementById("News-Ads").style.display="none";

	document.getElementById("openButton2").style.visibility="hidden";
	document.getElementById("openButton3").style.visibility="hidden";
	//document.getElementById("FT").style.display="none";
	closePlayerCard();
	
	document.getElementById("acceuil").style.display='flex';
	document.getElementById("volet4").style.display="block";
}
function match(){
	console.log("Match: done.");
	closeVol2();
	closeVol3();
	
	document.getElementById("classement").style.display='none';
	document.getElementById("acceuil").style.display='none';
	document.getElementById("CONTAIN").style.display='none';
	document.getElementById("News-Ads").style.display="none";

	document.getElementById("openButton2").style.visibility="hidden";
	document.getElementById("openButton3").style.visibility="hidden";

	closePlayerCard();
	
	document.getElementById("match").style.display='block';
	document.getElementById("volet4").style.display="block";
	
	document.getElementById("volet4").style.backgroundColor="brown";
	
	let defMod = document.getElementById("defaultModify");
	if (defMod){
		defMod.addEventListener('click', function modifyMatch(event) {
	  		console.log('Match: Modifed');
	  		
	  		let matchData = this.parentElement.children;
	  		console.log(matchData[2]);
	  		openMatchModifyForm();
	  		let modButton = document.getElementById("modifyButton");
	  		modButton.addEventListener('click', function applyValues(event){
	  		
		  		let firstTeamM = document.getElementById("ModifedfirstTeam").value;
		  		let secondTeamM = document.getElementById("ModifedsecondTeam").value;
		  		let matchDateM = document.getElementById("ModifedmatchDate").value;
		   		let matchTimeM = document.getElementById("ModifedmatchTime").value;
	  		
	  		
	  			matchData[2].innerHTML=firstTeamM + " VS " + secondTeamM;
	  			matchData[3].innerHTML=matchDateM + " | " + matchTimeM;
	  		});

		});
		
	}
	
	let defDel = document.getElementById("defaultDelete");
	if(defDel){
		defDel.addEventListener('click', function deleteMatch(event) {
  			console.log('Match: Deleted');
  		
  			this.parentElement.parentElement.remove();
		});
	}
	
	let defGrpDel = document.getElementById("defaultGroupDelete");
	if(defGrpDel){
		defGrpDel.addEventListener('click', function deleteGroup(event) {
  			console.log('Group: Deleted');
  		
  			this.parentElement.remove();
		});
	}
}


function table(){
	console.log("Table: done.");
	document.getElementById("classement").style.display='none';
	document.getElementById("acceuil").style.display='none';
	document.getElementById("form-tab").style.display="none";
	//document.getElementById("FT").style.display="none";
	document.getElementById("match").style.display='none';
	
	document.getElementById("div-tab").style.display="flex";
	
	document.getElementById("CONTAIN").style.display='block';
	
	if(over860){
		if(openCard){
			document.getElementById("CONTAIN").style.width="65%";
		}
		else{
			document.getElementById("CONTAIN").style.width="100%";
		}
	}
	else
		document.getElementById("CONTAIN").style.width="100%";
		
	document.getElementById("volet4").style.backgroundColor="#cecece";
}

function group(grp){
	openVol2();
	let teams = document.getElementsByClassName("TeamsGrp");
	
	for (let i = 0; i<teams.length; i++){
		teams[i].style.display="none";
	}
	
	document.getElementById(grp).style.display="block";
}

function formTab(event){
	let a=event.target.parentElement.parentElement;
	const x= parseInt(a.getAttribute('value'));
	console.log("Form: done");
	document.getElementById("newName").value=Teams[teamshowed][x].Nom;
	document.getElementById("newNumero").value=Teams[teamshowed][x].Numero;
	document.getElementById("newAge").value=Teams[teamshowed][x].Age;
	document.getElementById("newDesc").value=Teams[teamshowed][x].Description;
	document.getElementById("newPoste").value=Teams[teamshowed][x].Poste;
	document.getElementById("newPic").value=Teams[teamshowed][x].pic;
	document.getElementById("form-tab").style.display="flex";
	document.getElementById("div-tab").style.display="none";
	let xd=0;
	document.getElementById("editer").addEventListener("click",() => {
		if(!xd){
		console.log(x);
		console.log(document.getElementById("newNum").value);
		Teams[teamshowed][x].Nom=document.getElementById("newName").value;
		Teams[teamshowed][x].Numero=document.getElementById("newNumero").value;
		Teams[teamshowed][x].Poste=document.getElementById("newPoste").value;
		
		Teams[teamshowed][x].pic=document.getElementById("newPic").value;
		Teams[teamshowed][x].Age=document.getElementById("newAge").value;
		Teams[teamshowed][x].Description=document.getElementById("newDesc").value;
		showTeam(event,teamshowed);
		xd++}
	})
}



function fermer(){
	let fermer=document.getElementById('modify');
	fermer.style.display='none';
	
	document.getElementById("modifyPlayer").style.display="none";
}


function playerCard(){
	console.log("player card: done");
	document.getElementById("FT").style.display="block";
	openCard = true;
	
	if(over860){
		document.getElementById("CONTAIN").style.width="65%";
		document.getElementById("FT").style.height="95%";
		document.getElementById("FT").style.width="35%";
		document.getElementById("FT").style.top="5%";
	}
	else{
		document.getElementById("CONTAIN").style.top="200px";
		document.getElementById("FT").style.width="100%";
		document.getElementById("FT").style.height="200px";
		document.getElementById("FT").style.top="0%";
		document.getElementById("FT").style.left="0%";
	}	
	
	//closeVol3();
	
	closeVol2();
}

function closePlayerCard(){
	document.getElementById("FT").style.display="none";
	document.getElementById("CONTAIN").style.top="0%";
	document.getElementById("CONTAIN").style.width="100%";
	openCard = false;
}

function closeMatchForm(){
	document.getElementById("matchForm").style.display="none";
	document.getElementById("matchFormBackground").style.display="none";
}
function openMatchForm(){
	document.getElementById("matchForm").style.display="flex";
	document.getElementById("matchFormBackground").style.display="block";
}

function openMatchModifyForm(){
	document.getElementById("matchFormBackground").style.display="block";
	let form = document.getElementById("modifyForm")
	form.style.display="flex";
	
}
function closeModifyForm(){
	document.getElementById("matchFormBackground").style.display="none";
	document.getElementById("modifyForm").style.display="none";
}

function addMatch(){
	let grp = document.getElementById("selectGroup").value;
	let team1 = document.getElementById("firstTeam").value;
	let team2 = document.getElementById("secondTeam").value;
	let date = document.getElementById("matchDate").value;
	let time = document.getElementById("matchTime").value;
	
	console.log("Match form: done");
	
	let group=document.createElement("div");
	group.classList.add("group");
	
	let container = document.createElement("div");
	container.classList.add("container0");
	
	let card = document.createElement("div");
	card.classList.add("card");
	
	let vs = document.createElement("span");
	vs.classList.add("match");
	vs.setAttribute("id", "vs");
	vs.innerHTML=team1 + "VS" + team2;
	
	let dateSpan = document.createElement("span");
	dateSpan.classList.add("dateHeure");
	dateSpan.setAttribute("id", "dateNtime");
	dateSpan.innerHTML= date + " | " + time;
	
	let deleteButton = document.createElement("i");
	deleteButton.classList.add('fas');
	deleteButton.classList.add('fa-trash')
	deleteButton.classList.add('deleteButton');
	deleteButton.addEventListener('click', function deleteMatch(event) {
  		console.log('Match: Deleted');
  		
  		this.parentElement.parentElement.remove();
	});
	
	let modifyButton = document.createElement("i");
	modifyButton.classList.add('fas');
	modifyButton.classList.add('fa-pen-square')
	modifyButton.classList.add('modifyButton'); 
	modifyButton.addEventListener('click', function modifyMatch(event) {
  		console.log('Match: Modifed');
  		
  		let matchData = this.parentElement.children;
  		console.log(matchData[2]);
  		openMatchModifyForm();
  		let modButton = document.getElementById("modifyButton");
  		modButton.addEventListener('click', function applyValues(event){
  		
	  		let firstTeamM = document.getElementById("ModifedfirstTeam").value;
	  		let secondTeamM = document.getElementById("ModifedsecondTeam").value;
	  		let matchDateM = document.getElementById("ModifedmatchDate").value;
	   		let matchTimeM = document.getElementById("ModifedmatchTime").value;
  		
  		
  			matchData[2].innerHTML=firstTeamM + " VS " + secondTeamM;
  			matchData[3].innerHTML=matchDateM + " | " + matchTimeM;
  		});

	});
	
	card.appendChild(deleteButton);
	card.appendChild(modifyButton);
	
	card.appendChild(vs);
	card.appendChild(dateSpan);
	
	
	
	
	container.appendChild(card);
	
	let title = document.createElement("h2");
	title.classList.add("title");
	title.innerHTML= grp;
	
	let deleteGroupButton = document.createElement("i");
	deleteGroupButton.classList.add('fas');
	deleteGroupButton.classList.add('fa-trash')
	deleteGroupButton.classList.add('deleteGroupButton');
	deleteGroupButton.addEventListener('click', function deleteGroup(event) {
  		console.log('Group: Deleted');
  		
  		this.parentElement.remove();
	});
	
	group.appendChild(deleteGroupButton);
	
	let id = grp.replace(/ /g, "");
	let check = document.getElementById(id);
	
	if(check){
		console.log("exists");
		check.appendChild(container);
	}
	else{
		group.setAttribute("id", id);
		group.appendChild(title);
		group.appendChild(container);
		let mainContainer = document.getElementById("match");
		mainContainer.appendChild(group);
	}
}

function openNews(index){
	closeVol2();
	closeVol3();
	document.getElementById("openButton2").style.visibility="hidden";
	document.getElementById("openButton3").style.visibility="hidden";
	document.getElementById("volet4").style.display="none";
	
	document.getElementById("News-Ads").style.display="block";
	
	let news = document.getElementsByClassName("news");
	for(let i = 0; i<news.length; i++){
		news[i].style.display = "none";
	}
	
	switch(index){
		case 1:
			document.getElementById("news1").style.display="flex";
			console.log("News " + index + "launched");
			break;
		case 2:
			document.getElementById("news2").style.display="flex";
			console.log("News " + index + "launched");
			break;
		case 3:
			document.getElementById("news3").style.display="flex";
			console.log("News " + index + "launched");
			break;
		case 4:
			document.getElementById("news4").style.display="flex";
			console.log("News " + index + "launched");
			break;
	}
	
}

function openAds(index){
	closeVol2();
	closeVol3();
	document.getElementById("openButton2").style.visibility="hidden";
	document.getElementById("openButton3").style.visibility="hidden";
	document.getElementById("volet4").style.display="none";
	
	document.getElementById("News-Ads").style.display="block";
	
	switch(index){
		case 1:
			console.log("Ad " + index + "launched");
			break;
		case 2:
			console.log("Ad " + index + "launched");
			break;
		case 3:
			console.log("Ad " + index + "launched");
			break;
		case 4:
			console.log("Ad " + index + "launched");
			break;
		case 5:
			console.log("Ad " + index + "launched");
			break;
		case 6:
			console.log("Ad " + index + "launched");
			break;
		case 7:
			console.log("Ad " + index + "launched");
			break;
		case 8:
			console.log("Ad " + index + "launched");
			break;
		case 9:
			console.log("Ad " + index + "launched");
			break;
		case 10:
			console.log("Ad " + index + "launched");
			break;
	}
	
}

