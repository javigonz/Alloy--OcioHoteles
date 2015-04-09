var managment_View = require('managment_View');
var managment_Data = require('managment_Data');
var MapModule = require('ti.map');

show();


/* ***********************************************************
 * Public functions
 * ***********************************************************/


/* ***********************************************************
 * Private functions
 * ***********************************************************/


function show(){

	Alloy.Globals.ActualContainer = $.viewContainer;
	Alloy.Globals.Header.children[0].children[1].text = L('text_17');
	
	//Ti.App.fireEvent('closeLoading');
	
	if (Ti.Platform.osname == "iphone")
	{			
		createMapModule();
	}
	else
	{
		var rc = MapModule.isGooglePlayServicesAvailable();
		switch (rc) {
		    case MapModule.SUCCESS:
		        Ti.API.info('Google Play services is installed.');
		        createMapModule();
		        break;
		    case MapModule.SERVICE_MISSING:
		        Ti.API.info('SERVICE MISSING');
		        Ti.App.fireEvent('closeLoading');
		        break;
		    case MapModule.SERVICE_VERSION_UPDATE_REQUIRED:
		        Ti.API.info('SERVICE_VERSION_UPDATE_REQUIRED');
		        Ti.App.fireEvent('closeLoading');
		        break;
		    case MapModule.SERVICE_DISABLED:
		        Ti.API.info('SERVICE_DISABLED');
		        Ti.App.fireEvent('closeLoading');
		        break;
		    case MapModule.SERVICE_INVALID:
		        Ti.API.info('SERVICE_INVALID');
		        Ti.App.fireEvent('closeLoading');
		        break;
		    default:
		        Ti.API.info('DEFAULT');
		        Ti.App.fireEvent('closeLoading');
		        break;
		}
	}
	
}



function createMapModule()
{
	
	
	var empresa1 = MapModule.createAnnotation({
	    latitude: 36.737341,
	    longitude: -4.553920,
	    pincolor: MapModule.ANNOTATION_AZURE,
	    //leftView: Ti.UI.createButton({title: 'Detail'}),
	    //rightButton: '/fotoCasa.png',    
	    title: 'BikeShop ',
	    subtitle: 'empresa de venta de bicis',
	    myid:1
	});

	var map1 = MapModule.createView({
	    mapType: MapModule.NORMAL_TYPE,
	    region: {latitude: 36.737341, longitude: -4.553920, latitudeDelta: 0.1, longitudeDelta: 0.1 },
	    userLocation: true,
	    animate: true,
	    pitchEnabled: true,
        rotateEnabled: true,
        showsBuildings: true,
        showsPointsOfInterest: true,
	    annotations: [empresa1]
	});
	
	
	//
	// LISTENERS
	//
	map1.addEventListener('complete', function(e){
	   // Ti.API.info(e.type);
	    Ti.App.fireEvent('closeLoading');
	});
	
	map1.addEventListener('click', function(evt) {
	    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
	});
	
	$.viewContainer.add(map1);
	
	

}
