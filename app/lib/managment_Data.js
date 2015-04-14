//Manejador de la carga de datos dinámicos (WebServices)

var managment_View = require('managment_View');


//SERVIDOR DE DESARROLLO
var url_WebService_Login = "http://desarrollo.ociohoteles.com/webService.php";

//SERVIDOR DE PRODUCCIÓN

 var fileJson = {
						    "code": "1",
						    "result": [
						        {
						            "id": "1",
						            "nombre": "Hotel Mojacar",
						            "address": "Carboneras (Almería)",
						            "descripcion_corta": "Este complejo de apartamentos se encuentra en la zona de ocio de la playa de Mojácar, a tan sólo ...",
						            "descripcion": "<p><strong>orem Ipsum</strong>&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas &quot;Letraset&quot;, las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>\r\n",
						            "ofertas":[{'precio':'1'},{'precio':'2'}]
						        },
						        {
						            "id": "2",
						            "nombre": "Hotel Katacroker",
						            "address": "Fuengirola (Málaga)",
						            "descripcion_corta": "Este complejo de apartamentos se encuentra easfdsfass sfds s dsaf asd fdsf dsfds ads ds afdsf  ...",
						            "descripcion": "<p><strong>orem Ipsum</strong>&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas &quot;Letraset&quot;, las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>\r\n",
						            "ofertas":[{'precio':'1'}]
						        }
						        ]};



//************************************************************************************************************************
//Carga WEBSERVICE de Login en la app
//************************************************************************************************************************
exports.LoadWebService_Login = function(dataUser, dataPassword){
	
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	     				  
			 try{
			         datamodel_Login = JSON.parse (this.responseText);
			 		 Ti.App.fireEvent('loadDataLogin');
	     	 }
	     	 catch (e){
	     			 Ti.App.fireEvent('closeLoading');
	     			 managment_View.OpenInfoWindow( L('text_20'));
	     	 }
	     		
	     },
	     onerror : function(e) {
	         Ti.App.fireEvent('closeLoading');
	         managment_View.OpenInfoWindow( L('text_20'));
	     },
	     timeout : 5000  // in milliseconds
 	});
 	
    client.validatesSecureCertificate = false;

 	client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 	//client.setRequestHeader("Content-Type", "application/json; charset=utf-8");
 	

	var dataSend = {
			 			'method': 'login',
			    		'params': {
			    					'user': dataUser,
			    					'pass': dataPassword
			    				  }
			  	   };
			  	
			  	  			  
 	
 	client.open("POST", url_WebService_Login);
	client.send( {data:JSON.stringify(dataSend)});
	
};



//************************************************************************************************************************
//Carga WEBSERVICE de Cerrar Sesion
//************************************************************************************************************************
exports.LoadWebService_CloseSession = function(){
	
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	     	
	     		try{
			         datamodel_CloseSession = JSON.parse (this.responseText);
			         Ti.App.fireEvent('loadDataCloseSession');
	     		}
	     		catch (e){
	     			 Ti.App.fireEvent('closeLoading');
	     			 managment_View.OpenInfoWindow( L('text_20'));
	     		}
	        

	     },
	     onerror : function(e) {
	         Ti.App.fireEvent('closeLoading');
	         managment_View.OpenInfoWindow( L('text_20'));
	     },
	     timeout : 5000  // in milliseconds
 	});
 	
    client.validatesSecureCertificate = false;

 	client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 	

	var dataSend = {
			 			'method': 'close'
			  	   };
			  	
			  	  			  
 	
 	client.open("POST", url_WebService_Login);
	client.send( {data:JSON.stringify(dataSend)});
	
};



//************************************************************************************************************************
//Carga WEBSERVICE de cargar países de búsqueda
//************************************************************************************************************************
exports.LoadWebService_SearchLoadCountries = function(){
	
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	     	
	     		try{
			         datamodel_Search_countries = JSON.parse (this.responseText);
			         Ti.App.fireEvent('loadSearchCountries');
	     		}
	     		catch (e){
	     			 Ti.App.fireEvent('closeLoading');
	     			 managment_View.OpenInfoWindow( L('text_20'));
	     		}
	        

	     },
	     onerror : function(e) {
	         Ti.App.fireEvent('closeLoading');
	         managment_View.OpenInfoWindow( L('text_20'));
	     },
	     timeout : 5000  // in milliseconds
 	});
 	
    client.validatesSecureCertificate = false;

 	client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 	
	var dataSend = {
			 			'method': 'getPaises'
			  	   };
	
	client.open("POST", url_WebService_Login); 
	client.send( {data:JSON.stringify(dataSend)});
	
};




//************************************************************************************************************************
//Carga WEBSERVICE de cargar destinos de España
//************************************************************************************************************************
exports.LoadWebService_SearchLoadDestinySpain = function(){
	
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	     	
	     		try{
			         datamodel_Search_destinySpain = JSON.parse (this.responseText);
			         Ti.App.fireEvent('loadSearchDestinySpain');
	     		}
	     		catch (e){
	     			 Ti.App.fireEvent('closeLoading');
	     			 managment_View.OpenInfoWindow( L('text_20'));
	     		}
	        

	     },
	     onerror : function(e) {
	         Ti.App.fireEvent('closeLoading');
	         managment_View.OpenInfoWindow( L('text_20'));
	     },
	     timeout : 5000  // in milliseconds
 	});
 	
    client.validatesSecureCertificate = false;

 	client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 	
	var dataSend = {
			 			'method': 'getDestinos'
			  	   };
	
	client.open("POST", url_WebService_Login); 
	client.send( {data:JSON.stringify(dataSend)});
	
};




//************************************************************************************************************************
//Carga WEBSERVICE de cargar Zonas de España
//************************************************************************************************************************
exports.LoadWebService_SearchLoadZonesSpain = function(_id){
	
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	     	
	     		try{
			         datamodel_Search_zonesSpain = JSON.parse (this.responseText);
			         Ti.App.fireEvent('loadSearchZonesSpain');
	     		}
	     		catch (e){
	     			 Ti.App.fireEvent('closeLoading');
	     			 managment_View.OpenInfoWindow( L('text_20'));
	     		}
	        

	     },
	     onerror : function(e) {
	         Ti.App.fireEvent('closeLoading');
	         managment_View.OpenInfoWindow( L('text_20'));
	     },
	     timeout : 5000  // in milliseconds
 	});
 	
    client.validatesSecureCertificate = false;

 	client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 	
	var dataSend = {
			 			'method': 'getZonas',
			 			'params': {
			    					'id_destino': _id
			    				  }
			  	   };
	
	client.open("POST", url_WebService_Login); 
	client.send( {data:JSON.stringify(dataSend)});
	
};




//************************************************************************************************************************
//Carga WEBSERVICE de Destinos autocompletados para todos los países menos España
//************************************************************************************************************************
exports.LoadWebService_SearchLoadDestinies = function(value_search){
	
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	     	
	     		try{
			         datamodel_Search_destinies = JSON.parse (this.responseText);
			         Ti.App.fireEvent('loadSearchDestinies');
	     		}
	     		catch (e){
	     			 managment_View.OpenInfoWindow( L('text_20'));
	     		}
	        

	     },
	     onerror : function(e) {
	         managment_View.OpenInfoWindow( L('text_20'));
	     },
	     timeout : 5000  // in milliseconds
 	});
 	
    client.validatesSecureCertificate = false;

 	client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 	
	var dataSend = {
			 			'method': 'getDestinos'
			  	   };
	
	client.open("POST", url_WebService_Login); 
	client.send( {data:JSON.stringify(dataSend)});
	
};



//************************************************************************************************************************
//Carga WEBSERVICE de cargar destinos de España
//************************************************************************************************************************
exports.LoadWebService_SearchLoadHotelsCategories = function(){
	
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	     	
	     		try{
			         datamodel_Search_hotelsCategories = JSON.parse (this.responseText);
			         Ti.App.fireEvent('loadSearchHotelsCategories');
	     		}
	     		catch (e){
	     			 Ti.App.fireEvent('closeLoading');
	     			 managment_View.OpenInfoWindow( L('text_20'));
	     		}
	        

	     },
	     onerror : function(e) {
	         Ti.App.fireEvent('closeLoading');
	         managment_View.OpenInfoWindow( L('text_20'));
	     },
	     timeout : 5000  // in milliseconds
 	});
 	
    client.validatesSecureCertificate = false;

 	client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 	
	var dataSend = {
			 			'method': 'getCategorias'
			  	   };
	
	client.open("POST", url_WebService_Login); 
	client.send( {data:JSON.stringify(dataSend)});
	
};



//************************************************************************************************************************
//Carga WEBSERVICE de Agenda
//************************************************************************************************************************
exports.LoadWebService_Scheduler = function(){
	
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	     	
	     		try{
			        // var hotels = Alloy.Collections.model_hotels;
			        	        
					// hotels.add((JSON.parse (this.responseText)).result);
					 //hotels.add(fileJson.result);
					// hotels.fecth();
					
					Alloy.Collections.model_hotels = fileJson;
					Ti.App.fireEvent('loadHotels');
	     		}
	     		catch (e){
	     			
	     			 Ti.App.fireEvent('closeLoading');
	     			 Ti.API.info('Datos NO cargados 1 --> ' + e);
	     			 //managment_View.OpenInfoWindow( L('text_6'));
	     		}
	        

	     },
	     onerror : function(e) {
	         Ti.App.fireEvent('closeLoading');
	         Ti.API.info('Datos NO cargados 2');
	         //managment_View.OpenInfoWindow( L('text_6'));
	     },
	     timeout : 10000  // in milliseconds
 	});
 	
    client.validatesSecureCertificate = false;

 	client.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 	
 	client.open("POST", url_WebService_Scheduler);

	client.send();
	
	
};

