import template from './phone-detail.template.html';

import {Phone} from '../core/phone/phone.service';
import IPhoneDetail from "../interfaces/IPhoneDetail";
import {Component, Inject} from "@angular/core";
import {RouteParams} from "../ajs-upgraded-providers";

@Component({
  selector: 'phone-list',
  template
})
export class PhoneDetailComponent {
  public phone: IPhoneDetail;
  public mainImageUrl: string;

  constructor(@Inject(RouteParams) private routeParams: RouteParams,
              @Inject(Phone) private Phone: Phone) {}

  public ngOnInit(): void {
    this.getPhone();
  }

  public getPhone(): void {
    this.Phone.get(this.routeParams['phoneId']).subscribe((data: IPhoneDetail) => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  public setImage(imageUrl: string): void {
    this.mainImageUrl = imageUrl;
  }
}

export const name: string = 'phoneDetail';
