export interface AuthApiRequestParams {
  usermail: string | null;
  password: string | null;
}

export interface AuthApiResponse {
  token: string | null;
  username: string | null;
}

