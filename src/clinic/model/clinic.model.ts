export class clinicLoginDTO {
    username: string;
    password: string;
}

export class clinicDTO {
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    doctors: [string]
}

export class pushTokenDTO {
    pushToken: string;
    clinicId: string;
}