let boton = document.getElementById('send-button');

boton.addEventListener('click', () =>{
    let n = document.getElementById('txtName').value;
    let e = document.getElementById('txtEmail').value;
    let o = document.getElementById('txtOpt').value;
    let m = document.getElementById('txtMensaje').value;

    let mensaje = {
        name : n,
        email : e,
        opt: o,
        mensaje: m
    }

    let url = "https://matiasmsgshop.pythonanywhere.com/mensajes"

    var options = {
        body: JSON.stringify(mensaje),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }

    fetch(url, options)
    .then(function () {
        console.log("mensaje enviado")
        alert("Mensaje enviado!");
        location.reload();
    })
    .catch(err => {
        console.error(err);
    })
})