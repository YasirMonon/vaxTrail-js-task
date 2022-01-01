/*============== ====================================================================== ===========

============================= JS Task's Solution for Programming Hero Job Hunter ==================

======================= ================================================= ========================*/



const personList = [
    {
        name: "Yasir",
        age: 22,
        temperature: 98
    },
    {
        name: "Monon",
        age: 36,
        temperature: 99
    },
    {
        name: "Mahbub",
        age: 42,
        temperature: 98
    },
    {
        name: "Rasel",
        age: 50,
        temperature: 100
    },
    {
        name: "Tania",
        age: 51,
        temperature: 101
    },
    {
        name: "Akhter",
        age: 37,
        temperature: 99
    },
    {
        name: "Tom",
        age: 41,
        temperature: 98
    },
    {
        name: "Katrina",
        age: 21,
        temperature: 98
    },
    {
        name: "Wayne",
        age: 55,
        temperature: 99
    },
    {
        name: "Elizabeth",
        age: 18,
        temperature: 99
    }
];

function vaxTrail(personListArray) {
    const booth = {
        A: [],
        B: [],
        C: [],
        D: []
    };
    personListArray.sort(function (a, b) {
        return (a.age % 2) - (b.age % 2) || a.age - b.age;
    });
    for (const person of personListArray) {
        if (person.temperature >= 100 || person.age < 20 || person.age > 50) {
            booth.D.push(person);
        } else if (person.age >= 41) {
            booth.C.push(person);
        } else if (person.age >= 31) {
            booth.B.push(person);
        } else {
            booth.A.push(person);
        }
    }

    return booth;
}

console.log(vaxTrail(personList));



/*============== if any problem occurs, requesting to visit my github link below ===========

============================= https://github.com/yasirmonon/ ============================

======================= thanks a lot for your precious time , best regards =================*/