import User from "../Models/user.ts";
import bcrypt from 'bcryptjs'; 

interface UserCreds {
  username: string;
  password: string;
  [key: string]: any;
}

class UserController {
  constructor() {}

  async Register(creds: UserCreds) {
    try {
      const { password, ...rest } = creds;
      const password_hash = await bcrypt.hash(password, 10);

      const newUser = new User({
        ...rest,
        password: password_hash
      });

      const result = await newUser.save();
      return { success: true, user: result };
    } catch (error: any) {
      console.log("Error While Registering, ", error);
      return { success: false, error: error.message };
    }
  }

  async Login(creds: UserCreds) {
    try {
      const foundUser = await User.findOne({ username: creds.username });
      if (!foundUser) return { success: false, account: false, message: "User not found" };

      const isMatch = await bcrypt.compare(creds.password, foundUser.password ?? "");
      if (!isMatch) return { success: false, account: true, message: "Invalid password" };

      return { success: true, user: foundUser };
    } catch (error) {
      console.error("Error While Logging In:", error);
      return { success: false };
    }
  }
}

export default UserController;
