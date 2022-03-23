export interface User {
    id?:             number;
    name:           string;
    first_surname:  string;
    second_surname: string;
    email:          string;
    role_id?:        number;
    updated_at?:     Date;
    created_at?:     Date;
}

export interface UserRequest {
    name:           string;
    first_surname:  string;
    second_surname: string;
    email:          string;
    password:       string;
}

export interface UserResponse {
    user:  User;
    token: string;
}