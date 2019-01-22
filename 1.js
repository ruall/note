function test(person) {
    person.age = 26
    person = {
        name: 'yyy',
        age: 30
    }
    return person
}

const p1 = {
    name: 'lhj',
    age: '24'
}
const p2 = test(p1)
console.log(p1) // {name:'lhj',age:'26'}
console.log(p2) // {name:'yyy',age:'30'}