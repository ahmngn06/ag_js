
import User2  from "../user/user.js";
import UserServices from "../userservices/userServices.js";

let userService = new UserServices();
let user121= new User2("aaa","rrr",33)

userService.add(user121.id);
userService.list();
userService.getById(1);