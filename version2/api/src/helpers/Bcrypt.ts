import bcrypt from "bcryptjs";

export default class Bcrypt {
    static async hash(password: string) {
        return bcrypt
            .genSalt(12)
            .then((salt) => bcrypt.hash(password, salt))
            .then((hash) => hash);
    }

    static async compare(password: string, hashPassword: string) {
        return bcrypt.compare(password, hashPassword).then((resp) => resp);
    }
}
