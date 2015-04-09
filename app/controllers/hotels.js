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
	Alloy.Globals.Header.children[0].children[1].text = L('text_15');
	
	Ti.App.addEventListener('loadHotels',loadHotels);
	//Alloy.Collections.model_hotels.reset();
	managment_Data.LoadWebService_Scheduler();

}

function loadHotels(e) {
	
	Ti.App.removeEventListener('loadHotels',loadHotels);
	
	if (Alloy.Collections.model_hotels.code == '1')
	{
		var rows = [];
		
		//Estilos
		var rowList = $.createStyle({classes: ['rowList']});
		var title = $.createStyle({classes: ['title']});
		var address = $.createStyle({classes: ['address']});
		var viewDescription = $.createStyle({classes: ['viewDescription']});
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
		var textUnderline = $.createStyle({classes: ['textUnderline']});
		var style_viewDetail = $.createStyle({classes: ['style_viewDetail']});
		var style_viewStar = $.createStyle({classes: ['style_viewStar']});
		var style_iconStar = $.createStyle({classes: ['style_iconStar']});
		
		Alloy.Collections.model_hotels.result.forEach(function (element, index, array) {
		  
		  	var tableViewRow = Ti.UI.createTableViewRow();
		  	tableViewRow.applyProperties(rowList);
		  	
		  	var labelTitle = Ti.UI.createLabel(
		  		{
		  			text: 	element.nombre
		  		}
		  	);
		  	labelTitle.applyProperties(title);
		  	
		  	var labelAddress = Ti.UI.createLabel(
		  		{
		  			text: 	element.address
		  		}
		  	);
		  	labelAddress.applyProperties(address);
		  	
		  	var view_Description = Ti.UI.createView({});
		  	view_Description.applyProperties(viewDescription);
		  	
		  	var imageView = Ti.UI.createImageView({
		  		image:          '/fotoCasa.png',
		  		defaultImage:   '/images/download.png' 
		  	});
		  	imageView.applyProperties(imageDescription);
		  	
		  	var viewDetail = Ti.UI.createView({});
		  	viewDetail.applyProperties(style_viewDetail);
		  	
		  	/*var labelDescription = Ti.UI.createLabel(
		  		{
		  			text: 	element.descripcion_corta
		  		}
		  	);
		  	labelDescription.applyProperties(textDescription);*/
		  	
		  	var viewStar = Ti.UI.createView({});
		  	viewStar.applyProperties(style_viewStar);
		  	
		  	var iconStar1 = Ti.UI.createImageView({
		  		image: '/images/icon_star.png'
		  	});
		  	iconStar1.applyProperties(style_iconStar);
		  	
		  	var iconStar2 = Ti.UI.createImageView({
		  		image: '/images/icon_star.png'
		  	});
		  	iconStar2.applyProperties(style_iconStar);
		  	
		  	var iconStar3 = Ti.UI.createImageView({
		  		image: '/images/icon_star.png'
		  	});
		  	iconStar3.applyProperties(style_iconStar);
		  	
		  	viewStar.add(iconStar1);
		  	viewStar.add(iconStar2);
		  	viewStar.add(iconStar3);
		  	
		  	var labelMore = Ti.UI.createLabel(
		  		{
		  			text: 	'Ver descripción completa'
		  		}
		  	);
		  	labelMore.applyProperties(textUnderline);
		  	labelMore.addEventListener('click', handler_detail);
		  	
	
		  	tableViewRow.add(labelTitle);
		  	viewDetail.add(viewStar);
		  	viewDetail.add(labelAddress);
		  	view_Description.add(imageView);
		  	view_Description.add(viewDetail);
		  	//view_Description.add(labelDescription);
		  	viewDetail.add(labelMore);
		  	tableViewRow.add(view_Description);
		  	
		  	element.ofertas.forEach(function (element2, index2, array2) {
		  		
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
		  			text: '19 €'
		  		});
		  		textOffer2.applyProperties(textOfferPrice1);
		  		
		  		var textOffer3 = Ti.UI.createLabel({
		  			text: '(pers/día)'
		  		});
		  		textOffer3.applyProperties(textOfferPrice2);
		  		
		  		var textOffer4 = Ti.UI.createLabel({
		  			text: '195 €'
		  		});
		  		textOffer4.applyProperties(textOfferPrice3);
		  		
		  		/*var textOffer5 = Ti.UI.createLabel({
		  			text: '(precio total)'
		  		});
		  		textOffer5.applyProperties(textOfferPrice2);*/
		  		
		  		
		  		viewPrice.add(textOffer2);
		  		viewPrice.add(textOffer3);
		  		viewPrice.add(textOffer4);
		  		//viewPrice.add(textOffer5);

		  		view_Offer.add(buttonReserve);
		  		view_Offer.add(textOffer1);
		  		view_Offer.add(viewPrice);
		  		tableViewRow.add(view_Offer);
		  		
		  	});	
		  	
		  	var view_Line = Ti.UI.createView({});
		  	view_Line.applyProperties(line);
		  	tableViewRow.add(view_Line);	  	
		  	
		  	rows.push(tableViewRow);
		  
		});
		
		$.tableView_hotels.setData(rows);
	}
	else
	{
		//Error
	}
	
	Ti.App.fireEvent('closeLoading');
	
}





/* ***********************************************************
 * Handler functions
 * ***********************************************************/

function handler_detail(e){
	
	managment_View.OpenSectionParam('hotelDetail',[]);
	
}
