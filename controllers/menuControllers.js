const { db } = require("../models/MenuItem")
const MenuItem = require("../models/MenuItem")

exports.getMenuItems = async (req, res, next) => {
    try {
        const items = await MenuItem.Menu.find()
        res.send(items)
    }
    catch (err) {
        next(err)
    }
}

exports.addMenuItem = async (req, res, next) => {
    try {
        const item = req.body
        const addeditem = await MenuItem.create(item)
        res.send(addeditem)
    }
    catch (err) {
        next(err)
    }
}

exports.getMenuItem = async (req, res, next) => {
    try {
        const { id } = req.params
        const item = await MenuItem.findById(id)
        res.send(item)
    }
    catch (err) {
        next(err)
    }
}

exports.deleteMenuItem = async (req, res, next) => {
    try {
        const { id } = req.params
        const deleteditem = await MenuItem.findByIdAndDelete(id, { new: true })
        res.send(deleteditem)
    }
    catch (err) {
        next(err)
    }
}