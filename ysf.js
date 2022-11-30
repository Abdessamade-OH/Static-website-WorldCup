class Joueur {
	constructor(Nom, Poste, Age, Taille, Numero, pic) {
		this.Nom = Nom;
		this.Poste = Poste;
		this.Age = Age;
		this.Taille = Taille;
		this.Numero = Numero;
		this.pic = pic
	}
}
class Manager {
	constructor(Nom, Age, pic, Description) {
		this.Nom = Nom;
		this.Age = Age;
		this.pic = pic
		this.Description = Description;
	}
}

var Teams = [];
// morrocain national team player
{
	
	Teams.push(Team1 = [])
	Teams[0].push(new Joueur("Hoalid RAGRAGI","", 42, 0, 0, "./data/Walid.png"));
	Teams[0].push(new Joueur("Yassine BONO ", "GK", 30, 189, 1));
	Teams[0].push(new Joueur("Achraf HAKIMI", "DD", 19, 182, 2));
	Teams[0].push(new Joueur("Naif AGUERD", "DC", 25, 179, 4));
	Teams[0].push(new Joueur("Rouman SAISS", "DC", 32, 179, 5));
	Teams[0].push(new Joueur("Nousair MEZRAOUI", "DG", 26, 179, 3));
	Teams[0].push(new Joueur("Soufiane AMRABET", "MDC", 27, 179, 6));
	Teams[0].push(new Joueur("Azzdine OUNAHI", "MOC", 23, 175, 8));
	Teams[0].push(new Joueur("Salim AMELAH", "MOC", 19, 179, 12));
	Teams[0].push(new Joueur("Hakim ZIYECH", "AG", 28, 179, 7));
	Teams[0].push(new Joueur("Youssef EN-NSIRI", "AT", 24, 179, 9));
	Teams[0].push(new Joueur("Soufiane BOUFAL", "AD", 29, 175, 23));
	Teams[0].push(new Joueur("Ahmed-Reda TAGNAOUTI", "GK", 22, 192, 33));
	Teams[0].push(new Joueur("Mounir MOHAMDI", "GK", 32, 189, 14));
	Teams[0].push(new Joueur("Yahya ATIAT-ALAH", "DD", 27, 184, 21));
	Teams[0].push(new Joueur("Badr BANOUN", "DC", 29, 179, 18));
	Teams[0].push(new Joueur("Jawad AL-YAMIQ", "DC", 29, 179, 20));
	Teams[0].push(new Joueur("Achraf DARI", "DC", 29, 179, 21));
	Teams[0].push(new Joueur("Abdelhamide SABIRI", "MDC", 23, 183, 11));
	Teams[0].push(new Joueur("Ilias CHAIR", "MOC", 23, 183, 26));
	Teams[0].push(new Joueur("Bilal EL KHANNOUS ", "MOC", 18, 180, 10));
	Teams[0].push(new Joueur("Yahya JABRANE", "MDC", 31, 187, 22));
	Teams[0].push(new Joueur("Walid CHEDDIRA", "AT", 31, 187));
	Teams[0].push(new Joueur("Abderrazak HAMDALLAH", "AT", 32, 179));
	Teams[0].push(new Joueur("Zakaria ABOUKHLAL", "AD", 22, 179));
	Teams[0].push(new Joueur("EZ ABDE", "AD", 22, 175));
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
	let name = document.createElement("h3");
	let age = document.createElement("h4");
	let pic = document.createElement("img");
	name.innerHTML = arr[0].Nom;
	pic.src = arr[0].pic;
	age.innerHTML = "Age :" + arr[0].Age;
	z.appendChild(pic);
	z.appendChild(name);
	z.appendChild(age);
}
function createTeam(event){
	console.log(11);
	let x = event.target.parentElement;
	Teams.push(Team2=[]);
	Team2.push(new Joueur("Lorem Ipsum ","",0,180,Teams.length-1,"./data/user.png"));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));
	Team2.push(new Joueur("Lorem Ipsum ","JR",0,180,99));	
	let li = document.createElement("li");
	li.setAttribute("onclick","showTeam(event)");
	li.setAttribute("value",parseInt(Teams.length-1));
	li.innerHTML='Equipe'
	x.appendChild(li)
}
