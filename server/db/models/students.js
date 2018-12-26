const Sequelize = require('sequelize')
const db = require('../database')

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    }, 
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'student.jpeg'
    },
    gpa: {
        type: Sequelize.DECIMAL(10,2),
        validate: {
            min: 0.0,
            max: 4.0
        }
    }
})

module.exports = Student