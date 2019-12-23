import angular from 'angular';

import phone from '../core/phone/phone.module';
import { PhoneDetailComponent } from './phone-detail.component';
import { name as phoneDetailComponentName } from './phone-detail.component';
import {downgradeComponent} from "@angular/upgrade/static";

const MODULE_NAME: string = 'phoneDetail';

angular.
  module(MODULE_NAME, [phone]).
  directive(phoneDetailComponentName, downgradeComponent({component: PhoneDetailComponent}));

export default MODULE_NAME;
