import {Routes, RouterModule} from '@angular/router';
import {HelloWorld2Component} from './HelloWorld2Component';

export const subRoutes: Routes = [{
    path: '',
    component: HelloWorld2Component
}];
export const subRouting = RouterModule.forChild(subRoutes);
