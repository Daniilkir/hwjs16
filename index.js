import users from "/users.js"



const getUserNames = (users) => {
  return users.map(user => user.name);
};

const userNames = getUserNames(users);
console.log(userNames);

const getUsersByEyeColor = (users, eyeColor) => {
    return users.filter(user => user.eyeColor === eyeColor);
  };
  
const blueEyesUsers = getUsersByEyeColor(users, "blue");
console.log(blueEyesUsers);

const getUserNamesByGender = (users, gender) => {
    return users
      .filter(user => user.gender === gender)
      .map(user => user.name);
  };

const maleUserNames = getUserNamesByGender(users, "male");
console.log(maleUserNames);

const getInactiveUsers = (users) => {
    return users.filter(user => !user.isActive);
  };

const inactiveUsers = getInactiveUsers(users);
console.log(inactiveUsers);

  const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
  };
  
  console.log(getUserWithEmail(users, 'johndoe@example.com'));

  const getUsersWithAge = (users, min, max) => {
    return users.filter(user => min <= user.age && user.age <= max);
  }

  const usersInRange = getUsersWithAge(users, 10, 50);
console.log(usersInRange);