const route = require("express").Router();
const taskController = require("../controller/taskController");

route.get(`/`, taskController.index);
route.get(`/create`, taskController.new);
route.get(`/edit/:id`, taskController.edit);
//query refrence =>/:id ie params
route.post(`/newTask`, taskController.create);
route.post(`/updateTask/:id`, taskController.updateTask);
route.get(`/delete/:id`, taskController.deleteTask);

module.exports = route;
