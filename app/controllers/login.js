var managment_View = require('managment_View');
var managment_Data = require('managment_Data');

var utils = require('utils');
var validate = require('hdjs.validate');
var validator = new validate.FormValidator();

show();



/* ***********************************************************
 * Public functions
 * ***********************************************************/


/* ***********************************************************
 * Private functions
 * ***********************************************************/


function show(){


	//Añado el container actual al objeto de navegación
	Alloy.Globals.ActualContainer = $.viewContainer;
	Alloy.Globals.ActualSection = 'login';
	
	Ti.App.fireEvent('closeLoading');
	
}


function validateForm() {
	validator.run([
				{
					id: 'loginName',
				    value: $.id_comboUser.value,
				    display: L('text_5'),    
				    rules: 'required'
				},
				
				{
					id: 'loginPass',
				    value: $.id_comboPass.value,
				    display: L('text_6'),    
				    rules: 'required'
				}
				
				
			], validationCallback);	
};

var validationCallback = function(errors) {
	if(errors.length > 0) {
		for (var i = 0; i < errors.length; i++) {
			Ti.API.debug(errors[i].message);
		}
		//Muestra la pantalla de Info con los errores
		Ti.App.fireEvent('closeLoading');
		managment_View.OpenInfoWindow(errors[0].message);

		
	} 
	else 
	{
		Ti.App.fireEvent('openLoading');
		Ti.App.addEventListener('loadDataLogin', validateUser);
		managment_Data.LoadWebService_Login($.id_comboUser.value, $.id_comboPass.value);
	}
};


function validateUser(){
	
	Ti.App.removeEventListener('loadDataLogin', validateUser);

	if (datamodel_Login.result === 'ok')
	{
		managment_View.OpenSectionParam('search',[]);
	}
	else
	{
		managment_View.OpenInfoWindow( L('text_20'));
		Ti.App.fireEvent('closeLoading');
	}
	
	
}


/* ***********************************************************
 * Handler functions
 * ***********************************************************/

function handler_login(e){
	
	//validateForm();
	managment_View.OpenSectionParam('search',[]);
	
}

function handler_goToWeb(e){
	
	Ti.Platform.openURL("http://www.ociohoteles.com/es/clientes");
	
}
