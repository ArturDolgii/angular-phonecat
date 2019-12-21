import IPhone from "../../interfaces/IPhone";

class Phone {
  static $inject = ['$resource'];
  constructor(private $resource: ng.resource.IResourceService) {
    return <ng.resource.IResourceClass<ng.resource.IResource<IPhone[]>>>this.$resource('phones/:phoneId.json', {}, {
      query: {
        method: 'GET',
        params: { phoneId: 'phones' },
        isArray: true
      }
    }) as any;
  }
}

export const name: string = 'Phone';

export default Phone;
