import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';

// ACTIONS
import { Login } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-view-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({});
  }

  public onSubmit() {
    this.store.dispatch(new Login(this.loginForm.getRawValue()));
  }
}
