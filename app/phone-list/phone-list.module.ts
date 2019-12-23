import angular from 'angular';

import phone from '../core/phone/phone.module';
import phoneListComponent from './phone-list.component';
import { name as phoneListComponentName } from './phone-list.component';

const MODULE_NAME: string = 'phoneList';

angular.
    module(MODULE_NAME, [phone]).
    component(phoneListComponentName, phoneListComponent);

export default MODULE_NAME;