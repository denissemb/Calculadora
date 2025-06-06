# Calculadora web básica

Se trata de una aplicación de calculador desarrollada con HTML, CSS y Javascript puro. Permite realizar operaciones matemáticas simples como suma, resta, ultuplicado y división, además de incluir funcionalidades como borrado de caracteres y reinicio de la pantalla.
También es responsive para poder verla/usarla en dispositivos móviles.

## Características

- Interfaz interactiva
- Funciones básica de una calculadora(+,-,*,/).
- Botón de borrado (<-) para eliminar el útimo carácter.
- Botón de limpieza (c) para reiniciar el contenido de la pantalla.
- Evaluación automática de expresiones con el botón =.

### Código principal

El núcleo principal esta en el manejo de los eventos de los botones mediante querySelectorAll y addEventListener.

#### Descripción:

    const pantalla = document.querySelector(".pantalla");
    const botones = document.querySelectorAll(".btn");

- Evento:

    boton.addEventListener("click", ()=> {...});

# Requisitos

No requiere de librerías externas.

# Cómo usar:

Clonar o descargar este repositorio
Abrir el archivo `index.html` en el navegador.
Interactuar con los botones realizando operaciones.

# Nota

Este pequeño proyecto es de uso libre para fines educativos y personales.