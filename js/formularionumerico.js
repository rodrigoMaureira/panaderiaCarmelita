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

    if (isNaN(formulario.edad.value) == true || /^[1-9]\d$/.test(formulario.edad.value) == false) {
        alert('Edad no valida');
        todoCorrecto = false;
    }

    if (isNaN(formulario.altura.value) == true || formulario.altura.value <= 0 || formulario.altura.value >= 2.50) {

        alert('Altura no valida');
        todoCorrecto = false;
    }

    if (todoCorrecto == true) { formulario.submit(); }

}

<
/script></head >

<
body > < div id = "cabecera" > < h1 > Portal web aprenderaprogramar.com < /h1><h2>Didáctica y divulgación de la programación</h
2 > < /div>

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
for = "apellidos" > < span > Edad: < /span> <input id="edad" type="text" name="edad" / > < /label>

<
label
for = "email" > < span > Altura: < /span> <input id="altura" type="text" name="altura" / > < /label>

<
label > < input type = "submit"
value = "Enviar" > < input type = "reset"
value = "Cancelar" > < /label>

<
/form></body > < /html>