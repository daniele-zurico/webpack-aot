import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import {HelloWorld2Component} from './HelloWorld2Component';
import {HELLO_ROUTES} from './HelloWorld2Routes';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [HelloWorld2Component],
    declarations: [HelloWorld2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(HELLO_ROUTES)
    ]
})
export class HelloWorld2Module {
}
