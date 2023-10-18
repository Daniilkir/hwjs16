const users = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      gender: "male",
      isActive: true,
      age: 28,
      eyeColor: "blue"
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      gender: "female",
      isActive: false,
      age: 32,
      eyeColor: "green"
    },
    {
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        eyeColor: "brown",
        gender: "male",
        isActive: true,
        age: 28,
      },
      {
        name: "Alice Brown",
        email: "alicebrown@example.com",
        eyeColor: "green",
        gender: "female",
        isActive: true,
        age: 32,
      }
  ];

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