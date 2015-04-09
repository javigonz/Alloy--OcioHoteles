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

	Alloy.Globals.ActualContainer = $.viewContainer;
	Alloy.Globals.Header.children[0].children[1].text = L('text_17');
	
	loadHotelDetail();

}

function loadHotelDetail(e) {
	

		////////////////////////Estilos
		var title = $.createStyle({classes: ['title']});
		var address = $.createStyle({classes: ['address']});
		var textBold = $.createStyle({classes: ['textBold']});
		var imageDescription = $.createStyle({classes: ['imageDescription']});
		var textDescription = $.createStyle({classes: ['textDescription']});
		var viewOffer = $.createStyle({classes: ['viewOffer']});
		var buttonOffer = $.createStyle({classes: ['buttonOffer']});
		var line = $.createStyle({classes: ['line']});
		var textOffer = $.createStyle({classes: ['textOffer']});
		var viewHorizontal = $.createStyle({classes: ['viewHorizontal']});
		var textOfferPrice1 = $.createStyle({classes: ['textOfferPrice1']});
		var textOfferPrice2 = $.createStyle({classes: ['textOfferPrice2']});
		var textOfferPrice3 = $.createStyle({classes: ['textOfferPrice3']});
		var styleViewCarrusel = $.createStyle({classes: ['styleViewCarrusel']});
		var styleViewCarruselImage = $.createStyle({classes: ['styleViewCarruselImage']});

		var labelTitle = Ti.UI.createLabel(
		{
		  	text: 	Alloy.Collections.model_hotels.result[0].nombre
		});
		labelTitle.applyProperties(title);
		  	
		var labelAddress = Ti.UI.createLabel(
		{
		  	text: 	Alloy.Collections.model_hotels.result[0].address
		});
		labelAddress.applyProperties(address);
		
		var labelgoogleMap = Ti.UI.createLabel(
		{
		  	text: 	L('text_18')
		});
		labelgoogleMap.applyProperties(textBold);
		labelgoogleMap.addEventListener('click', handlerMap);
		
		  	
		var viewCarrusel = Ti.UI.createView({});
		viewCarrusel.applyProperties(styleViewCarrusel); 
		
		
		var view1 = Ti.UI.createView({});
		view1.applyProperties(styleViewCarruselImage);
		var view2 = Ti.UI.createView({});
		view2.applyProperties(styleViewCarruselImage);
		var view3 = Ti.UI.createView({});
		view3.applyProperties(styleViewCarruselImage);
		
		var imageView1 = Ti.UI.createImageView({
		  	image:          '/fotoCasa.png',
		  	defaultImage:   '/images/download.png' 
		});
		imageView1.applyProperties(imageDescription);
		view1.add(imageView1);
		
		
		var imageView2 = Ti.UI.createImageView({
		  	image:          '/fotoCasa2.jpg',
		  	defaultImage:   '/images/download.png' 
		});
		imageView2.applyProperties(imageDescription);
		view2.add(imageView2);
		
		var imageView3 = Ti.UI.createImageView({
		  	image:          '/fotoCasa3.jpg',
		  	defaultImage:   '/images/download.png' 
		});
		imageView3.applyProperties(imageDescription);
		view3.add(imageView3);
		
		var viewScroll = Ti.UI.createScrollableView({
			views:[view1,view2,view3],
  			showPagingControl:false
		}); 
		
		var labelDescription = Ti.UI.createLabel(
		{
		  	text: 	Alloy.Collections.model_hotels.result[0].descripcion
		});
		labelDescription.applyProperties(textDescription);
		  	
		  	
		$.viewContainer.add(labelTitle);
		$.viewContainer.add(labelAddress);
		$.viewContainer.add(labelgoogleMap);
		viewCarrusel.add(viewScroll);
		$.viewContainer.add(viewCarrusel);
		$.viewContainer.add(labelDescription);
		
		  	
		Alloy.Collections.model_hotels.result[0].ofertas.forEach(function (element2, index2, array2) {
		  		
		  		var view_Offer = Ti.UI.createView({});
		  		view_Offer.applyProperties(viewOffer);
		  		
		  		var buttonReserve = Ti.UI.createButton({
		  			title: L('text_16')
		  		});
		  		buttonReserve.applyProperties(buttonOffer);
		  		
		  		var textOffer1 = Ti.UI.createLabel({
		  			text: 'Sólo alojamiento - Dormitorio 4 Pax.'
		  		});
		  		textOffer1.applyProperties(textOffer);
		  		
		  		var viewPrice = Ti.UI.createView({});
		  		viewPrice.applyProperties(viewHorizontal);
		  		
		  		var textOffer2 = Ti.UI.createLabel({
		  			text: '19€'
		  		});
		  		textOffer2.applyProperties(textOfferPrice1);
		  		
		  		var textOffer3 = Ti.UI.createLabel({
		  			text: '(pers/día)'
		  		});
		  		textOffer3.applyProperties(textOfferPrice2);
		  		
		  		var textOffer4 = Ti.UI.createLabel({
		  			text: '195€'
		  		});
		  		textOffer4.applyProperties(textOfferPrice3);
		  		
		  		var textOffer5 = Ti.UI.createLabel({
		  			text: '(precio total)'
		  		});
		  		textOffer5.applyProperties(textOfferPrice2);
		  		
		  		
		  		viewPrice.add(textOffer2);
		  		viewPrice.add(textOffer3);
		  		viewPrice.add(textOffer4);
		  		viewPrice.add(textOffer5);

		  		view_Offer.add(buttonReserve);
		  		view_Offer.add(textOffer1);
		  		view_Offer.add(viewPrice);
		  		$.viewContainer.add(view_Offer);
		  		
		  	});	
		  	

			Ti.App.fireEvent('closeLoading');
	
}





/* ***********************************************************
 * Handler functions
 * ***********************************************************/

function handlerMap(e){
	
	managment_View.OpenSectionParam('hotelMap',[]);
}
