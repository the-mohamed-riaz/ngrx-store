import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Do_login_action } from './action/auth.actions';
import { login_item } from './models/login-model';
import { AppState } from './store/state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app2';

  auth_state$!: Observable<Array<login_item>>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.auth_state$ = this.store.select(s => s.login);
  }

  addItem() {
    this.store.dispatch(Do_login_action({ payload: { user_email: 'abc@123', password: '1234' } }));
  }

}
