export class User{

  private _lastName: String;
  private _firstName: String;
  private _phoneNumber: String;
  private _adresse: String;
  private _mail: String;

  constructor(lastName: string, firstName: string, mail: String) {
    this._lastName = lastName;
    this._firstName = firstName;
  }


  get lastName(): String {
    return this._lastName;
  }

  get firstName(): String {
    return this._firstName;
  }

  get phoneNumber(): String {
    return this._phoneNumber;
  }

  set phoneNumber(value: String) {
    this._phoneNumber = value;
  }

  get adresse(): String {
    return this._adresse;
  }

  set adresse(value: String) {
    this._adresse = value;
  }
}
