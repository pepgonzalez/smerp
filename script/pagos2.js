'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
	// Private functions

	// demo initializer
	var demo = function() {
		var dataJSONArray = JSON.parse('[{"Total":"1,200.00","RecordID":1,"OrderID":"0374-5070","Country":"F00001","ShipCountry":"CN","ShipCity":"Jiujie","ShipName":"Proveedor 1","ShipAddress":"60310 Schiller Center","CompanyEmail":"cdodman0@wsj.com","CompanyAgent":"Cordi Dodman","CompanyName":"Proveedor 1","Currency":"MXN","Notes":"sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus","Department":"Kids","Website":"tripadvisor.com","Latitude":39.952319,"Longitude":119.598195,"ShipDate":"8/27/2017","PaymentDate":"2016-09-15 22:18:06","TimeZone":"Asia/Chongqing","TotalPayment":"$336309.10","Status":6,"Type":"Orden de Compra 1","Actions":null,"Amount":"Origen 1"},\n' +
			'{"Total":"1,200.00","RecordID":2,"OrderID":"63868-257","Country":"F00002","ShipCountry":"PH","ShipCity":"Gibgos","ShipName":"Proveedor 1","ShipAddress":"26734 Mitchell Drive","CompanyEmail":"kscritch1@google.es","CompanyAgent":"Katrinka Scritch","CompanyName":"Proveedor 1","Currency":"MXN","Notes":"ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur","Department":"Tools","Website":"elpais.com","Latitude":13.8503992,"Longitude":123.7585154,"ShipDate":"9/3/2017","PaymentDate":"2016-09-05 16:27:07","TimeZone":"Asia/Manila","TotalPayment":"$786612.37","Status":1,"Type":"Orden de Compra 2","Actions":null,"Amount":"Origen 1"},\n' +
			'{"Total":"2,200.00", "RecordID":3,"OrderID":"49288-0815","Country":"F00003","ShipCountry":"PY","ShipCity":"General Elizardo Aquino","ShipName":"Proveedor 2","ShipAddress":"9 Daystar Center","CompanyEmail":"neberlein2@google.ca","CompanyAgent":"Nevin Eberlein","CompanyName":"Proveedor 2","Currency":"MXN","Notes":"bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris","Department":"Electronics","Website":"bing.com","Latitude":-24.4436327,"Longitude":-56.9014072,"ShipDate":"4/23/2016","PaymentDate":"2016-01-01 08:03:07","TimeZone":"America/Asuncion","TotalPayment":"$216102.85","Status":5,"Type":"Orden de Compra 3","Actions":null,"Amount":"Origen 2"},\n' +
			'{"Total":"1,200.00", "RecordID":4,"OrderID":"49288-0039","Country":"F00004","ShipCountry":"AZ","ShipCity":"Maştağa","ShipName":"Proveedor 1","ShipAddress":"68 Bunker Hill Street","CompanyEmail":"sdenge3@discuz.net","CompanyAgent":"Syd Denge","CompanyName":"Proveedor 1","Currency":"MXN","Notes":"suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus","Department":"Computers","Website":"nbcnews.com","Latitude":40.5329933,"Longitude":50.0035678,"ShipDate":"9/6/2017","PaymentDate":"2016-08-26 05:27:20","TimeZone":"Asia/Baku","TotalPayment":"$555545.40","Status":1,"Type":"Orden de Compra 4","Actions":null,"Amount":"Origen 3"},\n' +
			'{"Total":"10,200.00", "RecordID":99,"OrderID":"49230-191","Country":"F00005","ShipCountry":"JP","ShipCity":"Yokosuka","ShipName":"Proveedor 2","ShipAddress":"8 Annamark Place","CompanyEmail":"mellse2q@xinhuanet.com","CompanyAgent":"Meade Ellse","CompanyName":"Proveedor 1","Currency":"USD","Notes":"magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia","Department":"Sports","Website":"abc.net.au","Latitude":34.6830797,"Longitude":137.9865313,"ShipDate":"12/12/2016","PaymentDate":"2016-08-30 12:27:38","TimeZone":"Asia/Tokyo","TotalPayment":"$1127673.96","Status":1,"Type":"Orden de Compra 5","Actions":null,"Amount":"Origen 1"},\n' +
			'{"Total":"200.00", "RecordID":100,"OrderID":"50865-056","Country":"F00006","ShipCountry":"HN","ShipCity":"Yuscarán","ShipName":"Proveedor 1","ShipAddress":"116 Bay Way","CompanyEmail":"hensley2r@businessweek.com","CompanyAgent":"Hamil Ensley","CompanyName":"Proveedor 2","Currency":"MXN","Notes":"nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis","Department":"Kids","Website":"dell.com","Latitude":13.9448964,"Longitude":-86.8508942,"ShipDate":"1/14/2016","PaymentDate":"2016-12-27 22:25:10","TimeZone":"America/Tegucigalpa","TotalPayment":"$386091.31","Status":6,"Type":"Orden de Compra 6","Actions":null,"Amount":"Origen 2"}]');

		var datatable = $('.kt-datatable').KTDatatable({
			// datasource definition
			data: {
				type: 'local',
				source: dataJSONArray,
				pageSize: 10,
			},
			info: 'Mostrando {{start}} - {{end}} de {{total}} registros totales',
			translate:{
				toolbar:{
					pagination:{
						items:{
							info:'Mostrando {{start}} - {{end}} de {{total}} registros totales'
						}
					}
				},
				records:{
					processing:'Procesando...'
				}
			},
			// layout definition
			layout: {
				scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
				// height: 450, // datatable's body's fixed height
				footer: false, // display/hide footer
			},

			// column sorting
			sortable: true,

			pagination: true,

			search: {
				input: $('#generalSearch'),
			},

			// columns definition
			columns: [
				{
					field: 'RecordID',
					title: 'Pagar',
					sortable: false,
					width: 20,
					type: 'number',
					selector: {class: 'kt-checkbox--solid'},
					textAlign: 'center',
				}, {
					field: 'OrderID',
					title: 'ID Comprobante',
				}, {
					field: 'Country',
					title: 'Factura',
				}, {
					field: 'CompanyName',
					title: 'Proveedor',
				},{
					field: 'ShipDate',
					title: 'Fecha Pago',
					type: 'date',
					format: 'MM/DD/YYYY',
				}, {
					field: 'Total',
					title: 'Importe',
				}, {
					field: 'Currency',
					title: 'Moneda',
				},],
		});

		

		$('#kt_form_status').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Status');
		});

		$('#kt_form_type').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Type');
		});

		$('#kt_form_status,#kt_form_type').selectpicker();

		console.log("pintando objeto toolbar");
		console.log(datatable);

	};

	return {
		// Public functions
		init: function() {
			// init dmeo
			demo();
		},
	};
}();

jQuery(document).ready(function() {
	KTDatatableDataLocalDemo.init();
});