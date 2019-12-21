import './styles.css';

import template from './phone-list.template.html';
import * as PhoneService from "../core/phone/phone.service";

class PhoneListController {
  constructor(Phone) {
    this.Phone  = Phone;
  }

  $onInit() {
    this.phones = this.Phone.query();
    this.orderProp = 'age';
  }
}
PhoneListController.$inject = [PhoneService.name];

export const name = 'phoneList';

export default {
  template,
  controller: PhoneListController
};
