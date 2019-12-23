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
import checkmark, * as checkmarkFilter from './core/checkmark/checkmark.filter';

import { BrowserModule } from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';
import {downgradeInjectable, UpgradeModule} from "@angular/upgrade/static";
import {HttpClientModule} from "@angular/common/http";

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
    factory(PhoneServiceName, downgradeInjectable(Phone)).
    filter(checkmarkFilter.name, checkmark);

@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpClientModule
    ],
    providers: [
        Phone
    ],
    bootstrap: []
})
export class AppModule {
    constructor(@Inject(UpgradeModule) private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, [angularJSModuleName]);
    }
}
