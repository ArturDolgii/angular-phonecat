import template from './phone-detail.template.html';

import {Phone, PhoneServiceName} from '../core/phone/phone.service';
import IPhoneDetail from "../interfaces/IPhoneDetail";

class PhoneDetailController {
  public phone: IPhoneDetail;
  public mainImageUrl: string;

  $inject = ['$routeParams', PhoneServiceName];
  constructor(private $routeParams, private Phone: Phone) {}

  $onInit() {
    this.getPhone();
  }

  getPhone(): void {
    this.Phone.get(this.$routeParams.phoneId).subscribe((data: IPhoneDetail) => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string): void {
    this.mainImageUrl = imageUrl;
  }
}

export const name: string = 'phoneDetail';

export default {
  template,
  controller: PhoneDetailController
};
