import { Component } from '@angular/core';
import { Cooky } from './cooky/cooky';
import { CookyService } from './cooky/cooky.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`
})
export class AppComponent {
  cookys: Cooky[];

  constructor(private _cookyService: CookyService) { }

  ngOnInit() {
    this.cookys = this._cookyService.getCookys();
    console.log(this.cookys);
  }
}
