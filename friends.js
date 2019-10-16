console.log('Hello world!')

// Bunch of data about my friends

const friends = [
    'Bradlina',
    'Kristoferetta',
    'Jimothina',
    'Cthulhu',
    'Noahette'
]

const colours = [
    'red',
    'pale violet',
    'azure',
    'chartreuse',
    'void'
]

// for (let i = 0; i < friends.length; i++) {
//     console.log("Hello,", friends[i])
// }

for (const friend of friends) {
    console.log("Hello,", friend)
}

// Print out their names
// console.log("Hello,", friend2)
// console.log("Hello,", friend3)
// console.log("Hello,", friend4)
// console.log("Hello,", friend5)

// Print out their favourite colour
console.log('FAVOURITE COLOUR TIME! ****')

// I need to loop through two different arrays
for (const index in friends) {
    const friend = friends[index]
    const colour = colours[index]
    console.log(friend, colour)
}


// Array of arrays, Robert