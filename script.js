class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  amIOlderThen = function (otherUser){

    if(this.age === undefined || otherUser.age === undefined)
        throw `impossibile verificare chi è più vecchio`


    if(otherUser.age < this.age)
        return `${otherUser.firstName} è più giovane di me`

    if(this.age < otherUser.age )
    return `Sono più giovane di ${otherUser.firstName}`;

    return `Abbiamo la stessa età`;
}
}


const tonio = new User('Antonio', 'Costantini', 23, 'Erchie')

console.log('First User', tonio)

const alison = new User('alice', 'pasca', 11, 'San Michele')

console.log('Second User', alison)
console.log(tonio.amIOlderThen(alison))