import './styles.css';

import template from './phone-list.template.html';
import * as PhoneService from "../core/phone/phone.service";
import IPhone from '../interfaces/IPhone';

class PhoneListController {
  public phones: ng.resource.IResourceArray<IPhone[]>;
  public orderProp: string;

  static $inject = [PhoneService.name];
  constructor(private Phone: ng.resource.IResourceClass<IPhone[]>) {}

  $onInit() {
    this.phones = this.Phone.query();
    this.orderProp = 'age';
  }
}

export const name: string = 'phoneList';

export default {
  template,
  controller: PhoneListController
};
