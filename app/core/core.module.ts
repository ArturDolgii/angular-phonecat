import angular from 'angular';

import phone from './phone/phone.module';

const MODULE_NAME: string = 'core';

angular.module(MODULE_NAME, [phone]);

export default MODULE_NAME;
