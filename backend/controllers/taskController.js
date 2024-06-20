import Task from "../models/task.js";
import createError from "../utils/createError.js";

export const createTask = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const { type, title, priority, assignedTo, checklist, dueDate } = req.body;
    if (!type || !title || !priority || !checklist) {
      return next(createError(400, "All fields are requiered!"));
    }

    const newTask = await Task({
      userId: user._id,
      type,
      priority,
      title,
      checklist,
      dueDate,
      assignedTo,
    });

    await newTask.save();

    res.status(201).json({ message: "Task created successfully!" });
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findById(taskId);
    if (!task) return next(createError(404, "Task not found!"));

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// {
//     "type":"todo",
//     "title":"My First Task",
//     "priority":"moderate",
//     "assignedTo":"",
//     "checklist":[
//         {
//             "checked":true,
//             "task":"Finish the app work"
//         },
//         {
//             "checked":false,
//             "task":"Complete your homework"
//         },
//         {
//             "checked":true,
//             "task":"Do the dishes!"
//         }
//     ],
//     "dueDate":""
// }
