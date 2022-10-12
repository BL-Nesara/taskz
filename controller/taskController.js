const taskController = {
  index: async (req, res) => {
    res.render("index");
  },
  new: async (req, res) => {
    res.render("create");
  },
  edit: async (req, res) => {
    res.ender("update");
  },
};

module.exports = taskController;
