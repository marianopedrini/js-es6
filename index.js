// 1) Transformador de urls
function parseUrl(urlString) {
    // Quitamos la primer barra del string
    urlString = urlString.substring(1);

    // Utilizamos el metodo split para separar el string por /
    return urlString.split('/');
}

const segmentsArray = parseUrl(`/en-US/docs/Web/API/URL/pathname`);
console.log(segmentsArray);

// 2) Pares e impares
const randomNumbers = [7, -11, 5, 18, 3, 9, 14, 1, 6, -22];

const orderNumbers = (array) => {
    let evenNumbers = [];
    let oddNumbers = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element % 2 === 0
            ? evenNumbers.push(element)
            : oddNumbers.push(element);
    }

    return [evenNumbers, oddNumbers];
};

const [evenNumbers, oddNumbers] = orderNumbers(randomNumbers);

// 3) ¿Aprobado o desaprobado?
const students = [
    { id: 1, name: 'Juan', age: 20, grade: 2 },
    { id: 2, name: 'Nicolas', age: 22, grade: 6 },
    { id: 3, name: 'Agustín', age: 23, grade: 8 },
    { id: 4, name: 'David', age: 21, grade: 4 },
    { id: 5, name: 'Camila', age: 20, grade: 3.5 },
];

const addStatusToStudents = (students) => {
    // Tu codigo acá
    return students.map((student) => {
        const status = student.grade >= 5 ? 'aprobado' : 'desaprobado';
        return { ...student, status };
    });
};

const studentsWithStatus = addStatusToStudents(students);

const approbedStudents = studentsWithStatus.filter(
    (student) => student.status === 'aprobado'
);
const disapprovedStudents = studentsWithStatus.filter(
    (student) => student.status === 'desaprobado'
);

console.log(approbedStudents);
console.log(disapprovedStudents);
