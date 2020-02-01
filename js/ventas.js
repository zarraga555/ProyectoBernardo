var listaVentas = [];

class añadir {
  guardarLista(vlist){
    localStorage.setItem('listaVenta', JSON.stringify(vlist));
  }

  
  añadirVentas(vid, vnombre, vproducto, vprecio, vcantidad, vtotal) {
    var nuevaVenta = {
      nit: vid,
      nombre: vnombre,
      producto: vproducto,
      precio: vprecio,
      cantidad: vcantidad,
      total: vtotal
    };
    console.log(nuevaVenta);
    listaVentas.push(nuevaVenta);
    this.guardarLista(listaVentas);
  }
}

var cm = new añadir();

function guardarVentas() {
  var gid = document.querySelector("#nit").value;
  var gnombre = document.querySelector("#nombre").value;
  var gproducto = document.querySelector("#producto").value;
  var gprecio = document.querySelector("#precio").value;
  var gcantidad = document.querySelector("#cantidad").value;
  var gtotal = document.querySelector("#total").value;
  cm.añadirVentas(gid, gnombre, gproducto, gprecio, gcantidad, gtotal);
  mostrarLista();
}

function mostrarLista() {
  var list = listaVentas;
  var localList = localStorage.getItem('listaVentas');
  if(localList == null){
    listaVentas = [];
  }else{
    listaVentas = JSON.parse(localList);
  }
  var tab = document.querySelector("#tabla");
  tab.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    var row = tab.insertRow(i);
    var nitCell = row.insertCell(0);
    var nomCell = row.insertCell(1);
    var prodCell = row.insertCell(2);
    var preCell = row.insertCell(3);
    var cantCell = row.insertCell(4);
    var totCell = row.insertCell(5);
    nitCell.innerHTML = list[i].id;
    nomCell.innerHTML = list[i].nombre;
    prodCell.innerHTML = list[i].producto;
    preCell.innerHTML = list[i].precio;
    cantCell.innerHTML = list[i].cantidad;
    totCell.innerHTML = list[i].total;

    tab.appendChild(row);
  }
}