'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Permissions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            isEmployeesRead: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isEmployeeCreate: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isEmployeeUpdate: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isEmployeeDelete: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isTeamsRead: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isTeamsCreate: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isTeamsUpdate: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isTeamsDelete: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isHolidaysCreate: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isHolidaysUpdate: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isHolidaysDelete: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isSalariesRead: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isSalariesUpdate: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isPotentialEmployeesRead: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isPotentialEmployeesCreate: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isPotentialEmployeesUpdate: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isPotentialEmployeesDelete: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isSickDaysRead: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isWorkingTimesRead: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isRoles: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isVacationBalanceUpdate: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            isVacationRead: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            RoleId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Roles',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Permissions');
    },
};
