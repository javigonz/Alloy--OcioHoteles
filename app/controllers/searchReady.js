var managment_View = require('managment_View');
var managment_Data = require('managment_Data');
var utils = require('utils');

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
			
			
		}
		
		
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
	

    var resulttable = Ti.UI.createTableView({
        top : '45',
        width : '90%',
        height : '300',
        separatorColor : '#000000',
		backgroundColor: '#CCCCCC'
    });
	 
	$.containerScroll.add(buttonSearch);
	
	$.buttonDestiny.addEventListener("click", function(event, type) {
        Titanium.API.info("CLICK EN BUSCAR");
        if ($.comboDestiny.value.length > 3) {
            $.containerScroll.add(resulttable);
            if (resulttable.data.length > 0) {
                for (var i = resulttable.data[0].rows.length - 1; i >= 0; i--) {
                    resulttable.deleteRow(i);
                }
            }
            auto_complete(search.value);
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
    
	 
	function auto_complete(search_term)
	{
	      var loader = Ti.Network.createHTTPClient({
		        onload: function(e) {
		        	
		        	var table_data = [];
		         	var datos = JSON.parse (this.responseText);
		         	
		            for (var i = 0; i < datos.destinos.length; i++) {
		            	   console.log('row data - ' + datos.destinos[i].id);
			               var row = Ti.UI.createTableViewRow(
			               {
			                  height: 40,
			                  title: datos.destinos[i].nombre,
			                  hasDetail:true
			               });
	
			               table_data.push(row);
		            }
	
		            resulttable.setData(table_data);
		        }	
	        	
	      });
	      
	      var dataSend = {
			 			'method': 'getDestinos'
			  	   };
	
	      loader.open("POST", "http://desarrollo.ociohoteles.com/webService.php"); 
	   	  loader.send( {data:JSON.stringify(dataSend)});
   
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
