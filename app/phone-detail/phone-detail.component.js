'use strict';

import template from './phone-detail.template.html';
import * as PhoneService from '../core/phone/phone.service';

PhoneDetailController.$inject = ['$routeParams', PhoneService.name];
function PhoneDetailController($routeParams, Phone) {
  var self = this;
  self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    self.setImage(phone.images[0]);
  });

  self.setImage = function setImage(imageUrl) {
    self.mainImageUrl = imageUrl;
  };
}

export var name = 'phoneDetail';

export default {
  template,
  controller: PhoneDetailController
};
