export default class ContactModel {
  phone: string;
  email: string;
  website?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;

  constructor(props: ContactModel) {
    this.phone = props.phone;
    this.email = props.email;
    this.website = props.website;
    this.facebook = props.facebook;
    this.twitter = props.twitter;
    this.instagram = props.instagram;
  }
}
