export class Address {
  street: string;
  number: string;
  portal: string;
  stair: string;
  floor: string;
  door: string;
  cp: string;
  latitude: string;
  longitude: string;

  constructor(
    street: '',
    number: '',
    portal: '',
    stair: '',
    floor: '',
    door: '',
    cp: '',
    latitude: '',
    longitude: ''
  ) {
    this.street = street;
    this.number = number;
    this.portal = portal;
    this.stair = stair;
    this.floor = floor;
    this.door = door;
    this.cp = cp;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export class UsuarioModel {
  email: string;
  password: string;
  name: string;
  connection_id: number;
  partner_id: number;
  type: string;
  connected: boolean;
  phone_number: number;
  id: number;
  full_name: string;
  address: Address;
  date: string;
  avatar: any;
  error: number;
  group: string;

  constructor() {
    this.email = ''; 
    this.password = '';
    this.name = '';
    this.connection_id = 0;
    this.partner_id = 0;
    this.type = '';
    this.connected = false;
    this.phone_number = 0; 
    this.id = 0;
    this.full_name = '';
    this.date = '';
    this.avatar = '';
    this.error = 0;
    this.group = '';
  }
}
