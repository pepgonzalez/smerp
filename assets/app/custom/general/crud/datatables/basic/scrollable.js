"use strict";
var KTDatatablesBasicScrollable = function() {

	var initTable1 = function() {
		var table = $('#kt_table_1');

		// begin first table
		table.DataTable({
			scrollY: '50vh',
			scrollX: true,
			scrollCollapse: true,
			columnDefs: [
				{
					targets: -1,
					title: 'Actions',
					orderable: false,
					render: function(data, type, full, meta) {
						return `
                        <span class="dropdown">
                            <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">
                              <i class="la la-ellipsis-h"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>
                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>
                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>
                            </div>
                        </span>
                        <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">
                          <i class="la la-edit"></i>
                        </a>`;
					},
				},
				{
					targets: 8,
					render: function(data, type, full, meta) {
						var status = {
							1: {'title': 'Pending', 'class': 'kt-badge--brand'},
							2: {'title': 'Delivered', 'class': ' kt-badge--danger'},
							3: {'title': 'Canceled', 'class': ' kt-badge--primary'},
							4: {'title': 'Success', 'class': ' kt-badge--success'},
							5: {'title': 'Info', 'class': ' kt-badge--info'},
							6: {'title': 'Danger', 'class': ' kt-badge--danger'},
							7: {'title': 'Warning', 'class': ' kt-badge--warning'},
						};
						if (typeof status[data] === 'undefined') {
							return data;
						}
						return '<span class="kt-badge ' + status[data].class + ' kt-badge--inline kt-badge--pill">' + status[data].title + '</span>';
					},
				},
				{
					targets: 9,
					render: function(data, type, full, meta) {
						var status = {
							1: {'title': 'Online', 'state': 'danger'},
							2: {'title': 'Retail', 'state': 'primary'},
							3: {'title': 'Direct', 'state': 'success'},
						};
						if (typeof status[data] === 'undefined') {
							return data;
						}
						return '<span class="kt-badge kt-badge--' + status[data].state + ' kt-badge--dot"></span>&nbsp;' +
							'<span class="kt-font-bold kt-font-' + status[data].state + '">' + status[data].title + '</span>';
					},
				},
			],
		});
	};

	var initTable2 = function() {
		var table = $('#kt_table_2');

		// begin second table
		table.DataTable({
			paging: false,
			searching: false,
			scrollY: '50vh',
			scrollX: true,
			scrollCollapse: true,
			info: false,
			columnDefs: [
				{
					targets: -1,
					title: 'Acciones',
					orderable: false,
					render: function(data, type, full, meta) {
						return `
						<div style="display:inline-block;width:100px;">
                        <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">
                          <i class="la la-plus-square"></i>
                        </a>
                        <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">
                          <i class="la la-remove"></i>
                        </a>
                        </div>`;
					},
				}],
		});
	};

	var initTable5 = function() {
		var table = $('#kt_table_5');

		// begin second table
		table.DataTable({
			paging: false,
			searching: false,
			scrollY: '50vh',
			scrollX: true,
			scrollCollapse: true,
			info: false,
			columnDefs: [
				{
					targets: -1,
					title: 'Acciones',
					orderable: false,
					render: function(data, type, full, meta) {
						return `
						<div style="display:inline-block;width:100px;">
                        <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">
                          <i class="la la-plus-square"></i>
                        </a>
                        <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">
                          <i class="la la-remove"></i>
                        </a>
                        </div>`;
					},
				}],
		});
	};

	var initTable4 = function() {
		var table = $('#kt_table_4');

		// begin second table
		table.DataTable({
			paging: false,
			searching: false,
			scrollY: '50vh',
			scrollX: true,
			scrollCollapse: true,
			info: false,
			columnDefs: [],
		});
	};

	var initTable6 = function() {
		var table = $('#kt_table_6');

		// begin second table
		table.DataTable({
			paging: false,
			searching: false,
			scrollY: '50vh',
			scrollX: true,
			scrollCollapse: true,
			info: false,
			columnDefs: [
				{
				}],
		});
	};

	var initTable7 = function() {
		var table = $('#kt_table_7');

		// begin second table
		table.DataTable({
			paging: false,
			searching: false,
			scrollY: '50vh',
			scrollX: true,
			scrollCollapse: true,
			info: false,
			columnDefs: [
				{
				}],
		});
	};

	var initTable8 = function() {
		var table = $('#kt_table_8');

		// begin second table
		table.DataTable({
			paging: false,
			searching: false,
			scrollY: '50vh',
			scrollX: true,
			scrollCollapse: true,
			info: false,
			columnDefs: [
				{
				}],
		});
	};

	return {

		//main function to initiate the module
		init: function() {
			initTable1();
			initTable2();
			initTable4();
			initTable5();
			initTable6();
			initTable7();
			initTable8();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesBasicScrollable.init();
});