window.onload = init;

let pm;

function init(){
    pm = new productManager();
	
    pm.addTestData();
    pm.displayProductsAsATable("products");
}

function formSubmitted() {

	let name = document.querySelector("#name");
  	let model = document.querySelector("#model");
    let tipo = document.querySelector("#tipo");
    let marc = document.querySelector("#marc");
    let year = document.querySelector("#year");
    let newItem = new product(name.value, model.value, tipo.value, marc.value, year.value);
	pm.add(newItem);
	
	name.value = "";
    model.value = "";
    tipo.value = "";
    marc.value = "";
    year.value = "";
	
	pm.displayProductsAsATable("products");
	
	return false;
}

function emptyList() {
	pm.empty();
  	pm.displayProductsAsATable("products");
}

function loadList() {
	pm.load();
  	pm.displayProductsAsATable("products");
}

function editList(){
	pm.edit();
	pm.displayProductsAsATable("products");
}


class product{
    constructor(name, model, tipo, marc, year){
        this.name = name;
        this.model = model;
        this.tipo = tipo;
        this.marc = marc;
        this.year = year;
    }
}

class productManager{
    constructor(){
        this.listOfProducts = [];
    }

    addTestData() {
		let c1 = new product("Nombre", "Modelo", "Tipo", "Marca", "Año");
		
		this.add(c1);
	}
	
	empty() {
		this.listOfProducts = [];
	}
	
	add(product) {
		this.listOfProducts.push(product);
	}
	
	remove(product) {
		for(let i = 0; i < this.listOfProducts.length; i++) { 
			let c = this.listOfProducts[i];

			if(c.model === product.model) {
				
				this.listOfProducts.splice(i, i);
				
				break;
			}
		}
	}
	
	
	static compareByName(c1, c2) {
		
		if (c1.name < c2.name)
     		return -1;
		
    	if (c1.name > c2.name)
     		return 1;
  
    	return 0;
	}
	
	load() {
		if(localStorage.product !== undefined) {
			
			this.listOfProducts = JSON.parse(localStorage.product);
		}
	}
	
	save() {
		
		localStorage.product = JSON.stringify(this.listOfProducts);
	} 
	
	edit(){
		if(localStorage.product == document.querySelector("#name")){
			
		}
	}
    
    displayProductsAsATable(idOfContainer) {
		
    	let container = document.querySelector("#" + idOfContainer);
    	container.innerHTML = "";

		
		if(this.listOfProducts.length === 0) {
			container.innerHTML = "<p>No hay contactos en la lista!</p>";
			
			return;
		}  
  
    	let table = document.createElement("table");
          
    	this.listOfProducts.forEach(function(currentProduct) {
        	
        	let row = table.insertRow();
        
			row.innerHTML = "<td>" + currentProduct.name + "</td>"
                            + "<td>" + currentProduct.model + "</td>"
                            + "<td>" + currentProduct.tipo + "</td>"
                            + "<td>" + currentProduct.marc + "</td>"
                            + "<td>" + currentProduct.year + "</td>"
     	});
  
     	container.appendChild(table);
	}
}