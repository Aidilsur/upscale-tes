import Task from "../models/task.js";

// CREATE
export async function createTask(req, res, next) {
  try {
    const task = new Task({ ...req.body, userId: req.user.id });
    await task.save();
    res.status(201).json({ message: "Task created successfully", task });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

// READ
export async function getAllTask(req, res, next) {
  try {
    const { status } = req.query;
    let filter = {};

    if (status === "pending" || status === "done") {
      filter.status = status;
    }

    const tasks = await Task.find(filter)
      .populate("assignedTo", "username")
      .lean();

    res.json({
      message: "Tasks retrieved successfully",
      tasks,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

// UPDATE
export async function updateTask(req, res, next) {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({
      message: "Task updated successfully",
      task,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

// DELETE
export async function deleteTask(req, res, next) {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}
