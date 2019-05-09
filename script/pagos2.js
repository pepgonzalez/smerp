'use strict';
// Class definition

var filas_seleccionadas = [];
var total = 0;
var dataJSONArray = JSON.parse('[{"Total":1000.00,"RecordID":1,"OrderID":"0374-5070","Country":"F00001","ShipCountry":"CN","ShipCity":"Jiujie","ShipName":"Proveedor 1","ShipAddress":"60310 Schiller Center","CompanyEmail":"cdodman0@wsj.com","CompanyAgent":"Cordi Dodman","CompanyName":"Proveedor 1","Currency":"MXN","Notes":"sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus","Department":"Kids","Website":"tripadvisor.com","Latitude":39.952319,"Longitude":119.598195,"ShipDate":"8/27/2017","PaymentDate":"2016-09-15 22:18:06","TimeZone":"Asia/Chongqing","TotalPayment":"$336309.10","Status":6,"Type":"Orden de Compra 1","Actions":null,"Amount":"Origen 1"},\n' +
			'{"Total":2000.00,"RecordID":2,"OrderID":"63868-257","Country":"F00002","ShipCountry":"PH","ShipCity":"Gibgos","ShipName":"Proveedor 1","ShipAddress":"26734 Mitchell Drive","CompanyEmail":"kscritch1@google.es","CompanyAgent":"Katrinka Scritch","CompanyName":"Proveedor 1","Currency":"MXN","Notes":"ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur","Department":"Tools","Website":"elpais.com","Latitude":13.8503992,"Longitude":123.7585154,"ShipDate":"9/3/2017","PaymentDate":"2016-09-05 16:27:07","TimeZone":"Asia/Manila","TotalPayment":"$786612.37","Status":1,"Type":"Orden de Compra 2","Actions":null,"Amount":"Origen 1"},\n' +
			'{"Total":3000.00, "RecordID":3,"OrderID":"49288-0815","Country":"F00003","ShipCountry":"PY","ShipCity":"General Elizardo Aquino","ShipName":"Proveedor 2","ShipAddress":"9 Daystar Center","CompanyEmail":"neberlein2@google.ca","CompanyAgent":"Nevin Eberlein","CompanyName":"Proveedor 2","Currency":"MXN","Notes":"bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris","Department":"Electronics","Website":"bing.com","Latitude":-24.4436327,"Longitude":-56.9014072,"ShipDate":"4/23/2016","PaymentDate":"2016-01-01 08:03:07","TimeZone":"America/Asuncion","TotalPayment":"$216102.85","Status":5,"Type":"Orden de Compra 3","Actions":null,"Amount":"Origen 2"},\n' +
			'{"Total":4000.00, "RecordID":4,"OrderID":"49288-0039","Country":"F00004","ShipCountry":"AZ","ShipCity":"Maştağa","ShipName":"Proveedor 1","ShipAddress":"68 Bunker Hill Street","CompanyEmail":"sdenge3@discuz.net","CompanyAgent":"Syd Denge","CompanyName":"Proveedor 1","Currency":"MXN","Notes":"suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus","Department":"Computers","Website":"nbcnews.com","Latitude":40.5329933,"Longitude":50.0035678,"ShipDate":"9/6/2017","PaymentDate":"2016-08-26 05:27:20","TimeZone":"Asia/Baku","TotalPayment":"$555545.40","Status":1,"Type":"Orden de Compra 4","Actions":null,"Amount":"Origen 3"},\n' +
			'{"Total":5000.00, "RecordID":5,"OrderID":"49230-191","Country":"F00005","ShipCountry":"JP","ShipCity":"Yokosuka","ShipName":"Proveedor 2","ShipAddress":"8 Annamark Place","CompanyEmail":"mellse2q@xinhuanet.com","CompanyAgent":"Meade Ellse","CompanyName":"Proveedor 1","Currency":"USD","Notes":"magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia","Department":"Sports","Website":"abc.net.au","Latitude":34.6830797,"Longitude":137.9865313,"ShipDate":"12/12/2016","PaymentDate":"2016-08-30 12:27:38","TimeZone":"Asia/Tokyo","TotalPayment":"$1127673.96","Status":1,"Type":"Orden de Compra 5","Actions":null,"Amount":"Origen 1"},\n' +
			'{"Total":6000.00, "RecordID":6,"OrderID":"50865-056","Country":"F00006","ShipCountry":"HN","ShipCity":"Yuscarán","ShipName":"Proveedor 1","ShipAddress":"116 Bay Way","CompanyEmail":"hensley2r@businessweek.com","CompanyAgent":"Hamil Ensley","CompanyName":"Proveedor 2","Currency":"MXN","Notes":"nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis","Department":"Kids","Website":"dell.com","Latitude":13.9448964,"Longitude":-86.8508942,"ShipDate":"1/14/2016","PaymentDate":"2016-12-27 22:25:10","TimeZone":"America/Tegucigalpa","TotalPayment":"$386091.31","Status":6,"Type":"Orden de Compra 6","Actions":null,"Amount":"Origen 2"}]');


var KTDatatableDataLocalDemo = function() {
	// Private functions

	function formatMoney(n, c, d, t) {
	  var c = isNaN(c = Math.abs(c)) ? 2 : c,
	    d = d == undefined ? "." : d,
	    t = t == undefined ? "," : t,
	    s = n < 0 ? "-" : "",
	    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
	    j = (j = i.length) > 3 ? j % 3 : 0;

	  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	}


	var options = {
        // datasource definition
        data: {
            type: 'remote',
            source: {
                read: {
                    url: 'https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/datatables/demos/default.php',
                },
            },
            pageSize: 10,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
        },

        // layout definition
        layout: {
            scroll: true, // enable/disable datatable scroll both horizontal and
            // vertical when needed.
            height: 350, // datatable's body's fixed height
            footer: false // display/hide footer
        },

        // column sorting
        sortable: true,

        pagination: true,

        // columns definition

        columns: [{
            field: 'RecordID',
            title: '#',
            sortable: false,
            width: 20,
            selector: {
                class: 'kt-checkbox--solid'
            },
            textAlign: 'center',
        }, {
            field: 'OrderID',
            title: 'Order ID',
            template: '{{OrderID}}',
        }, {
            field: 'Country',
            title: 'Country',
            template: function(row) {
                return row.Country + ' ' + row.ShipCountry;
            },
        }, {
            field: 'ShipAddress',
            title: 'Ship Address',
        }, {
            field: 'ShipDate',
            title: 'Ship Date',
            type: 'date',
            format: 'MM/DD/YYYY',
        }, {
            field: 'Status',
            title: 'Status',
            // callback function support for column rendering
            template: function(row) {
                var status = {
                    1: {
                        'title': 'Pending',
                        'class': 'kt-badge--brand'
                    },
                    2: {
                        'title': 'Delivered',
                        'class': ' kt-badge--danger'
                    },
                    3: {
                        'title': 'Canceled',
                        'class': ' kt-badge--primary'
                    },
                    4: {
                        'title': 'Success',
                        'class': ' kt-badge--success'
                    },
                    5: {
                        'title': 'Info',
                        'class': ' kt-badge--info'
                    },
                    6: {
                        'title': 'Danger',
                        'class': ' kt-badge--danger'
                    },
                    7: {
                        'title': 'Warning',
                        'class': ' kt-badge--warning'
                    },
                };
                return '<span class="kt-badge ' + status[row.Status].class +
                    ' kt-badge--inline kt-badge--pill">' + status[row.Status].title +
                    '</span>';
            },
        }, {
            field: 'Type',
            title: 'Type',
	        autoHide: false,
            // callback function support for column rendering
            template: function(row) {
                var status = {
                    1: {
                        'title': 'Online',
                        'state': 'danger'
                    },
                    2: {
                        'title': 'Retail',
                        'state': 'primary'
                    },
                    3: {
                        'title': 'Direct',
                        'state': 'success'
                    },
                };
                return '<span class="kt-badge kt-badge--' + status[row.Type].state +
                    ' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' +
                    status[row.Type].state + '">' + status[row.Type].title + '</span>';
            },
        }, {
            field: 'Actions',
            title: 'Actions',
            sortable: false,
            width: 110,
            overflow: 'visible',
            textAlign: 'left',
	        autoHide: false,
            template: function() {
	            return '\
                    <div class="dropdown">\
                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-sm" data-toggle="dropdown">\
                            <i class="flaticon2-settings"></i>\
                        </a>\
                        <div class="dropdown-menu dropdown-menu-right">\
                            <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
                            <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
                            <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
                        </div>\
                    </div>\
                    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-sm" title="Edit details">\
                        <i class="flaticon2-file"></i>\
                    </a>\
                    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-sm" title="Delete">\
                        <i class="flaticon2-delete"></i>\
                    </a>\
                ';
            },
        }],
    };

	var localSelectorDemo = function() {

        options.search = {
            input: $('#generalSearch'),
        };

    	var datatable = $('.kt-datatable').KTDatatable(options);

        $('#kt_form_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#kt_form_type').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Type');
        });

        $('#kt_form_status,#kt_form_type').selectpicker();

        datatable.on(
            'kt-datatable--on-check kt-datatable--on-uncheck kt-datatable--on-layout-updated',
            function(e) {
                var checkedNodes = datatable.rows('.kt-datatable__row--active').nodes();
                var count = checkedNodes.length;
                $('#kt_datatable_selected_number').html(count);
                if (count > 0) {
                    $('#kt_datatable_group_action_form').collapse('show');
                } else {
                    $('#kt_datatable_group_action_form').collapse('hide');
                }
            });

        $('#kt_modal_fetch_id').on('show.bs.modal', function(e) {
            var ids = datatable.rows('.kt-datatable__row--active').
            nodes().
            find('.kt-checkbox--single > [type="checkbox"]').
            map(function(i, chk) {
                return $(chk).val();
            });
            var c = document.createDocumentFragment();
            for (var i = 0; i < ids.length; i++) {
                var li = document.createElement('li');
                li.setAttribute('data-id', ids[i]);
                li.innerHTML = 'Selected record ID: ' + ids[i];
                c.appendChild(li);
            }
            $(e.target).find('.kt-datatable_selected_ids').append(c);
        }).on('hide.bs.modal', function(e) {
            $(e.target).find('.kt-datatable_selected_ids').empty();
        });

    };

	// demo initializer
	var demo = function() {
		
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
					textAlign: 'center',
					template: function(row, index, datatable) {
        				return formatMoney(row.Total);
      				}
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




		datatable.on(
            'kt-datatable--on-check kt-datatable--on-uncheck kt-datatable--on-layout-updated',
            function(e) {
                
                var ids = datatable.rows('.kt-datatable__row--active').
		            nodes().
		            find('.kt-checkbox--single > [type="checkbox"]').
		            map(function(i, chk) {
		            	return $(chk).val();
		        });

		        filas_seleccionadas = [];
		        for (var i = 0; i < ids.length; i++) {
		        	filas_seleccionadas.push(ids[i]);
		        }
            
            });

		$("#guardarButton").click(function(e){
			e.preventDefault();
			var total = 0;
			var borrar = [];

			dataJSONArray.forEach(function(element) {
  				console.log(element);
  				var recordID = element.RecordID;
  				var totalreg = element.Total;

  				var isSelected = false;
  				for (var i = 0; i < filas_seleccionadas.length; i++) {
		        	if(recordID == parseInt(filas_seleccionadas[i])){
		        		isSelected = true;
		        		break;
		        	}
		        }
		        if(isSelected){
		        	total = total + parseInt(totalreg);
		        }else{
		        	borrar.push(recordID);
		        }

			});
			console.log("total: " + total);
			$("#totalAmountSelected").text(formatMoney(total));
			console.log("a borrar:");
			console.log(borrar);
			borrar.forEach(function(e){
				var idc = parseInt(e);
				console.log(idc);
				idc = idc - 1;
				datatable.rows('*[data-row="'+ idc + '"]').visible(false);
			})

			$("#editContainer").hide();
			$("#procContainer").show();
			$("#statusText").text("Guardado");
			
		});
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