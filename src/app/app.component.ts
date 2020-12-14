import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CONSTANTS } from './config/constants';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zenudyf';
  idleState = 'Not started.';
  timedOut = false;
  interval: any;
  public role: any;
  link: any;
  public isLoggedIn: Boolean = false;
  isHeaderHidden = true;
  isPageHeading: Boolean = false;
  isRegistrationPage: Boolean = true;
  isSignUpPage: Boolean = true;
  userName:any;
  profilePicture:any;
  pathsZLogin: any = [
        "/home",
        "/sign-up",
        "/about-us",
        "/contact-us",
        "/faq",
        "/terms-conditions",
        "/create-password",
        "/forgot-password",
    ];
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    ) {}

	  reset() {
      // this.idle.watch();
      this.idleState = 'Started.';
      this.timedOut = false;
    }

  checkDashLink() {
      this.role = localStorage.getItem('role');
      switch (this.role) {
          case '2':
          this.link = {
              dashboard: 'dashboard',
                  discussion: 'discussion',
                  library: 'library',
              profile: 'profile',
                  myProfile: 'my-profile',
          };
          break;
          default:
          this.link = {};
          break;
      }
  }

  ngOnInit() {
      this.checkDashLink();
      this.router.events.subscribe(evt => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
        //   this.authService.checkLogin().subscribe(response => {
        //       if (
        //           (response.length && !response[0]) ||
        //           (response.hasOwnProperty('status') &&
        //               response['status'] == 'INVALID_TOKEN')
        //       ) {
        //           clearInterval(this.interval);
        //           localStorage.clear(); // forcefully logout and clear localstorage, if token not found
        //           this.isLoggedIn = false;
        //           this.isPageHeading = false;
        //           this.isHeaderHidden = false;
        //           // this.isRegistrationPage = true;
        //           // if (
        //           //     !this.pathsWtLogin.some(path => {
        //           //         return this.router.url.indexOf(path) === 0; // current path starts with this path string
        //           //     })
        //           // ) {
        //           //     this.router.navigate(['/home']);
        //           // }
        //       } else {
        //         this.isRegistrationPage = (response['registrationProcess']) ? false : true;
        //         // if (this.pathsWtLogin.some(path => {
        //         //     if(path==='/home' && this.router.url.indexOf(path) === 0){ // hack for home-practice pages
        //         //       return this.router.url.indexOf(path+'-') !== 0;
        //         //     }
        //         //     return this.router.url.indexOf(path) === 0; // current path starts with this path string
        //         //   })
        //         // ) {
        //         //   if(!this.isRegistrationPage){
        //         //     this.router.navigate(["/dashboard"]).then(() => {});
        //         //   }
        //         // }
        //           this.isLoggedIn = true;
        //           this.isPageHeading = true;
        //           this.userName = response['userName'];
        //           this.profilePicture = response['profilePicture'];
        //           this.reset();
        //           localStorage.setItem('activeRegistrationPage', response['activeRegistrationPage']);
        //           localStorage.setItem('registrationCompleted', response['registrationProcess']);
        //       }
        //   });

          this.isSignUpPage = !(this.router.url === '/sign-up') ? true : false;
          this.checkDashLink();
          // this.maIsOpen = this.router.url.indexOf('/my-account') === 0;
          this.isHeaderHidden = [
              '/forgot-password',
              '/create-password',
              '/reset-password',
              '/login'
          ].some(path => {
              return this.router.url.indexOf(path) === 0; // current path starts with this path string
          })
              ? true
              : false;

          window.scrollTo(0, 0);
          clearInterval(this.interval);
          // this.interval = setInterval(() => {
          //     if (
          //         this.isLoggedIn &&
          //         document.hasFocus()
          //     ) {
          //         this.authService
          //             .updatesessionTime({
          //                 showSpinner: false,
          //                 focus: true
          //             })
          //             .subscribe();
          //     }
          // }, 10000);
      });
  }
}
