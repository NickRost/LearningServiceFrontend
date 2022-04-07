import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public registerForm: FormGroup = {} as FormGroup;

  public hidePass = true;
  public hideConfirmPass = true;
  redirectUrl: string | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.validateForm();
    this.route.queryParams.subscribe((params) => {
      this.redirectUrl = params['redirect_url'];
    });
  }

  private validateForm() {
    this.registerForm = this.formBuilder.group(
      {
        workspaceName: [
          ,
          [
            Validators.required,
            Validators.pattern(
              // prettier-ignore
              '^[а-яА-ЯёЁa-zA-Z\`\'][а-яА-ЯёЁa-zA-Z-\`\' ]+[а-яА-ЯёЁa-zA-Z\`\']?$'
            ),
            Validators.minLength(3),
            Validators.maxLength(30),
          ],
        ],
        email: [
          ,
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        confirmPassword: [, [Validators.required]],
        password: [
          ,
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
            Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          ],
        ],
      },
      {

      }
    );
  }

  public registerUser() {
    
  }

  public googleLogin = (event: FocusEvent) => {

  };
}
