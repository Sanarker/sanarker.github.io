import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public id: number = 1;
  public date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  public goTo(id: number) {
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
