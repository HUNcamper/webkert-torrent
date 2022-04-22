export interface User {
    id: string;
    email: string;
    username: string;
    ratio: {
        download: number;
        upload: number;
    }
}
