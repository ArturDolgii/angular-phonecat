import template from './phone-detail.template.html';
import * as PhoneService from '../core/phone/phone.service';
import IPhoneDetail from "../interfaces/IPhoneDetail";

class PhoneDetailController {
  public phone: ng.resource.IResource<IPhoneDetail>;
  public mainImageUrl: string;

  $inject = ['$routeParams', PhoneService.name];
  constructor(private $routeParams, private Phone) {}

  $onInit() {
    this.phone = this.getPhone();
  }

  getPhone(): ng.resource.IResource<IPhoneDetail> {
    return this.Phone.get({phoneId: this.$routeParams.phoneId}, (phone: IPhoneDetail) => {
      this.setImage(phone.images[0]);
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
