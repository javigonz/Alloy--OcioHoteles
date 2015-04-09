var managment_View = require('managment_View');
var managment_Data = require('managment_Data');

show();



/* ***********************************************************
 * Public functions
 * ***********************************************************/


/* ***********************************************************
 * Private functions
 * ***********************************************************/


function show(){
	
	//Add the actual view container
	Alloy.Globals.ActualContainer = $.viewContainer;
	
	Alloy.Globals.Header.children[0].children[1].text = L('text_2');

	Ti.App.fireEvent('closeLoading');
}




/* ***********************************************************
 * Handler functions
 * ***********************************************************/

function gotoSearch(e){
	
	managment_View.OpenSectionParam('searchReady',[]);
	
}
