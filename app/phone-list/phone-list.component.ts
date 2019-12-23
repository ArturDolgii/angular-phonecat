import './styles.css';

import template from './phone-list.template.html';

import {Phone} from "../core/phone/phone.service";
import IPhone from '../interfaces/IPhone';
import {Component, Inject} from "@angular/core";

@Component({
  selector: 'phone-list',
  template
})
export class PhoneListComponent {
  public phones: IPhone[];
  public query: string;
  public orderProp: string;

  constructor(@Inject(Phone) private Phone: Phone) {}

  public ngOnInit(): void {
    this.Phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

  public getPhones(): IPhone[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }

  private filterPhones(phones: IPhone[]) {
    if (phones && this.query) {
      return phones.filter(phone => {
        let name = phone.name.toLowerCase();
        let snippet = phone.snippet.toLowerCase();
        return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
      });
    }
    return phones;
  }

  private sortPhones(phones: IPhone[]) {
    if (phones && this.orderProp) {
      return phones
          .slice(0) // Make a copy
          .sort((a, b) => {
            if (a[this.orderProp] < b[this.orderProp]) {
              return -1;
            } else if ([b[this.orderProp] < a[this.orderProp]]) {
              return 1;
            } else {
              return 0;
            }
          });
    }
    return phones;
  }
}

export const name: string = 'phoneList';
