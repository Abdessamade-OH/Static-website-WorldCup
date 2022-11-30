class Joueur{
    constructor(Nom, Poste, Age, Taille, Numero){
        this.Nom=Nom;
        this.Poste=Poste;
        this.Age=Age;
        this.Taille=Taille;
        this.Numero=Numero;
    }
}
class Manager{
    constructor(Nom, Age,Description){
        this.Nom=Nom;
        this.Age=Age;
        this.Description=Description;
    }
}
class Team{
    constructor(Nom, Dreapeau){
        this.Nom=Nom;
        this.Dreapeau=Dreapeau;
    }
}
var Maroc_e = new Manager("Hoalid RAGRAGI",42);
var Maroc = [];

// morrocain national team player
{ 
Maroc.push(new Joueur("Yassine BONO ","GK",30,189));
Maroc.push(new Joueur("Achraf HAKIMI","DD",19,182));
Maroc.push(new Joueur("Naif AGUERD","DC",25,179));
Maroc.push(new Joueur("Rouman SAISS","DC",32,179));
Maroc.push(new Joueur("Nousair MEZRAOUI","DG",26,179));
Maroc.push(new Joueur("Soufiane AMRABET","MDC",27,179));
Maroc.push(new Joueur("Azzdine OUNAHI","MOC",23,175));
Maroc.push(new Joueur("Salim AMELAH","MOC",19,179));
Maroc.push(new Joueur("Hakim ZIYECH","AG",28,179));
Maroc.push(new Joueur("Youssef EN-NSIRI","AT",24,179));
Maroc.push(new Joueur("Soufiane BOUFAL","AD",29,175));
Maroc.push(new Joueur("Ahmed-Reda TAGNAOUTI","GK",22,192));
Maroc.push(new Joueur("Mounir MOHAMDI","GK",32,189));
Maroc.push(new Joueur("Yahya ATIAT-ALAH","DD",27,184));
Maroc.push(new Joueur("Badr BANOUN","DC",29,179));
Maroc.push(new Joueur("Jawad AL-YAMIQ","DC",29,179));
Maroc.push(new Joueur("Achraf DARI","DC",29,179));
Maroc.push(new Joueur("Abdelhamide SABIRI","MDC",23,183));
Maroc.push(new Joueur("Ilias CHAIR","MOC",23,183));
Maroc.push(new Joueur("Bilal EL KHANNOUS ","MOC",18,180));
Maroc.push(new Joueur("Yahya JABRANE","MDC",31,187));
Maroc.push(new Joueur("Walid CHEDDIRA","AT",31,187));
Maroc.push(new Joueur("Abderrazak HAMDALLAH","AT",32,179));
Maroc.push(new Joueur("Zakaria ABOUKHLAL","AD",22,179));
Maroc.push(new Joueur("EZ ABDE","AD",22,175));
}


function showteam(){ // remplissage volet 2 
    
    
    let x = document.querySelector( ".remplacement ul "); // la liste des remplacement 
    let y = document.querySelector(".titulaire");
    let z = document.querySelector(" .left .left-card");
    x.innerHTML="";
    y.innerHTML="";
    z.innerHTML="<img src='./data/user.png'>"+
    "<h3>"+Maroc_e.name+"</h3>"
    "<h4>Age:" +Maroc_e.Age +"</h4>";

    for(let i=11;i<Maroc.length;i++){
        let li = document.createElement("li");
        li.innerHTML="<span onclick='fct3()'>"+Maroc[i].Nom+" "+'<span class="poste">'+Maroc[i].Poste+'</span></span>';
        x.appendChild(li);
    }
    for(let i=0;i<11;i++){
        let span=document.createElement("a");
        span.innerHTML="<span onclick='fct3()'>"+Maroc[i].Nom+" "+'<span class="poste">'+Maroc[i].Poste+'</span>';
        
        span.className="titulaire_j";
        y.appendChild(span);
    }
    
    let name = document.createElement("h3");
    name.innerHTML=Maroc_e.Nom;
    let age = document.createElement("h4");
    let pic =document.createElement("img");
    pic.src="./data/hoalid.png";
    age.innerHTML="Age :"+Maroc_e.Age;
    z.appendChild(pic);
    z.appendChild(name);
    z.appendChild(age);}
    

function fct2(event){
    

}
function fct3(event){
    const a=event.target.value;
    console.log(a);
    alert("fiche tech !");
}
function addgrp(){
    
}