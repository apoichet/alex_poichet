import {Link} from './link';

export class User{

  private _lastName: String;
  private _firstName: String;
  private _phoneNumber: String;
  private _adresse: String;
  private _mail: String;
  private _profession: String;
  private _gitRepository: String;
  private _links: Link[];

  constructor(lastName: string, firstName: string, mail: String, profession: String) {
    this._lastName = lastName;
    this._firstName = firstName;
    this._mail = mail;
    this._profession = profession;
    this._gitRepository = 'https://github.com/apoichet';
    this._links = [new Link('http://www.univ-fcomte.fr', 'Université de Franche Comté - UFC'),
      new Link('http://www.afcepf.fr/', 'AFCEPF'),
      new Link('https://www.pluralsight.com', 'Pluralsight')];
  }


  get gitRepository(): String {
    return this._gitRepository;
  }

  set gitRepository(value: String) {
    this._gitRepository = value;
  }

  get links(): Link[] {
    return this._links;
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


  get mail(): String {
    return this._mail;
  }

  set mail(value: String) {
    this._mail = value;
  }


  get profession(): String {
    return this._profession;
  }
}
