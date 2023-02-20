import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DemoDialog} from './infoCronoss';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
          min-width: 10rem;
      }

      p {
          margin: 0;
      }

      .confirmation-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
          min-width: 6rem;
      }
  `]
})
export class AppComponent { 

    constructor(private primengConfig: PrimeNGConfig, public dialogService: DialogService, public messageService: MessageService) {}

    ref: DynamicDialogRef;

    displayModal: boolean;

    show() {
        this.ref = this.dialogService.open(DemoDialog, {
            header: 'Cronoss',
            width: '70%',
            contentStyle: {"max-height": "500px", "overflow": "auto"},
            baseZIndex: 10000
        });
    }

    ngOnInit() {
      this.primengConfig.ripple = true;
    }

    showModalDialog() {
        this.displayModal = true;
    }
}
