export interface UserRequest {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface UserRequestLogin {
    email: string;
    password: string;
}