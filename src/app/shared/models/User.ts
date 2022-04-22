export interface User {
    email: string;
    password: string;
    username: string;
    ratio: {
        download: number;
        upload: number;
    }
}
