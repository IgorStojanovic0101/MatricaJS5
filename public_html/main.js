window.onload = function()
{
var parcela = new Parcela(3,6);

    for(var j=0;j<6;j++)
	{
	var suncokret = new Biljka("Suncokret","S",1,"yellow");
	parcela.dodajBiljku(suncokret,0,j);
	}
	 for(var j=0;j<6;j++)
	{
	var suncokret = new Biljka("Jagoda","J",7,"red");
	parcela.dodajBiljku(suncokret,1,j);
	}
	 for(var j=0;j<6;j++)
	{
	var suncokret = new Biljka("Kupina","K",3,"blue");
	parcela.dodajBiljku(suncokret,2,j);
	}
parcela.crtajParcelu(document.getElementById("main"));
	
}