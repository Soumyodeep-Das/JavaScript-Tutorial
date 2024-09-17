// if-else

const age = 22

if (age > 60) {
    console.log('You are not eligible')
} else if (age < 18) {
    console.log('You are not eligible')
} else {
    console.log('You are eligible')
}

// Ternary Operator

age >= 18 ? console.log('Eligible') : console.log('Not Eligible')


// switch-case statement

const option = 4;

switch(option) {
    case 1: {
        console.log('Namaskar')
        break
    }
    case 2: {
        console.log('Namaste')
        break
    }
    case 3: {
        console.log('Hello')
        break
    }
    default: {
        console.log('Invalid Option')
        break
    }
}