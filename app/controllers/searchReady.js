var managment_View = require('managment_View');
var managment_Data = require('managment_Data');
var utils = require('utils');

//Estilos
var tableResult = $.createStyle({classes: ['tableResult']});
var resulttable;
	
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
	
	//Inicializo la visualización de los combos
	$.comboDestinySpain.visible = 'false';
	$.comboDestinySpain.width = '0';
	$.comboDestinySpain.height = '0';
	
	$.comboZonesSpain.visible = 'false';
	$.comboZonesSpain.width = '0';
	$.comboZonesSpain.height = '0';
	
	$.comboDestiny.visible = 'false';
	$.comboDestiny.width = '0';
	$.comboDestiny.height = '0';
	
	$.buttonDestiny.visible = 'false';
	$.buttonDestiny.width = '0';
	$.buttonDestiny.height = '0';
	
	$.containerDestiny.visible = 'false';
	$.containerDestiny.width = '0';
	$.containerDestiny.height = '0';
	
	createComboDestiny();
	createComboRooms();
	
	
	Ti.App.fireEvent('openLoading');
	Ti.App.addEventListener('loadSearchCountries', createComboCountry);
	managment_Data.LoadWebService_SearchLoadCountries();

}

///////////////////////////////////////// CREA EL COMBO PARA PAÍSES
function createComboCountry(){
	
	Ti.App.removeEventListener('loadSearchCountries', createComboCountry);

	if (datamodel_Search_countries.result === 'ok')
	{
		
		if (Ti.Platform.osname == "iphone")
		{	
			
			
		}
		else
		{
			
			var picker_data = [];
			picker_data[0]=Ti.UI.createPickerRow({title:L('text_12')});
			
			datamodel_Search_countries.paises.forEach(function (element, index, array) {
				picker_data.push(Titanium.UI.createPickerRow({title: utils.strNormalize(element.nombre), id: element.id}));
				
			});
			
			
			//estilo
			var pickerStyle = $.createStyle({classes: ['pickerStyle']});
									
			var picker = Titanium.UI.createPicker({});
			picker.selectionIndicator=true;
			picker.applyProperties(pickerStyle);
											
			picker.add(picker_data);
											
			picker.addEventListener('change', function(){
						$.comboCountry.value = picker.getSelectedRow(0).title;
						if (picker.getSelectedRow(0).id == '28') //Es España
						{
							loadDataDestinySpain();

							$.comboDestiny.visible = 'false';
							$.comboDestiny.width = '0';
							$.comboDestiny.height = '0';
							
							$.buttonDestiny.visible = 'false';
							$.buttonDestiny.width = '0';
							$.buttonDestiny.height = '0';
							
							$.buttonDestiny.visible = 'false';
							$.buttonDestiny.width = '0';
							$.buttonDestiny.height = '0';
							
							$.containerDestiny.visible = 'false';
							$.containerDestiny.width = '0';
							$.containerDestiny.height = '0';
							
							$.comboDestinySpain.visible = 'true';
							$.comboDestinySpain.width = '90%';
							$.comboDestinySpain.height = '45';
						}
						else
						{
							$.comboDestinySpain.visible = 'false';
							$.comboDestinySpain.width = '0';
							$.comboDestinySpain.height = '0';
							
							$.comboZonesSpain.visible = 'false';
							$.comboZonesSpain.width = '0';
							$.comboZonesSpain.height = '0';
							
							$.comboDestiny.visible = 'true';
							$.comboDestiny.width = '90%';
							$.comboDestiny.height = '45';
							
							$.buttonDestiny.visible = 'true';
							$.buttonDestiny.width = '70';
							$.buttonDestiny.height = '45';
							
							$.containerDestiny.visible = 'true';
							$.containerDestiny.width = '90%';
							$.containerDestiny.height = '45';
						}
			});
											
			//Imagen de flecha abajo
			var imagen1 = Ti.UI.createImageView({
							image:  '/images/arrowDown.png',
							right:  10,
							width:  15,
							height: 13
			});
		
			$.comboCountry.add(picker);
			$.comboCountry.add(imagen1);	
			
			picker.getSelectedRow(0).id = '28';
			picker.getSelectedRow(0).title = 'ESPAÑA';
			picker.fireEvent('change');
			loadDataDestinySpain();
			$.comboDestiny.visible = 'false';
			$.comboDestiny.width = '0';
			$.comboDestiny.height = '0';
			
			$.buttonDestiny.visible = 'false';
			$.buttonDestiny.width = '0';
			$.buttonDestiny.height = '0';
			
			$.buttonDestiny.visible = 'false';
			$.buttonDestiny.width = '0';
			$.buttonDestiny.height = '0';
			
			$.containerDestiny.visible = 'false';
			$.containerDestiny.width = '0';
			$.containerDestiny.height = '0';
			
			$.comboDestinySpain.visible = 'true';
			$.comboDestinySpain.width = '90%';
			$.comboDestinySpain.height = '45';
			
			
		}
		
		$.comboDateIn.addEventListener('click', createDateIn);
		$.comboDateOut.addEventListener('click', createDateOut);
		
		
	}
	else
	{
		managment_View.OpenInfoWindow( L('text_20'));		
	}
	
	Ti.App.fireEvent('closeLoading');
}




///////////////////////////////////////// CREA EL COMBO DE DESTINOS PARA ESPAÑA
function createComboDestinySpain(){
	
	Ti.App.removeEventListener('loadSearchDestinySpain', createComboDestinySpain);

	if (datamodel_Search_destinySpain.result === 'ok')
	{
		
		if (Ti.Platform.osname == "iphone")
		{	
			
			
		}
		else
		{
			
			var picker_data = [];
			picker_data[0]=Ti.UI.createPickerRow({title:L('text_23')});
			
			datamodel_Search_destinySpain.destinos.forEach(function (element, index, array) {
				picker_data.push(Titanium.UI.createPickerRow({title: utils.strNormalize(element.nombre), id: element.id}));
				
			});
			
			//estilo
			var pickerStyle = $.createStyle({classes: ['pickerStyle']});
									
			var picker = Titanium.UI.createPicker({});
			picker.selectionIndicator=true;
			picker.applyProperties(pickerStyle);
											
			picker.add(picker_data);
											
			picker.addEventListener('change', function(){
						$.comboDestinySpain.value = picker.getSelectedRow(0).title;
						loadDataZonesSpain(picker.getSelectedRow(0).id);
						$.comboZonesSpain.visible = 'true';
						$.comboZonesSpain.width = '90%';
						$.comboZonesSpain.height = '45';
			});
											
			//Imagen de flecha abajo
			var imagen1 = Ti.UI.createImageView({
							image:  '/images/arrowDown.png',
							right:  10,
							width:  15,
							height: 13
			});
		
			$.comboDestinySpain.add(picker);
			$.comboDestinySpain.add(imagen1);	
			
			
		}
		
		
	}
	else
	{
		managment_View.OpenInfoWindow( L('text_20'));		
	}
	
	Ti.App.fireEvent('closeLoading');
}





///////////////////////////////////////// CREA EL COMBO DE ZONAS PARA UN DETERMINADO DESTINO DE ESPAÑA
function createComboZonesSpain(){
	
	Ti.App.removeEventListener('loadSearchZonesSpain', createComboZonesSpain);

	if (datamodel_Search_zonesSpain.result === 'ok')
	{
		
		if (Ti.Platform.osname == "iphone")
		{	
			
			
		}
		else
		{
			
			var picker_data = [];
			picker_data[0]=Ti.UI.createPickerRow({title:L('text_24')});
			
			datamodel_Search_zonesSpain.zonas.forEach(function (element, index, array) {
				picker_data.push(Titanium.UI.createPickerRow({title: utils.strNormalize(element.nombre), id: element.id}));
				
			});
			
			//estilo
			var pickerStyle = $.createStyle({classes: ['pickerStyle']});
									
			var picker = Titanium.UI.createPicker({});
			picker.selectionIndicator=true;
			picker.applyProperties(pickerStyle);
											
			picker.add(picker_data);
											
			picker.addEventListener('change', function(){
						$.comboZonesSpain.value = picker.getSelectedRow(0).title;
			});
											
			//Imagen de flecha abajo
			var imagen1 = Ti.UI.createImageView({
							image:  '/images/arrowDown.png',
							right:  10,
							width:  15,
							height: 13
			});
		
			$.comboZonesSpain.add(picker);
			$.comboZonesSpain.add(imagen1);	
						
		}
				
	}
	else
	{
		managment_View.OpenInfoWindow( L('text_20'));		
	}
	
	Ti.App.fireEvent('closeLoading');
}


///////////////////////////////////////// CREA EL COMBO DE DESTINOS AUTOCOMPLETADO PARA EL RESTO DE PAÍSES MENOS ESPAÑA
function createComboDestiny(){
	

    resulttable = Ti.UI.createTableView({});   
    resulttable.applyProperties(tableResult);
	 
	
	$.buttonDestiny.addEventListener("click", function(event, type) {
        Titanium.API.info("CLICK EN BUSCAR");
        Ti.UI.Android.hideSoftKeyboard();
        if ($.comboDestiny.value.length > 3) {
            $.containerScroll.add(resulttable);
            if (resulttable.data.length > 0) {
            	
            	 for (var i = resulttable.data[0].rows.length - 1; i >= 0; i--) {
	                resulttable.deleteRow(i);
	            }
            }
            
            Ti.App.addEventListener('loadSearchDestinies', auto_complete);
			managment_Data.LoadWebService_SearchLoadDestinies($.comboDestiny.value);
           // auto_complete($.comboDestiny.value);
        } else {
            $.containerScroll.remove(resulttable);
        }
    });
    
    
    resulttable.addEventListener('click', function(e) {
    
 		$.comboDestiny.value = e.rowData.title;
 		$.containerScroll.remove(resulttable);
 		if (resulttable.data.length > 0) {
 			
 			 for (var i = resulttable.data[0].rows.length - 1; i >= 0; i--) {
                resulttable.deleteRow(i);
            }
        }
 		
	});
	
}


function auto_complete(){
	
	Ti.App.removeEventListener('loadSearchDestinies', auto_complete);
	
	if (datamodel_Search_destinies.result === 'ok')
	{
		var table_data = [];
     	
     	datamodel_Search_destinies.destinos.forEach(function (element, index, array) {
			console.log('row data - ' + element.nombre);
               var row = Ti.UI.createTableViewRow(
               {
                  height: 40,
                  title: element.nombre,
                  hasDetail:true
               });

               table_data.push(row);
			
		});
       
        resulttable.setData(table_data);
	}
	else
	{
		//Error en el autocompletado
	}

}



///////////////////////////////////////// CREA EL COMBO DE FECHA DE ENTRADA
function createDateIn(){
	
	var currentTime = new Date();
	
	var pickerdate = Ti.UI.createPicker({
	  type:Ti.UI.PICKER_TYPE_DATE,
	  minDate:new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate())
	});
	
	pickerdate.showDatePickerDialog({
	  callback: function(e) {
	    if (e.cancel) {
	      Ti.API.info('User canceled dialog');
	    } else {
	    	$.text_comboDateIn.text = e.value.getDate() + '/' + (Number(e.value.getMonth()) + 1) + '/' + e.value.getFullYear();
	    }
	  }
	});
}


///////////////////////////////////////// CREA EL COMBO DE FECHA DE SALIDA
function createDateOut(){
	
	var currentTime = new Date();
	
	var pickerdate = Ti.UI.createPicker({
	  type:Ti.UI.PICKER_TYPE_DATE,
	  minDate:new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate())
	});
	
	pickerdate.showDatePickerDialog({
	  callback: function(e) {
	    if (e.cancel) {
	      Ti.API.info('User canceled dialog');
	    } else {
	    	$.text_comboDateOut.text = e.value.getDate() + '/' + (Number(e.value.getMonth()) + 1) + '/' + e.value.getFullYear();
	    }
	  }
	});
}




///////////////////////////////////////// CREA EL COMBO PARA NÚMERO DE HABITACIONES
function createComboRooms(){
	
	if (Ti.Platform.osname == "iphone")
	{	
		
		
	}
	else
	{
		
		var picker_data = [];
		picker_data[0]=Ti.UI.createPickerRow({title:L('text_27')});
		picker_data.push(Titanium.UI.createPickerRow({title: '1', id: '1'}));
		picker_data.push(Titanium.UI.createPickerRow({title: '2', id: '2'}));
		picker_data.push(Titanium.UI.createPickerRow({title: '3', id: '3'}));
	
		
		//estilo
		var pickerStyle = $.createStyle({classes: ['pickerStyle']});
								
		var picker = Titanium.UI.createPicker({});
		picker.selectionIndicator=true;
		picker.applyProperties(pickerStyle);
										
		picker.add(picker_data);
										
		picker.addEventListener('change', function(){
					
		});
										
		//Imagen de flecha abajo
		var imagen1 = Ti.UI.createImageView({
						image:  '/images/arrowDown.png',
						right:  10,
						width:  15,
						height: 13
		});
	
		$.comboRooms.add(picker);
		$.comboRooms.add(imagen1);	
		
		
	}

}





/* ***********************************************************
 * Handler functions
 * ***********************************************************/

function handler_initSearch(e){
	
	managment_View.OpenSectionParam('hotels',[]);
}

function loadDataDestinySpain(){
	
	Ti.App.fireEvent('openLoading');
	Ti.App.addEventListener('loadSearchDestinySpain', createComboDestinySpain);
	managment_Data.LoadWebService_SearchLoadDestinySpain();
	
}

function loadDataZonesSpain(zoneId){
	
	Ti.App.fireEvent('openLoading');
	Ti.App.addEventListener('loadSearchZonesSpain', createComboZonesSpain);
	managment_Data.LoadWebService_SearchLoadZonesSpain(zoneId);
	
}
