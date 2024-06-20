import User from "../models/user.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";

export const updateUser = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) return next(createError(404, "User not found!"));

    const realUser = await User.findById(user._id);

    const { username, email, oldPassword, newPassword } = req.body;

    if (username) {
      await realUser.updateOne({ username: username });
    }
    if (email) {
      if (email !== realUser.email) {
        const oldUser = await User.findOne({ email });
        if (oldUser)
          return next(createError(400, "This email already exists!"));
      }

      await realUser.updateOne({ email: email });
    }

    if (newPassword && newPassword.length < 5) {
      return next(
        createError(400, "Password should be atleast 5 characters long.")
      );
    }

    if (oldPassword && newPassword) {
      const isPassCorrect = await bcrypt.compare(
        oldPassword,
        realUser.password
      );

      if (!isPassCorrect)
        return next(createError(400, "Old Password is not correct!"));

      const hashedPass = await bcrypt.hash(newPassword, 10);

      await realUser.updateOne({ password: hashedPass });
    }

    res.status(200).json({ message: "Updated successfully!" });
  } catch (error) {
    next(error);
  }
};
