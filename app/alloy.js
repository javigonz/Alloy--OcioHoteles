
//Some variables necessary for navigation between sections
Alloy.Globals.viewContainerPrincipal;
Alloy.Globals.mainContainer;
Alloy.Globals.WinInitContainer;
Alloy.Globals.ViewActive = [];
Alloy.Globals.ActualContainer;
Alloy.Globals.ActualSection;
Alloy.Globals.IsLoading;
Alloy.Globals.MenuOpen;
Alloy.Globals.Header;
Alloy.Globals.Menu;

//Measures views
Alloy.Globals.Height_Header = 50;


//Colors
Alloy.CFG.WHITE	 		= "#FFFFFF";
Alloy.CFG.GREEN	 		= "#90c900";
Alloy.CFG.BLACK	 		= "#000000";
Alloy.CFG.BLUE1	 		= "#006da9";
Alloy.CFG.RED	 		= "#dd211c";
Alloy.CFG.GREY1	 		= "#909090";
Alloy.CFG.GREY2	 		= "#b2b2b2";
Alloy.CFG.GREY3	 		= "#f2f2f2";
Alloy.CFG.GREY4	 		= "#e2e2e2";
Alloy.CFG.GREY5	 		= "#696969";
Alloy.CFG.GREY6	 		= "#7f7f7f";
Alloy.CFG.GREY7	 		= "#dfdfdf";


//Device height&width
Alloy.CFG.WidthDeviceIphone      = Ti.Platform.displayCaps.platformWidth;
Alloy.CFG.WidthDeviceAndroid     = Ti.Platform.displayCaps.platformWidth / (Titanium.Platform.displayCaps.dpi / 160);
Alloy.CFG.HeightDevice           = Ti.Platform.displayCaps.platformHeight / (Titanium.Platform.displayCaps.dpi / 160);
Alloy.CFG.HeightDeviceIphone     = Ti.Platform.displayCaps.platformHeight;


//Fonts
if(Ti.Platform.osname === 'android') {
	Alloy.CFG.ARIAL_NORMAL = 'Arial';
}
else{
	Alloy.CFG.ARIAL_NORMAL = 'ArialMT';
}


/////////////////////////////////////////////////////////////// Data Models and Collections //////////////////////

//Alloy.Collections.model_hotels = Alloy.createCollection('model_hotels');
var datamodel_Login = [];
var datamodel_CloseSession = [];
var datamodel_Search_countries = [];
var datamodel_Search_destinySpain = [];
var datamodel_Search_zonesSpain = [];
var datamodel_Search_destinies = [];
var datamodel_Search_hotelsCategories = [];

Alloy.Collections.model_hotels = [];

