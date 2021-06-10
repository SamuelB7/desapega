declare namespace Express {
    export interface Request {
        user: {
            id: string
        },

        session: {
            token: string
            user_id: string
        }
    }
}