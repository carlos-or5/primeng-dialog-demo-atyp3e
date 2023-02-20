import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  infoCronoss : string = "";

  constructor() { }

  getinfoCronoss() {
  return this.infoCronoss;
}

  setinfoCronoss(aux : string) {
  this.infoCronoss = aux;
}

}