import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  minDateValue: string | number | Date | null = null;
  maxDateValue: string | number | Date | null = null;
  disabledDates: Function | Date[] | null = null;
}
