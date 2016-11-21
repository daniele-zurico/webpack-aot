import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HelloWorldComponent} from '../components/hello-world.component';
import {MaterialModule} from '@angular/material';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

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
        loadChildren: 'es6-promise-loader?,[name]!../hello-world-2/HelloWorld2.module#HelloWorld2Module'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    bootstrap: [MainComponent],
    declarations: [MainComponent, HelloWorldComponent],
    imports: [
        CommonModule,
        BrowserModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(ROUTE_CONFIG, { useHash: true})
    ],
    providers: []
})
export class MainModule {
}
