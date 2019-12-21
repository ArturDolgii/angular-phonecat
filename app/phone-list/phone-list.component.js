'use strict';

import './styles.css';

import template from './phone-list.template.html';
import * as PhoneService from "../core/phone/phone.service";

PhoneListController.$inject = [PhoneService.name];
function PhoneListController(Phone) {
  this.phones = Phone.query();
  this.orderProp = 'age';
}

export var name = 'phoneList';

export default {
  template,
  controller: PhoneListController
};
