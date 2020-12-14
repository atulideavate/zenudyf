import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public loginForm: FormGroup;
  private data: any;
  public msg='';
  isLoggedIn:boolean=false;
  constructor(private authService: AuthService,
    public router: Router ) { 
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      email_id: new FormControl('', { validators: [Validators.required,Validators.email] }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
    
  }
  signIn() {
    if (this.loginForm.valid) {
      const form = JSON.parse(JSON.stringify(this.loginForm.value));
      form['password'] = encodeURIComponent(this.loginForm.value['password']);
      this.authService.login(form).subscribe(
          result => {
            this.data = result;
            if (this.data.status === true) {
              localStorage.setItem('userId', this.data.userId);
              this.isLoggedIn=true;
              this.router.navigate(['/home']);

             
          } else {
             this.msg="Email and Password does not match ";
          }
        });
      }

  }//signin

}

