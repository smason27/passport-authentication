const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const model = mongoose.model;
const bcrypt = require("bcrypt");
mongoose.Promise = Promise;

const userSchema = new Schema({
  username: { type: String, required: true },
  businesses: [{ type: Schema.Types.ObjectId, ref: 'Business' }],
  password: {
    type: String,
    required: true,
    required: "Password Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password must be longer"
    ]
  }, 
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  }
});

userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

module.exports = model("User", userSchema);
