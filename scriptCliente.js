var listaClientes = [];
//mostrarLista();
class añadir {
  guardarLista(glist){
    localStorage.setItem('listaCliente', JSON.stringify(glist));
  }

  getListaClientes(){
    var localList = localStorage.getItem('listaCliente');
    if(localList == null){
      listaClientes = [];
    }else{
      listaClientes = JSON.parse(localList);
    }
    return listaClientes;
  }
  
  añadirClientes(cid, cnombre) {
    var nuevoCLiente = {
      id: cid,
      nombre: cnombre
    };
    console.log(nuevoCLiente);
    listaClientes.push(nuevoCLiente);
    this.guardarLista(listaClientes);
  }
}

var cm = new añadir();

function guardarCliente() {
  var gid = document.querySelector("#ci").value;
  var gnombre = document.querySelector("#nombre").value;
  cm.añadirClientes(gid, gnombre);
  mostrarLista();
}

function mostrarLista() {
  var list = cm.getListaClientes();
  var tab = document.querySelector("#tabla");
  tab.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    var row = tab.insertRow(i);
    var ciCell = row.insertCell(0);
    var nomCell = row.insertCell(1);
    ciCell.innerHTML = list[i].id;
    nomCell.innerHTML = list[i].nombre;

    tab.appendChild(row);
  }
}
function editar() {
  var list = listaClientes;
  for (var i = 0; i < list.length; i++) {
    if (list[i].id == document.querySelector("#ci").value) {
      list[i].id = document.querySelector("#ci").value;
      list[i].nombre = document.querySelector("#nombre").value;
      cm.guardarLista(list);
      for (var i = 0; i < list.length; i++) {
        console.log(listaClientes[i].nombre)
      }
      mostrarLista();
    }
  }
}