import Task from "../models/task.js";
import createError from "../utils/createError.js";

export const createTask = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const { type, title, priority, assignTo, checklist, dueDate } = req.body;

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
      assignedTo: assignTo,
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

export const getUserTasks = async (req, res, next) => {
  try {
    const queryParams = new URLSearchParams(req.query);

    let startDate;
    const endDate = new Date();

    switch (queryParams.get("filter")) {
      case "today":
        startDate = new Date();
        startDate.setHours(0, 0, 0, 0);
        break;
      case "week":
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 7);
        break;
      case "month":
        startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 1);
        break;
      default:
        return res.status(400).json({ error: "Invalid period specified" });
    }

    const user = req.user;
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const myTasks = await Task.find({
      $or: [{ userId: user._id }, { assignedTo: user.email }],
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    }).sort({ createdAt: -1 });

    res.status(200).json(myTasks);
  } catch (error) {
    next(error);
  }
};

export const updateCheckListTask = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const { taskId, checkId } = req.params;
    const { data } = req.body;

    const filter = {
      _id: taskId,
      "checklist._id": checkId,
    };
    const updateDoc = {
      $set: { "checklist.$.checked": data },
    };

    const result = await Task.updateOne(filter, updateDoc);
    // console.log(result);

    // if (result.matchedCount > 0) {
    //   console.log(`Successfully updated task`);
    // } else {
    //   console.log(`Task not found`);
    // }

    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const shiftTask = async (req, res, next) => {
  try {
    const queryParams = new URLSearchParams(req.query);
    const filter = queryParams.get("filter");

    const { taskId } = req.params;
    await Task.findByIdAndUpdate(taskId, { type: filter }, { new: true });

    res.status(200).json({ message: "Task updated successfully!" });
  } catch (error) {
    next(error);
  }
};

export const taskAnalytics = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const allTasks = await Task.find({
      $or: [{ userId: user._id }, { assignedTo: user.email }],
    });

    const counts = {
      priority: {
        low: 0,
        moderate: 0,
        high: 0,
      },
      status: {
        backlog: 0,
        todo: 0,
        progress: 0,
        done: 0,
      },
      dueDateTasks: 0,
    };

    allTasks.forEach((item) => {
      if (item.priority === "low") counts.priority.low++;
      if (item.priority === "moderate") counts.priority.moderate++;
      if (item.priority === "high") counts.priority.high++;

      // Count status
      if (item.type === "backlog") counts.status.backlog++;
      if (item.type === "todo") counts.status.todo++;
      if (item.type === "progress") counts.status.progress++;
      if (item.type === "done") counts.status.done++;

      // Count due date tasks
      if (item.dueDate) counts.dueDateTasks++;
    });

    res.status(200).json(counts);
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
