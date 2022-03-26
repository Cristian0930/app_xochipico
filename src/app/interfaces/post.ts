export interface Post {
    id:          number;
    title:       string;
    body:        string;
    url_image:   string;
    category_id: number;
    created_at:  Date;
    updated_at:  Date;
    category:    Category;
}

export interface Category {
    id:         number;
    name:       string;
    created_at: Date;
    updated_at: Date;
}