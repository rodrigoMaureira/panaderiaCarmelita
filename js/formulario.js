< !DOCTYPE html >

    <
    html > < head > < title > Ejemplo aprenderaprogramar.com < /title><meta charset="utf-8">

<
style type = "text/css" > body {
    background - color: yellow;
    font - family: sans - serif;
}
label { color: maroon;display: block;padding: 5 px; }

<
/style>

<
script type = "text/javascript" >

    window.onload = function() {

        document.formularioContacto.nombre.focus();

        document.formularioContacto.addEventListener('submit', validarFormulario);

    }



function validarFormulario(evObject) {

    evObject.preventDefault();

    var todoCorrecto = true;

    var formulario = document.formularioContacto;

    for (var i = 0; i < formulario.length; i++) {

        if (formulario[i].type == 'text') {

            if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)) {

                alert(formulario[i].name + ' no puede estar vacío o contener sólo espacios en blanco');

                todoCorrecto = false;

            }

        }

    }

    if (todoCorrecto == true) { formulario.submit(); }

}



<
/script></head >

<
body > < div id = "cabecera" > < h1 > Portal web aprenderaprogramar.com < /h1><h2>Didáctica y divulgación de la programación</h
2 >

    <
    /div>

<!-- Formulario de contacto -->

<
form name = "formularioContacto"
class = "formularioTipo1"
method = "get"
action = "http://aprenderaprogramar.com" >

    <
    p > Si quieres contactar con nosotros envíanos este formulario relleno: < /p>

<
label
for = "nombre" > < span > Nombre: < /span> <input id="nombre" type="text" name="nombre" / > < /label>

<
label
for = "apellidos" > < span > Apellidos: < /span> <input id="apellidos" type="text" name="apellidos" / > < /label>

<
label
for = "email" > < span > Correo electrónico: < /span> <input id="email" type="text" name="email" / > < /label>

<
label > < input type = "submit"
value = "Enviar" > < input type = "reset"
value = "Cancelar" > < /label>

<
/form></body > < /html>