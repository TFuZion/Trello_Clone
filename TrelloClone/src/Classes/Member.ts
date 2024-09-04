export class Member {
    id: number;
    firstName: string;
    lastName: string;
    profilePicture: string | undefined;

    constructor(id: number, firstname: string, lastname: string ){
        this.id = id;
        this.firstName = firstname;
        this.lastName = lastname;
    }
}