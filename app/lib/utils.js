//Some utilities method 


var Alloy = require('alloy');


//Remove and clean memory all children in a view
exports.removeAllChildren = function(viewObject) {
    var children = viewObject.children.slice(0);
 
    for (var i = 0; i < children.length; ++i) {
        viewObject.remove(children[i]);
        children[i] = null;
    }
};



exports.strNormalize = function(str){
	
	
	var caracteres = new Array();
	
	var pares = new Object();
	pares.str1 = "&aacute;";
	pares.str2 = "á";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&Aacute;";
	pares.str2 = "Á";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&eacute;";
	pares.str2 = "é";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&Eacute;";
	pares.str2 = "É";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&iacute;";
	pares.str2 = "í";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&Iacute;";
	pares.str2 = "Í";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&oacute;";
	pares.str2 = "ó";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&Oacute;";
	pares.str2 = "Ó";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&uacute;";
	pares.str2 = "ú";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&Uacute;";
	pares.str2 = "Ú";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&ntilde;";
	pares.str2 = "ñ";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&Ntilde;";
	pares.str2 = "Ñ";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&nbsp;";
	pares.str2 = " ";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&iquest;";
	pares.str2 = "¿";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&ordm;";
	pares.str2 = "º";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&euro;";
	pares.str2 = "€";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&reg;";
	pares.str2 = "®";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&quot;";
	pares.str2 = "'";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&#x00a1;";
	pares.str2 = "¡";
	caracteres.push(pares);
	
	var pares = new Object();
	pares.str1 = "&iexcl;";
	pares.str2 = "¡";
	caracteres.push(pares);


	for (var i = 0; i<=caracteres.length-1; i++)
	{
		str = str.split(caracteres[i].str1).join(caracteres[i].str2);
	}
	
	return str;
};
