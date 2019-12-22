import { BrowserModule } from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';
import {UpgradeModule} from "@angular/upgrade/static";

import * as angularJSModule from './app.module.ajs';

@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule {
    constructor(@Inject(UpgradeModule) private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, [angularJSModule.name]);
    }
}
