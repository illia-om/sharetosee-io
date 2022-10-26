export interface TSessionJwtPayload extends jwt.JwtPayload {
    s: string;
    t: number;
    n: number;
    m?: boolean;
}