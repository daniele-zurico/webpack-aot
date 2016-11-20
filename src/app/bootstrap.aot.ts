import { platformBrowser } from '@angular/platform-browser';
import {MainModuleNgFactory} from '../../aot/src/app/modules/main.module.ngfactory.ts';

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
