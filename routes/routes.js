const express = require('express');
const routes = express.Router();
const {
    getMenuItems,
    addMenuItem,
    getMenuItem,
    deleteMenuItem,
    updateMenuItem
} = require('../controllers/menuControllers');

routes.route('/').get(getMenuItems).post(addMenuItem)
routes.route('/:id').get(getMenuItem).delete(deleteMenuItem).put(updateMenuItem)

module.exports = routes;