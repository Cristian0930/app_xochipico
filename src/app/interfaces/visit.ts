export interface VisitRequest {
    name:       string;
    date:       Date;
    persons:    string;
    hour:       string;
}

export interface VisitResponse {
    name:       string;
    date:       Date;
    hour:       string;
    persons:    string;
    user_id:    number;
    updated_at: Date;
    created_at: Date;
    id:         number;
}
