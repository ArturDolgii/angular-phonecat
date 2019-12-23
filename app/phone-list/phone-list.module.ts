import angular from 'angular';

import phone from '../core/phone/phone.module';
import { PhoneListComponent } from './phone-list.component';
import { name as phoneListComponentName } from './phone-list.component';
import {downgradeComponent} from "@angular/upgrade/static";

const MODULE_NAME: string = 'phoneList';

angular.
    module(MODULE_NAME, [phone]).
    directive(phoneListComponentName, downgradeComponent({component: PhoneListComponent}));

export default MODULE_NAME;
