function getAge(person) {
  return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
}

function getOlderPerson(p1, p2) {
  return getAge(p1) > getAge(p2) ? p1 : p2;
}
const findTheOldest = function (ps) {
  return ps.reduce(getOlderPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
