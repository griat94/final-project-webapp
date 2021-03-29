import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textLine: String = ""

  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  getTextFromJava() {
    this.homeService.getText()
      .subscribe((txt) => {
        this.textLine = txt[0];
      });
  }

}
