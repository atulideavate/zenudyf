import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn:any;
  @Input() link:any;
  @Input() isRegistrationPage:any;
  @Input() isSignUpPage:any;
  @Input() userName:any;
  @Input() profilePicture:any;
  @Input('role') role:any;

  constructor(
    public router: Router,
) { }

  ngOnInit(): void {
    
  }
  logout() {
    this.isLoggedIn=false;
    this.router.navigate(['/login']);
 }
}
