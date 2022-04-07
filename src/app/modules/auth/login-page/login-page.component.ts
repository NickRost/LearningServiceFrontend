import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  //@Input() userLoginDto: UserLoginDto = {} as UserLoginDto;
  public loginForm: FormGroup = {} as FormGroup;

  public hidePass = true;
  public hideConfirmPass = true;

  redirectUrl: string | undefined;
  private videoId: number | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,

  ) {}

  ngOnInit() {
    this.validateForm();
    this.route.queryParams.subscribe((params) => {
      this.redirectUrl = params['redirect_url'];
      this.videoId = params['id'];
    });
  }

  private validateForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        ,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [
        ,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        ],
      ],
    });
  }

  public signIn() {
    
  }

  public googleLogin = (event: FocusEvent) => {

  };
}
