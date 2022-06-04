import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private CS: CookieService, private router: Router) { }

  ngOnInit(): void {
    // if(this.CS.get('access_token')){
    //   this.router.navigate(['/welcome']);
    // }
  }

}
