import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HelloWorldComponent} from '../components/hello-world.component';
import {MaterialModule} from '@angular/material';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HelloWorld2Component} from '../hello-world-2/HelloWorld2Component';


const ROUTE_CONFIG = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HelloWorldComponent
    },
    {
        path: 'test',
        component: HelloWorld2Component
    },
    // {
    //     path: 'test',
    //     loadChildren: '../hello-world-2/HelloWorld2Module#HelloWorld2Module'
    // },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    bootstrap: [MainComponent],
    declarations: [MainComponent, HelloWorldComponent, HelloWorld2Component],
    imports: [
        CommonModule,
        BrowserModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(ROUTE_CONFIG)
    ],
    providers: []
})
export class MainModule {
}
