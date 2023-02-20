import {Component} from '@angular/core';
import {DataService} from './dataService';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
    template: `
    <p>{{infoCronoss}}</p>
    `
})
export class DemoDialog {

    infoCronoss : string;

    constructor(private dataService: DataService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {
        this.infoCronoss = this.dataService.infoCronoss;
    }
}