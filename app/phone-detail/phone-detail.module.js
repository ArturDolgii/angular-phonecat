import phone from '../core/phone/phone.module';
import phoneDetailComponent from './phone-detail.component';
import { name as phoneDetailComponentName } from './phone-detail.component';

const MODULE_NAME = 'phoneDetail';

angular.
  module(MODULE_NAME, [phone]).
  component(phoneDetailComponentName, phoneDetailComponent);

export default MODULE_NAME;
