import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  minDateValue: Date | null = null;
  maxDateValue: Date | null = null;
  disabledDates: Function | null = null;
}
