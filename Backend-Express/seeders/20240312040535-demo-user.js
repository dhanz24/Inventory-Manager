'use strict';

const hash = require("../utils/hash");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        user_id : 1,
        firstName: 'admin',
        lastName: '',
        email: 'admin@gmail.com',
        password: hash('123'),
        role: 'admin',
        no_hp: '08123456789',
        foto_url: 'http://example.com/path/to/jane_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id : 2,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        password: hash('password123'),
        role: 'user',
        no_hp: '08123456789',
        foto_url: 'http://example.com/path/to/john_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id : 3,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@gmail.com',
        password: hash('password456'),
        role: 'user',
        no_hp: '08123456789',
        foto_url: 'http://example.com/path/to/jane_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id : 4,
        firstName: 'Michael',
        lastName: 'Johnson',
        email: 'michael.johnson@gmail.com',
        password: hash('password789'),
        role: 'user',
        no_hp: '08123456789',
        foto_url: 'http://example.com/path/to/michael_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id : 5,
        firstName: 'Sarah',
        lastName: 'Williams',
        email: 'sarah.williams@gmail.com',
        password: hash('passwordabc'),
        role: 'user',
        no_hp: '08123456789',
        foto_url: 'http://example.com/path/to/sarah_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id : 6,
        firstName: 'David',
        lastName: 'Brown',
        email: 'david.brown@gmail.com',
        password: hash('passworddef'),
        role: 'user',
        no_hp: '08123456789',
        foto_url: 'http://example.com/path/to/david_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id : 7,
        firstName: 'Emily',
        lastName: 'Taylor',
        email: 'emily.taylor@gmail.com',
        password: hash('passwordghi'),
        role: 'user',
        no_hp: '08123456789',
        foto_url: 'http://example.com/path/to/emily_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id : 8,
        firstName: 'Daniel',
        lastName: 'Anderson',
        email: 'daniel.anderson@gmail.com',
        password: hash('passwordjkl'),
        role: 'user',
        no_hp: '08123456789',
        foto_url: 'http://example.com/path/to/daniel_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id : 9,
        firstName: 'Olivia',
        lastName: 'Thomas',
        email: 'olivia.thomas@gmail.com',
        password: hash('passwordmno'),
        role: 'user',
        no_hp: '08123456789',
        foto_url: 'http://example.com/path/to/olivia_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id : 10,
        firstName: 'James',
        lastName: 'Wilson',
        email: 'james.wilson@gmail.com',
        password: hash('passwordpqr'),
        role: 'user',
        no_hp: '08123456789',
        foto_url: 'http://example.com/path/to/james_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }


    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
