'use strict';

Phone.$inject = ['$resource'];
function Phone($resource) {
  return $resource('phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: {phoneId: 'phones'},
      isArray: true
    }
  });
}

export var name = 'Phone';

export default Phone;
