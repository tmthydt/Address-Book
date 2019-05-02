"use strict"




class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
 }
 
 class AddressBook {
    constructor() {
        this.contacts = [new Contact("Snoopy", "Snoopy@cooldog.com", "111-222-3333", "my dog"),
        new Contact("Porkchop", "Porkchop@cooldog.com", "333-444-5555", "a dog")
        ];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(`Index: ${i}, Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email},
            Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
        }
    }
 }
 
 const book = new AddressBook();
 
 while (true) {
    let choice = prompt("Add, Delete, Print, or Quit?");
    if (choice === "Quit") {
        console.log("Goodbye");
        break;
    } else if (choice === "Print") {
        book.print();
    } else if (choice === "Delete") {
        book.deleteAt(prompt("Index to delete?"));
    } else if (choice === "Add") {
        book.add(new Contact(
            prompt("Enter a name."),
            prompt("Enter an email."),
            prompt("Enter a phone number."),
            prompt("Enter a relation")
        ));
    }
 }