function findYoungestPerson(persons) {
    var minAge = Number.MAX_VALUE;
    var minAgeIndex = 0;

    for(var index in persons){
        if(persons[index].age < minAge){
            minAge = persons[index].age;
            minAgeIndex = index;
        }
    }

    console.log('The youngest person is ' + persons[minAgeIndex].firstname + ' ' + persons[minAgeIndex].lastname);
}

var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}];

findYoungestPerson(persons);