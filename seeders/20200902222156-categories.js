'use strict';

var catArr = [
    { name: "Random", id: 1 },
    { name: "General Knowledge", id: 9 },
    { name: "Entertainment: Books", id: 10 },
    { name: "Entertainment: Film", id: 11 },
    { name: "Entertainment: Music", id: 12 },
    { name: "Entertainment: Musicals & Theatres", id: 13 },
    { name: "Entertainment: TV", id: 14 },
    { name: "Entertainment: Video Games", id: 15 },
    { name: "Entertainment: Board Games", id: 16 },
    { name: "Science & Nature", id: 17 },
    { name: "Science: Computers", id: 18 },
    { name: "Science: Mathematics", id: 19 },
    { name: "Mythology", id: 20 },
    { name: "Sports", id: 21 },
    { name: "Geography", id: 22 },
    { name: "History", id: 23 },
    { name: "Politics", id: 24 },
    { name: "Art", id: 25 },
    { name: "Celebrities", id: 26 },
    { name: "Animals", id: 27 },
    { name: "Vehicles", id: 28 },
    { name: "Entertainment: Comics", id: 29 },
    { name: "Science: Gadgets", id: 30 },
    { name: "Entertainment: Japanese Anime & Manga", id: 31 },
    { name: "Entertainment: Cartoons & Animation", id: 32 }
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
        catArr.forEach(e => {
            e.createdAt = new Date();
            e.updatedAt = new Date();
        });
        
        await queryInterface.bulkInsert('Categories', catArr);


    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

         await queryInterface.bulkDelete('Categories', null, {})
    }
};
