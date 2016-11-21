import {Component} from '@angular/core';

@Component({
    selector: 'main-comp',
    template: `<div>
                    <a [routerLink]="['/home']">Home</a>
                    <a [routerLink]="['/test']">test</a>
               </div>
               <div>
                    <router-outlet></router-outlet>
                </div>`
})
export class MainComponent {
}
