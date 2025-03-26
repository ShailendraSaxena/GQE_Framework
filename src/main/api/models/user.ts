class User {
    id    : number;
    name  : string;
    email : string;
    gender: string;
    status: string;

    constructor(id:number, name:string, email:string, gender:string, status:string){
        this.id     = id;
        this.name   = name;
        this.email  = email;
        this.gender = gender;
        this.status = status;

    }
}

export { User}