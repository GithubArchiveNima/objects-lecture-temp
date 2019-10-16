console.log('Hello world!')

// Bunch of data about my friends

const friends = [
    ['Bradlina', 'red', 456],
    ['Kristoferetta', 'pale violet'],
    ['Jimothina', 'azure'],
    ['Cthulhu', 'chartreuse'],
    ['Noahette', 'void']
]

// I need to loop through two different arrays
for (const friend of friends) {
    const friendName = friend[0]
    const friendColour = friend[1]
    console.log(friendName, friendColour)
}


// Array of arrays, Robert