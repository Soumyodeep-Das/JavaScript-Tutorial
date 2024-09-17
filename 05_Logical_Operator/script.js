// Logical Operator
// AND (&&) All conditions should be true

const age = 20
const gender = 'male'

if (age >= 18 && gender == 'male')
    console.log('Adult Male')

// OR (||) Atleast one condition have to be true

if (age >= 18 && gender == 'female')
    console.log('Adult')

// NOT(!)

const num = 5

if(num%2 == 0)
    console.log(num+' is Even')

if(num%2 != 0) // NOT opeator used
    console.log(num+' is Odd')