import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public id: number = 5;
  public count: number = 0;
  public date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  public goTo(id: number) {
    this.count = this.count + 1;
    if (id === 5) {
      const el = document.getElementById(id.toString());
      el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else {this.id = id}
  }

  public copyMail(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
