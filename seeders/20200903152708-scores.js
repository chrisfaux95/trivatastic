'use strict';

var scoresArr = [
    { score: 5000, categoryId: 9, userId: 2 },
    { score: 10, categoryId: 9, userId: 2 },
    { score: 69, categoryId: 16, userId: 1 },
    { score: 420, categoryId: 32, userId: 1 }
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
        scoresArr.forEach(e => {
            e.createdAt = new Date();
            e.updatedAt = new Date();
        })
        await queryInterface.bulkInsert('Scores', scoresArr);

    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete('Scores', null, {})
    }
};
