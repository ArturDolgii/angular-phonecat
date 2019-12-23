import './app.css';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngRoute from 'angular-route';

import core from './core/core.module';
import phoneDetail from './phone-detail/phone-detail.module';
import phoneList from './phone-list/phone-list.module';

import config from './app.config';
import animation, * as animationFactory from './app.animations';
import { Phone, PhoneServiceName } from "./core/phone/phone.service";

import { BrowserModule } from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';
import {downgradeInjectable, UpgradeModule} from "@angular/upgrade/static";
import {HttpClientModule} from "@angular/common/http";
import {PhoneDetailComponent} from './phone-detail/phone-detail.component';
import {PhoneListComponent} from './phone-list/phone-list.component';
import {FormsModule} from "@angular/forms";
import {routeParamsProvider} from "./ajs-upgraded-providers";
import {CheckmarkPipe} from "./core/checkmark/checkmark.pipe";

const angularJSModuleName: string = 'phonecatApp';

angular.
    module(angularJSModuleName, [
        ngAnimate,
        ngRoute,
        core,
        phoneDetail,
        phoneList
    ]).
    config(config).
    animation(animationFactory.className, animation).
    factory(PhoneServiceName, downgradeInjectable(Phone));

@NgModule({
    declarations: [
        PhoneListComponent,
        PhoneDetailComponent,
        CheckmarkPipe
    ],
    entryComponents: [
        PhoneListComponent,
        PhoneDetailComponent
    ],
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        Phone,
        routeParamsProvider
    ],
    bootstrap: []
})
export class AppModule {
    constructor(@Inject(UpgradeModule) private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, [angularJSModuleName]);
    }
}
