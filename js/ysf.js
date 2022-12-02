class Joueur {
	constructor(Nom, Poste, Age, Taille, Numero, pic) {
		this.pic="./data/usr.png";
		this.Nom = Nom;
		this.Poste = Poste;
		this.Age = Age;
		this.Taille = Taille;
		this.Numero = Numero;
		if(pic!=null)
		this.pic = pic;
	}
}
class Manager {
	constructor(Nom, Age, pic, caption,teamNbr ,Description,Nation) {
		this.pic="./data/user.png";
		this.Nom = Nom;
		this.Age = Age;
		if(pic!=null)
		this.pic = pic;
		this.Description = Description;
		this.caption = caption;
		this.teamNbr = teamNbr;
		this.Nation=Nation
	}
}

var Teams = [];
// morrocain national team player
{
	
	Teams.push(Team1 = [])
	Teams[0].push(new Manager("Hoalid RAGRAGI", 42,"./data/Walid.png","Atlas Lions, fearless and victorious !",0,"titulaire de 2 botola maroccaine et une ligue des chamipns avec les pd","🇲🇦Maroc"));
	Teams[0].push(new Joueur("Yassine BONO ", "GK", 30, 189, 1,"./IMG/bono.webp"));
	Teams[0].push(new Joueur("Achraf HAKIMI", "DD", 19, 182, 2,"./IMG/hakimi.webp"));
	Teams[0].push(new Joueur("Naif AGUERD", "DC", 26, 179, 4,"./IMG/agreud.webp"));
	Teams[0].push(new Joueur("Rouman SAISS", "DC", 32, 179, 5,"./IMG/saiss.webp"));
	Teams[0].push(new Joueur("Nousair MEZRAOUI", "DG", 26, 179, 3,"./IMG/mazraoui.webp"));
	Teams[0].push(new Joueur("Soufiane AMRABET", "MDC", 27, 179, 6,"./IMG/amrabet.webp"));
	Teams[0].push(new Joueur("Azzdine OUNAHI", "MOC", 23, 175, 8,"./IMG/ONAHI.webp"));
	Teams[0].push(new Joueur("Salim AMELAH", "MOC", 29, 179, 12,"./IMG/AMALAH.webp"));
	Teams[0].push(new Joueur("Hakim ZIYECH", "AG", 28, 179, 7,"./IMG/ZIYACH.webp"));
	Teams[0].push(new Joueur("Youssef EN-NSIRI", "AT", 24, 179, 9,"./IMG/NESYRI.webp"));
	Teams[0].push(new Joueur("Soufiane BOUFAL", "AD", 29, 175, 23,"./IMG/BOUFOL.webp"));
	Teams[0].push(new Joueur("Ahmed-Reda TAGNAOUTI", "GK", 22, 192, 33));
	Teams[0].push(new Joueur("Mounir MOHAMDI", "GK", 32, 189, 14));
	Teams[0].push(new Joueur("Yahya ATIAT-ALAH", "DD", 27, 184, 21));
	Teams[0].push(new Joueur("Badr BANOUN", "DC", 28, 179, 18));
	Teams[0].push(new Joueur("Jawad AL-YAMIQ", "DC", 29, 179, 20));
	Teams[0].push(new Joueur("Achraf DARI", "DC", 25, 179, 21));
	Teams[0].push(new Joueur("Abdelhamide SABIRI", "MDC", 23, 183, 11));
	Teams[0].push(new Joueur("Ilias CHAIR", "MOC", 23, 183, 26));
	Teams[0].push(new Joueur("Bilal EL KHANNOUS ", "MOC", 18, 180, 10));
	Teams[0].push(new Joueur("Yahya JABRANE", "MDC", 29, 187, 22));
	Teams[0].push(new Joueur("Walid CHEDDIRA", "AT", 21, 187));
	Teams[0].push(new Joueur("Abderrazak HAMDALLAH", "AT", 32, 179));
	Teams[0].push(new Joueur("Zakaria ABOUKHLAL", "AD", 24, 179));
	Teams[0].push(new Joueur("EZ ABDE", "AD", 21, 175));
}



function showTeam(event) {
	let a = event.target.value;
	let arr = [];
	arr=Teams[a];
	let x = document.getElementById("Main_players");
	let y = document.getElementById("Sub_players");
	let z = document.getElementById("left-card");
	x.innerHTML = "";
	y.innerHTML = "";
	z.innerHTML = "";
	for (let i = 1; i < 12; i++) {
		let li = document.createElement("li");
		li.innerHTML = '<span class="role">' + arr[i].Poste + '</span><span>' + arr[i].Nom + '</span></span><span>'+arr[i].Numero+'</span></li>';
		x.appendChild(li);
	}
	for (let i = 12; i < arr.length; i++) {
		let li = document.createElement("li");
		li.innerHTML = '<span class="role">' + arr[i].Poste + '</span><span>' + arr[i].Nom + '</span></span><span>'+arr[i].Numero+'</span></li>';
		y.appendChild(li);
	}
	let caption = document.getElementById("team-info");
	let name = document.createElement("h3");
	let age = document.createElement("h4");
	let pic = document.createElement("img");
	let title=document.querySelector("#team-title .flag");
	let tableau = document.getElementById("table");
	name.innerHTML = arr[0].Nom;
	pic.src = arr[0].pic;
	age.innerHTML = "Age :" + arr[0].Age;
	z.appendChild(pic);
	z.appendChild(name);
	z.appendChild(age);
	tableau.innerHTML='<tr>	<th>picture</th><th>#</th><th>Nom</th><th>Gestion</th></tr>'
	for (let index = 1; index < arr.length; index++) {
		let tc = document.createElement("tr");
		tc.setAttribute("value",index);
		let pic = document.createElement("img");
		pic.src = arr[index].pic;
		tc.innerHTML='<th><img src="'+arr[index].pic+'" alt="player image"></th><th>'+arr[index].Numero+'</th><th>'+arr[index].Nom+'</th><th><button onclick="formTab()">Editer</button><button>Modifier</button><button onclick="delPlayer(event)">Supprimer</button></th> '
		tableau.appendChild(tc);
	}
	let play=document.getElementsByClassName("player");
	for (let index = 1; index < 12; index++) {
		play[index-1].innerHTML='<span>'+arr[index].Nom+'</span> <div class="min-card"><img src="'+arr[index].pic+'" alt="player image" /> <h3>'+arr[index].Nom+'</h3><h4>Age: '+arr[index].Age+'</h4> </div>';
	}
	caption.innerHTML=arr[0].caption;
	title.innerHTML=arr[0].Nation.substring(0, 4);
}
function createTeam(event){
	
	let x = event.target.parentElement;
	Teams.push(Team2=[]);
	Team2.push(new Manager("Nom entraineur", 50,"./data/user.png","Croyons en nos ambitions",Teams.length-1,"palmares",'Equipe'+parseInt(Teams.length-1 )));
	for (let index = 1; index < 27; index++) {
		Team2.push(new Joueur("Player "+index,"PLY",25,180,index));
	}
	let li = document.createElement("li");
	li.setAttribute("onclick","showTeam(event)");
	li.setAttribute("value",parseInt(Teams.length-1));
	li.innerHTML='🇸🇦Equipe<button class="modify" onclick="modifyTeam(event)">Modifier</button><button class="modify" onclick="del(event)">supprimé</button>'
	Team2[0].Nation="🇸🇦Equipe";
	x.appendChild(li)
}

function modifyTeam(event){
	
	document.getElementById("modify").style.display="block";
	let a = event.target.parentElement;

	document.getElementById("mod").addEventListener("click",function add32(){
		a.innerHTML= document.getElementById("nationSelector").value+' <button class="modify" onclick="modifyTeam(event)">Modifier</button> <button class="modify" onclick="del(event)">supprimé</button>';
		document.getElementById("team-title").innerHTML='<h1>'+document.getElementById("nationSelector").value+'</h1>';
		Teams[a.value][0].Nation=document.getElementById("nationSelector").value[0];
		document.getElementById("modify").style.display="none";
	
	});
	event.preventDefault();
}
function del(event){
	let a = event.target.parentElement.value;
	event.target.parentElement.remove();
	let arr = [];
	array = Teams[a];
	for (let index = 0; index < array.length; index++) {
		array.pop();
	}
	let caption = document.getElementById("team-info");
	let title=document.querySelector("#team-title .flag");
	let play=document.getElementsByClassName("player");
	let x = document.getElementById("Main_players");
	let y = document.getElementById("Sub_players");
	let z = document.getElementById("left-card");
	x.innerHTML = "";
	y.innerHTML = "";
	z.innerHTML = "";
	title.innerHTML="";
	caption.innerHTML="";
	for (let index = 1; index < 12; index++) {
		play[index-1].innerHTML="";
	}
	
	event.preventDefault();
}
function delPlayer(event){
	let a=event.target.parentElement.parentElement;
	let x=a.value;
	a.remove();
}
function addPlayer(){
	

}
