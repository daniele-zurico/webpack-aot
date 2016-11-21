import {NgModule} from '@angular/core';
import {HelloWorld2Component} from './HelloWorld2Component';
import {CommonModule} from '@angular/common';
import {subRouting} from './HelloWorld2Routes';

@NgModule({
    imports: [
        CommonModule,
        subRouting
    ],
    declarations: [HelloWorld2Component]

})
export class HelloWorld2Module {
}