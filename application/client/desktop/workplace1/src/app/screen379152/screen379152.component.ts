import { Component, OnInit } from '@angular/core';
import { Screen379152Service } from './screen379152.service';

@Component({
  selector: 'app-screen379152',
  templateUrl: './screen379152.component.html',
  styleUrls: ['./screen379152.component.scss'],
})

export class Screen379152Component implements OnInit {
    columnDefs: any = [];
    public user = {
        name: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private screen379152Service: Screen379152Service,
    ) { }

    ngOnInit() {
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}