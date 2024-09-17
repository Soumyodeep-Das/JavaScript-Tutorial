// High Order Functions

// A function that takes a function as an argument


// example of HighOrder Function
function add(a,b, cb) { // cb for callback
    const result = a+b;
    cb(result)
}

addV1(3, 4, function (val){
    console.log(val)
})

addV2(3, 4, val => console.log(val))
        //  val --> argument

// Function that returns a function

function sub(a,b,cb){
    return () => {
        const result = a-b;
        console.log(result)
    }
}

sub(4,3, () => {})