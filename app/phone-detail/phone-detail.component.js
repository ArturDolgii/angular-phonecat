import template from './phone-detail.template.html';
import * as PhoneService from '../core/phone/phone.service';

class PhoneDetailController {
  constructor($routeParams, Phone) {
    this.$routeParams = $routeParams;
    this.Phone = Phone;
  }

  $onInit() {
    this.phone = this.getPhone();
  }

  getPhone() {
    return this.Phone.get({phoneId: this.$routeParams.phoneId}, (phone) => {
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
}
PhoneDetailController.$inject = ['$routeParams', PhoneService.name];

export const name = 'phoneDetail';

export default {
  template,
  controller: PhoneDetailController
};
