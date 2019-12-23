import './styles.css';

import template from './phone-list.template.html';
import {Phone, PhoneServiceName} from "../core/phone/phone.service";
import IPhone from '../interfaces/IPhone';

class PhoneListController {
  public phones: IPhone[];
  public orderProp: string;

  static $inject = [PhoneServiceName];
  constructor(private Phone: Phone) {}

  $onInit() {
    this.Phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
}

export const name: string = 'phoneList';

export default {
  template,
  controller: PhoneListController
};
