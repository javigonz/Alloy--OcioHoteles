var managment_View = require('managment_View');
var managment_Data = require('managment_Data');

Alloy.Globals.Menu = $.id_menuContainer;

show();



/* ***********************************************************
 * Public functions
 * ***********************************************************/


/* ***********************************************************
 * Private functions
 * ***********************************************************/


function show(){
	
	//Styles
	var viewRowMenu = $.createStyle({classes: ['viewRowMenu']});
	var labelMenu = $.createStyle({classes: ['labelMenu']});
	var separatorLine = $.createStyle({classes: ['separatorLine']});
	var icon1 = $.createStyle({classes: ['icon1']});
	var icon2 = $.createStyle({classes: ['icon2']});
	var icon3 = $.createStyle({classes: ['icon3']});

	//Create Menu Rows
	//Menu LOGIN
	var row1 = Ti.UI.createView({
		_id: '1'
	});
	row1.applyProperties(viewRowMenu);
	row1.top = 0;
	row1.addEventListener('click',handlerMenu);
		
	var imageIcon1 = Ti.UI.createImageView({
		_id: '1',
		image: '/images/icon1.png'
	});
	imageIcon1.applyProperties(icon1);
		    
	var label1 = Ti.UI.createLabel({
		      text:L('text_1'),
		      _id: '1'
		    });
	label1.applyProperties(labelMenu);	
		    
    //Gap line
	var line1 = Ti.UI.createView({});
	line1.applyProperties(separatorLine);
		
	row1.add(imageIcon1);	
	row1.add(label1);   
	row1.add(line1);
	$.viewMenu.add(row1); 
	
	
	
	//Menu BUSCADOR
	var row2 = Ti.UI.createView({
		_id: '2'
	});
	row2.applyProperties(viewRowMenu);
	row2.top = 46;
	row2.addEventListener('click',handlerMenu);
	
	var imageIcon2 = Ti.UI.createImageView({
		_id: '2',
		image: '/images/icon2.png'
	});
	imageIcon2.applyProperties(icon2);
		    
	var label2 = Ti.UI.createLabel({
		      text: L('text_2'),
		      _id: '2'
		    });
	label2.applyProperties(labelMenu);	
		    
    //Gap line
	var line2 = Ti.UI.createView({});
	line2.applyProperties(separatorLine);
		
	row2.add(imageIcon2);	
	row2.add(label2);   
	row2.add(line2);
	$.viewMenu.add(row2); 	
	
	
	
	//Menu CONDICIONES GENERALES
	var row3 = Ti.UI.createView({
		_id: '3'
	});
	row3.applyProperties(viewRowMenu);
	row3.top = 92;
	row3.addEventListener('click',handlerMenu);
	
	var imageIcon3 = Ti.UI.createImageView({
		_id: '3',
		image: '/images/icon3.png'
	});
	imageIcon3.applyProperties(icon3);
		    
	var label3 = Ti.UI.createLabel({
		      text: L('text_3'),
		      _id: '3'
		    });
	label3.applyProperties(labelMenu);	
		    
    //Gap line
	var line3 = Ti.UI.createView({});
	line3.applyProperties(separatorLine);
	
	row3.add(imageIcon3);	
	row3.add(label3);   
	row3.add(line3);
	$.viewMenu.add(row3);
	
	
	
	//Menu AVISO LEGAL
	var row4 = Ti.UI.createView({
		_id: '4'
	});
	row4.applyProperties(viewRowMenu);
	row4.top = 138;
	row4.addEventListener('click',handlerMenu);
	
	var imageIcon4 = Ti.UI.createImageView({
		_id: '4',
		image: '/images/icon3.png'
	});
	imageIcon4.applyProperties(icon3);
		    
	var label4 = Ti.UI.createLabel({
		      text: L('text_4'),
		      _id: '4'
		    });
	label4.applyProperties(labelMenu);	
		    
    //Gap line
	var line4 = Ti.UI.createView({});
	line4.applyProperties(separatorLine);
	
	row4.add(imageIcon4);	
	row4.add(label4);   
	row4.add(line4);
	$.viewMenu.add(row4);
	
	
}


function closeSession(){
	
	Ti.App.removeEventListener('loadDataCloseSession', closeSession);
	
	if (datamodel_CloseSession.result === 'ok')
	{
		managment_View.OpenSectionParam('login',[]);
	}
	else
	{
		Ti.App.fireEvent('closeLoading');
		managment_View.OpenInfoWindow( L('text_13'));
	}
	
	

}


/* ***********************************************************
 * Handler functions
 * ***********************************************************/

function handlerMenu(ev)
{
	switch (ev.source._id)
	{
		case '1':		Ti.App.fireEvent('openLoading');
						Ti.App.addEventListener('loadDataCloseSession', closeSession);
						managment_Data.LoadWebService_CloseSession();
						break;
					
		case '2':		managment_View.OpenSectionParam('search',[]);
						break;	
						
		case '3':		managment_View.OpenSectionParam('generalConditions',[]);
						break;	
						
		case '4':		managment_View.OpenSectionParam('legalAdvice',[]);
						break;	
																					
		
	}
	
}
