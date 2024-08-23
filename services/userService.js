const User = require('../models/user');

class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async getAllUsers() {
        return this.userModel.find();
    }

    async getUserById(id) {
        return this.userModel.findById(id);
    }

    async updateUser(id, data) {
        return this.userModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteUser(id) {
        return this.userModel.findByIdAndDelete(id);
    }
}

module.exports = new UserService(User);
