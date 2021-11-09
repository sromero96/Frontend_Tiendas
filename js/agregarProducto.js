$(document).ready(function () {
    let id = 2;
    $("#agregarProducto").click(function () {
        let data = [];
        let nombre, cant, precio, result, total;
        nombre = document.getElementById('nombreProducto');
        let selected = nombre.options[nombre.selectedIndex].text;
        cant = document.getElementById('cantidadProducto').value;
        precio = parseInt(document.getElementById('valorProducto').value);
        subtotal = document.getElementById('totalProducto').value;
        subtotal = precio * cant;
        console.log("id: " + id + ", nombre: " + selected + ", cantidad: " + cant + ", precio: " + precio + ", subtotal: " + subtotal);
        data.push(
            {
                "id": id,
                "nombre": selected,
                "cantidad": cant,
                "valor": precio,
                "subtotal": subtotal
            }
        );
        console.log(data);
        // var id_row = cantidad;
        let filaTabla = '<tr><td> ' + id + '</td><td><select type="text" name="nombreProducto" id="nombreProducto" class="form-control"></select></td>' + '<td><input type="number" id="valorProducto" name="valorProducto" placeholder="Ingrese Precio" class="form-control">' +
            '</td><td> <input type="number" id="totalProducto" name="totalProducto" placeholder="0.00" class="form-control"></td>' + '</td><td> <input type="number" id="totalProducto" name="totalProducto" placeholder="0.00"class="form-control"></td></tr>';
        $("#tab_logic").append(filaTabla);
        $("#nombreProducto").val(data["nombre"]);
        $("#cantidadProducto").val(data["cantidad"]);
        $("#valorProducto").val(data["valor"]);
        $("#totalProducto").val(data["subtotal"]);
        id++;
        // if (cant != 'null') {
        //     var total = precio * cant;
        //     var result = document.getElementById('totalProducto').value = total;
        // }
    });
});