var geel = prompt("Is de kaas geel?");

	if (geel == "ja") {
	var gaten = prompt("Zitten er gaten in?");
	}
	else if (geel == "nee"){
		var schimmel = prompt ("Bevat de kaas blauwe schimmel");
	}
		if (schimmel == "ja"){
			var schimmelkorst = prompt ("Zit er korst op de kaas");
		}
		else if (schimmel == "nee"){
			var korst = prompt ("Heeft de kaas een korst");
		}
			if (schimmelkorst == "ja"){
				alert ("Alstublieft 1 Bleu de Rochbaron");
			}
		
	
	if (gaten == "ja") {
		var duur = prompt("Is de kaas belachelijk duur");
	}
	else if (gaten == "nee"){
		var hard = prompt("Is de kaas zo hard als steen")
	}
	if (hard == "ja"){
		alert("Alstublieft 1 Parmigano regimaino")
		}
		else if (hard == "nee"){
			alert("Alstublieft 1 goudse kaas")
		}
	
	if (duur == "ja") {
			alert ("Alstublieft 1 Emmenthaler");
		}
		else if (duur == "nee"){
			alert("Alstublieft 1 Leerdammer");
		
	}
	else{
		alert("vul aub ja of nee in ZONDER HOOFDLETTERS")
	}	


