class Contact {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

class ContactManager {
	constructor() {
		// Cuando se crea contact manager, 
		// la lista de contactos está vacía
		this.listOfContacts = [];
	}
	
	add(contact) {
		this.listOfContacts.push(contact);
	}
	
	remove(contact) {
		for(let i = 0; i < this.listOfContacts.length; i++) { 
			var c = this.listOfContacts[i];

			if(c.email === contact.email) {
				// eliminar el contacto i
				this.listOfContacts.splice(i, 1);
				// salir del ciclo
				break;
			}
		}
	}
	
	sort() {
		
		this.listOfContacts.sort(ContactManager.compareByName);
	}
	
	// Método para comparar por nombre
	static compareByName(c1, c2) {
		// JavaScript tiene "builtin capabilities" para comparar
		// cadenas en orden alfabetico
		if (c1.name < c2.name)
     		return -1;
		
    	if (c1.name > c2.name)
     		return 1;
  
    	return 0;
	}
	
	printContactsToConsole() {
		this.listOfContacts.forEach(function(c) {
			console.log(c.name);
		});
	}
}

// para testear el código
var cm = new ContactManager();
var c1 = new Contact("Jimi Hendrix", "jimi@rip.com");
var c2 = new Contact("Robert Fripp", "robert.fripp@kingcrimson.com");
var c3 = new Contact("Angus Young", "angus@acdc.com");
var c4 = new Contact("Arnold Schwarzenneger", "T2@terminator.com");

console.log("--- Adding 4 contacts ---")
cm.add(c1);
cm.add(c2);
cm.add(c3);
cm.add(c4);

cm.printContactsToConsole();

// eliminando el contacto c2
console.log("--- borrando el segundo! ---");
cm.remove(c2);


cm.printContactsToConsole();


console.log("--- ordenando contacts ---");
cm.sort();
cm.printContactsToConsole();

