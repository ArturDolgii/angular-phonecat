import './app.css';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngRoute from 'angular-route';

import core from './core/core.module';
import phoneDetail from './phone-detail/phone-detail.module';
import phoneList from './phone-list/phone-list.module';

import config from './app.config';
import animation, * as animationFactory from './app.animations';
import Phone, * as PhoneService from "./core/phone/phone.service";
import checkmark, * as checkmarkFilter from './core/checkmark/checkmark.filter';

export const name: string = 'phonecatApp';

angular.
  module(name, [
    ngAnimate,
    ngRoute,
    core,
    phoneDetail,
    phoneList
  ]).
  config(config).
  animation(animationFactory.className, animation).
  factory(PhoneService.name, Phone).
  filter(checkmarkFilter.name, checkmark);
