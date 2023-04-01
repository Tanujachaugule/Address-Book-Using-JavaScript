console.log("Welcome To Address Book")
class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
    }

    get firstName() { 
        return this._firstName; 
    }
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
        this._firstName = firstName;
        else throw 'First Name is Incorrect !';
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastName))
        this._lastName = this.lastName;
        else throw 'Last Name is Incorrect !';
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('[A-Za-z]{4,}$');
        if(addressRegex.test(address))
        this._address = this.address;
        else throw 'Address is Incorrect !';
    }

    get city() {
        return this._city;
    }
    set city(city) {
        let cityRegex = RegExp('[A-Za-z]{4,}$');
        if(cityRegex.test(city))
        this._city = city;
        else throw 'City is Incorrect !';
    }

    get state() {
        return this._state;
    }
    set state(state) {
        let stateRegex = RegExp('[A-Za-z]{4,}$');
        if(stateRegex.test(state))
        this._state = state;
        else throw 'State is Incorrect !';
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp('^\d{5}(?:[-\s]\d{4})?$');
        if(zipRegex.test(zip))
        this._zip = zip;
        else throw 'zip is Incorrect !';
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('((91){1})[ ]([98765]{1})([0-9]{9})$');
        if(phoneNumberRegex.test(phoneNumber))
        this._phoneNumber = this.phoneNumber;
        else throw 'Phone Number is Incorrect !';
    }

    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp('^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$');
        if(emailRegex.test(email))
        this._email = this.email;
        else throw 'Email is Incorrect !';
    }

    toString() {
        return "\nFirstName : " +this.firstName+ "\nLastName : " +this.lastName+ "\nAddress :" +this.address+ 
        "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip : " +this.zip+ "\nPhoneNumber : " +this.phoneNumber+ 
        "\nemail : " +this.email;
    }
}

let addressBook = new AddressBook("Tanuja", "Chaugule", "NaigaonEast", "Vasai", "Maharashtra", 400014, 987654321, "tanuja.chaugule03@gmail.com");
console.log(addressBook.toString());
let addressBook1 = new AddressBook("Priya", "Thakur", "Math", "Vengurle", "Maharashtra", 413308, 6715324562, "Priya@ab.dgf.df");
console.log(addressBook1.toString());
//UC2
try {
    addressBook1.setfirstName = "pr";
    console.log(addressBook1.toString());
} catch (e) {
    console.error(e);
}

//UC3
let addressBook2 = new AddressBook("Tanmay", "Chaugule", "Terdal", "Bijapur", "Karnataka", 435657, 9028363759,"tanmaychaugule55@Sgmail.com",);
let addressBookArray= new Array();
addressBookArray.push(addressBook);
addressBookArray.push(addressBook1);
addressBookArray.push(addressBook2);
console.log("\nNew Contact Added to Array " +addressBookArray);

//UC4
let obj = addressBookArray.find((a) => a.firstName === 'Chaugule');
if (obj != undefined) {
  addressBookArray.pop();
  obj.setFirstName('Shubham');
  obj.setLastName('Singh');
  obj.setAddress('Karnataka');
  obj.setCity('Benguluru');
  obj.setState('Karanataka');
  obj.setZip(123456);
  obj.setPhone(345678912);
  obj.setEmail('shubhamsingh12@gmail.com');
  addressBookArray.push(obj);
  addressBookArray.forEach((a) => console.log(a.toString()));
} else {
  console.log('Not found');
}
//UC5
let objToDelete = addressBookArray.find((a) => a.firstName === 'Tanmay');
if (objToDelete != undefined) {
  addressBookArray.pop();
  console.log('Person found and record deleted');
  addressBookArray.forEach((a) => console.log(a.toString()));
} else {
  console.log('Not found');
}
//UC6 find count of contacts in address book
let count = addressBookArray.reduce(function count(c) {
    return c + 1;
  }, 0);
  console.log(count);
  //UC7 check duplicate entry
let newName = 'Tanuja';
let bool = addressBookArray.find((obj) => obj.firstName === newName);
console.log(bool);
//UC8  particular city or state
addressBookArray.forEach((obj) => {
    if (obj.city === 'Vasai') console.log(obj.toString());
  });
  addressBookArray.forEach((obj) => {
    if (obj.state === 'Maharashtra') console.log(obj.toString());
  });