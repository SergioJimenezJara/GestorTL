import { HOME_ROUTE, PROFILE_ROUTE } from './../../shared/costants';
import { UtilsService } from './../../shared/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  PROFILE_ROUTE: string = PROFILE_ROUTE;
  HOME_ROUTE: string = HOME_ROUTE;

  constructor(private util: UtilsService) {}

  ngOnInit() {}

  redirect(path: string) {
    this.util.redirect(path);
  }
}
