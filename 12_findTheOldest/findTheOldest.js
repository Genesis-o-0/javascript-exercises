const findTheOldest = function (arrayOfPersons) {
  return arrayOfPersons.reduce((oldestPerson, currentPerson) => {
    const ageOfOldest = getAge(oldestPerson);
    const ageOfCurrent = getAge(currentPerson);
    return ageOfOldest > ageOfCurrent ? oldestPerson : currentPerson;
  });
};

const getAge = (person) => {
  if (!person.yearOfDeath) {
    const yearOfDeath = new Date().getFullYear();
    return yearOfDeath - person.yearOfBirth;
  }
  return person.yearOfDeath - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
