export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: { usermail: string; password: string }) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
