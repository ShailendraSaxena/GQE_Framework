import { usersEndpoint } from "../endpoints/Users";
import { User } from "../models/user";

class UsersPage {
    async getUsers(): Promise<User[]>
    {
        const response = await usersEndpoint();
        
        return response.map(user =>
            new User(user.id, user.name, user.email, user.gender, user.status)
        );

    }
}

export { UsersPage } 