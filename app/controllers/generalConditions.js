var managment_View = require('managment_View');

if (Ti.Platform.osname === "android")
	var Animator = require('com.animecyc.animator'); //Solo para Android


var capabilities = Titanium.Platform.displayCaps.dpi / 160;

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
	
	Alloy.Globals.Header.children[0].children[1].text = L('text_3');

}





/* ***********************************************************
 * Handler functions
 * ***********************************************************/

