'use strict';

import phone from '../core/phone/phone.module';
import phoneListComponent from './phone-list.component';
import { name as phoneListComponentName } from './phone-list.component';

var MODULE_NAME = 'phoneList';

angular.
    module(MODULE_NAME, [phone]).
    component(phoneListComponentName, phoneListComponent);

export default MODULE_NAME;
