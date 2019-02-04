import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-unidade-list',
    templateUrl: './unidade-list.component.html',
    styleUrls: ['./unidade-list.component.scss']
})
export class UnidadeListComponent implements OnInit {

    displayedColumns = ['checkbox', 'avatar', 'name', 'animal', 'phone', 'address'];
    unidadesSelecionadas = [];
    checkboxes: {};

    constructor() {
    }

    ngOnInit(): void {
    }

}
