export class Member {
    constructor(
        public fullname: string,
        public email: string,
        public password: string,
        public sex: string,
        public edu: string,
        public isSubscribe?: boolean

    ) { }
}