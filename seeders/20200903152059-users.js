'use strict';

var userArr = [
  {
      "id": 1,
      "email": "cwuzhear@gmail.com",
      "password": "$2a$10$ZYwRmhjYqbIoyZ/APLYQZevXdWza2Hgwx8Ilp6U4YlIhmfJQqog/G",
      "username": "cwuzhear",
      "createdAt": "2020-09-03 14:05:34",
      "updatedAt": "2020-09-03 14:05:34"
  },
  {
      "id": 2,
      "email": "111@aaa.com",
      "password": "$2a$10$kRHG7tVgt.n1//6LS0byTe4rIU629mFCeZVdMsgbIjVI8QWEo7.5.",
      "username": "chris",
      "createdAt": "2020-09-03 14:28:53",
      "updatedAt": "2020-09-03 14:28:53"
  }
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   await queryInterface.bulkInsert('Users', userArr);


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
