var managment_View = require('managment_View');

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

	var miniTimer = setTimeout(function () {
					clearInterval( miniTimer );
			        Ti.App.fireEvent('closeLoading');
	}, 2000);
	
	Alloy.Globals.Header.children[0].children[1].text = L('text_4');

}


/* ***********************************************************
 * Handler functions
 * ***********************************************************/