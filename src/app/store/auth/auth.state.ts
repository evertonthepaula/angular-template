import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

// ACTIONS
import { Login, Logout } from './auth.actions';

// SERVICES
import { AuthService } from 'src/app/services/auth.service';

// MODELS
import { AuthStateModel } from './auth.state.model';
import { Navigate } from '@ngxs/router-plugin';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    username: null,
    signed: false
  }
})
@Injectable()
export class AuthState {
  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return state.signed;
  }

  constructor(private authService: AuthService) { }

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authService.login(action.payload).pipe(
      tap(({ token, username }) => {
        ctx.patchState({ token, username, signed: true });
        ctx.dispatch(new Navigate(['/dashboard']));
      })
    );
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    const state = ctx.getState();
    return this.authService.logout(state.token).pipe(
      tap(() => {
        ctx.setState({ token: null, username: null, signed: false });
        ctx.dispatch(new Navigate(['/login']));
      })
    );
  }
}
