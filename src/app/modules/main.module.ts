import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HelloWorldComponent} from '../components/hello-world.component';
import {MaterialModule} from '@angular/material';

@NgModule({
    bootstrap: [
        HelloWorldComponent
    ],
    declarations: [
        HelloWorldComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule
    ],
    providers: []
})
export class MainModule {
}
