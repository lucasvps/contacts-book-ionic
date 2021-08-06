export class Contact {

    private _name: string;
    private _phone: string;
    private _birthDate: string;
    private _gender: string;

    constructor(name: string, phone: string, gender: string, birthDate: string){
        this._name = name;
        this._phone = phone
        this._gender = gender;
        this._birthDate = birthDate
    }

    public getName(): string {
        return this._name;
    }

    public setName(name: string){
        this._name = name;
    }

    public getPhone(): string {
        return this._phone;
    }

    public setPhone(phone: string){
        this._phone = phone;
    }

    public getBirthDate(): string {
        return this._birthDate;
    }

    public setBirthDate(birthDate: string){
        this._birthDate = birthDate;
    }

    public getGender(): string {
        return this._gender;
    }

    public setGender(gender: string){
        this._gender = gender;
    }

}
