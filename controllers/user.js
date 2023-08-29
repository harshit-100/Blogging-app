const User = require("../models/user")


const userSignin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const token = await User.matchPasswordAndGenrateToken(email, password);
      return res.cookie("token", token).redirect("/");
    } catch (error) {
      return res.render("signin", {
        error: "Incorect Email or Password",
      });
    }
  }

module.exports = {userSignin}