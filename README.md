# Actividades

Es momento de ponerse manos a la obra. En esta serie de ejercicios pondremos a prueba conceptos que hemos visto en la clase y también deberan buscar información de nuevos metodos en la documentación de [MDN Web Docs](https://developer.mozilla.org/en-US/).\
Si un problema parece muy complejo o no puedes resolverlo no desesperes! Te dejo dos metodos muy interesantes (y simples) que pueden ayudarte a resolverlos:

- [Divide y vencerás](https://es.wikipedia.org/wiki/Algoritmo_divide_y_vencer%C3%A1s)
- [Patito de goma](https://es.wikipedia.org/wiki/M%C3%A9todo_de_depuraci%C3%B3n_del_patito_de_goma)

## 1) Transformador de urls

Una tarea común que tenemos los devs es manipular las urls. Esto nos puede servir para crear [breadcrums](https://es.wikipedia.org/wiki/Miga_de_pan_(inform%C3%A1tica)), para setear el estado activo de un link de nuestra navbar, etc.

Para este ejercicio debes crear una función que reciba un `string` como argumento y debe devolver un `array` que contenga cada segmento de nuestra url por separado. Por ejemplo:

Input: `/en-US/docs/Web/API/URL/pathname`\
Output: `['en-US', 'docs', 'Web', 'API', 'URL', 'pathname']`

```javascript
function parseURL(urlString) {
    // Tu codigo acá
}

const segmentsArray = parseURL(`/en-US/docs/Web/API/URL/pathname`);
console.log(segmentsArray) // ["en-US", "docs", "Web", "API", "URL", "pathname"]

```

***Extra:*** el metodo `window.location.pathname` te devolverá un string con el pathname de la url en la que te encuentras parado. Puedes probar tu nueva función `parseURL` en cualquier sitio utilizando este metodo en la consola del navegador.

## 2) Pares e impares

Dado un array con n cantidad de numeros enteros, devolver 2 arrays distintos: uno con los valores pares y otro con los impares

```javascript
const randomNumbers = [7, -11, 5, 18, 3, 9, 14, 1, 6, -22];

const orderNumbers = (array) => {
    let evenNumbers = [];
    let oddNumbers = [];

    // Tu codigo acá
}
```

***Extra***: recuerda que puedes hacer un [desestucturing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) del resultado de la función y dejar ambos arrays almacenados en distintas variables. Implementalo!

## 3) ¿Aprobado o desaprobado?

En este ejercicio deberás crear una función que recibirá un array de alumnos con sus respectivas notas, y debes agregarle a cada uno una nueva propiedad `status` con el valor `aprobado` o `desaprobado` dependiendo del valor de su nota.

Criterios:

- Si es mayor o igual a 4 deberá ser `aprobado`, sino el alumno estará `desaprobado`.
- No debes modificar el array original

```javascript
const students = [
    { id: 1, name: 'Juan', age: 20, grade: 2 },
    { id: 2, name: 'Nicolas', age: 22, grade: 6 },
    { id: 3, name: 'Agustín', age: 23, grade: 8 },
    { id: 4, name: 'David', age: 21, grade: 4 },
    { id: 5, name: 'Camila', age: 20, grade: 3.5 }
];

const addStatusToStudents = (students) => {
    // Tu codigo acá
    // Recuerda el metodo .map que hemos visto en la clase.
}
```

***Extra:*** por ultimo puedes crear 2 variables nuevas que almacenen a los alumnos aprobados y desaprobados. Recuerda que puedes utilizar el metodo `.filter()`
