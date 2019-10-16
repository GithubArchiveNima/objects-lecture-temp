const sayHello = function (person) {
    console.log('Hello,', person['name'])
    person['dislikes'] = 'Rain'
}

const tim = {
    name: 'Tim',
    hobby: 'Baking',
    likes: 'Magnets',
    dislikes: 'Peoples knees'
}

sayHello(tim)
console.log(tim)


const sayHelloString = function (name) {
    console.log("Hello,", name)
    name = 'Bartholomew'
    console.log('Hello', name)
}

sayHelloString(tim['name'])
console.log(tim)