import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  @Input() choice: number = 1;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.choice) {
      if (this.choice) {
        const el = document.getElementById(this.choice.toString());
        el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }
    }
  }
}
