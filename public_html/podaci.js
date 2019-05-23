function Biljka(naziv,oznaka,brBerbi,boja){
var that = this;
this.brBerbi = brBerbi;
this.oznaka = oznaka;
this.naziv = naziv;
this.boja = boja;

(function(){
if(that.naziv == null || that.naziv == undefined || that.naziv === ""){
that.naziv = "Nepoznat";
}
})();
}
function Parcela(n,m){

var that = this;
this.n = n;
this.m = m;

this.biljke = [];
for(var i=0;i<n;i++){
that.biljke[i] = [];
}
this.dodajBiljku = function(biljka,i,j)
{
that.biljke[i][j]= biljka;
}

this.crtajParcelu = function(host)
{
var levi = document.createElement("div");
levi.className = "Levi";
host.appendChild(levi);

var desni = document.createElement("div");
desni.className = "Desni";
host.appendChild(desni);

for(var i=0;i<that.n ;i++)
{
var red = document.createElement("div");
red.className = "Red";
levi.appendChild(red);

for(var j=0;j<that.m;j++)
	{
	var biljka = document.createElement("div");
	biljka.className = "Biljka";
	
	biljka.innerHTML = that.biljke[i][j].oznaka;
	biljka.style.backgroundColor = that.biljke[i][j].boja;
	biljka.dataset.posX = i;
	biljka.dataset.posY = j;
        biljka.dataset.nekibroj="MSG";
           
	red.appendChild(biljka);
	
	biljka.ref = that.biljke[i][j];
        
	
biljka.onclick = function()
{
var b = this.ref;
//console.log(this);

if(b.brBerbi > 0)
{
b.brBerbi--;
var des = document.querySelector(".Desni");
var lab = document.createElement("label");
//console.log(this.getAttribute("data-pos-x"));
//var name = this.getAttribute("data-name");
var x = parseInt(this.getAttribute("data-pos-x"))+1;
var y = parseInt(this.getAttribute("data-pos-y"))+1;
var broj = this.getAttribute("data-nekibroj");

lab.innerHTML = "Parcela: ["+x+","+y +"] Preostalo berbi: "+b.brBerbi+" Onaj broj"+broj+"<br>"; 
des.appendChild(lab);

}
if(b.brBerbi == 0){
this.style.backgroundColor = "white";
this.innerHTML = "";
//this.ref = null;
}

}	
	
	}
	
}
    
	
}

}