"use strict";
exports.__esModule = true;
exports.nameDecorators = void 0;
var admins = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'admin', name: 'Steve', age: 40, role: 'Steve' },
    { type: 'admin', name: 'Will Bruces', age: 30, role: 'Overseer' },
    { type: 'admin', name: 'Superwoman', age: 28, role: 'Customer support' }
];
var users = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'user', name: 'Moses', age: 70, occupation: 'Desert guide' },
    { type: 'user', name: 'Superman', age: 28, occupation: 'Ordinary person' },
    { type: 'user', name: 'Inspector Gadget', age: 31, occupation: 'Undercover' }
];
var isAdmin = function (person) { return person.type === 'admin'; };
var isUser = function (person) { return person.type === 'user'; };
exports.nameDecorators = [
    strReverse,
    strToLower,
    strToUpper,
    strRandomize,
    strInvertCase
];
function logPerson(person) {
    var additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    var randomNameDecorator = exports.nameDecorators[Math.round(Math.random() * (exports.nameDecorators.length - 1))];
    var name = randomNameDecorator(person.name);
    console.log(" - ".concat(name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
[]
    .concat(users, admins)
    .forEach(logPerson);
