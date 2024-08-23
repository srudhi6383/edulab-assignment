const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/jwtConfig');

class AuthService {
    constructor(userModel, bcrypt, jwt, jwtConfig) {
        this.userModel = userModel;
        this.bcrypt = bcrypt;
        this.jwt = jwt;
        this.jwtConfig = jwtConfig;
    }

    async register(username, password) {
        const hashedPassword = await this.bcrypt.hash(password, 10);
        const user = new this.userModel({ username, password: hashedPassword });
        return user.save();
    }

    async login(username, password) {
        const user = await this.userModel.findOne({ username });
        if (!user || !(await this.bcrypt.compare(password, user.password))) {
            throw new Error('Invalid credentials');
        }
        const token = this.jwt.sign({ id: user._id, role: user.role }, this.jwtConfig.JWT_SECRET, {
            expiresIn: this.jwtConfig.JWT_EXPIRES_IN,
        });
        return token;
    }
}

module.exports = new AuthService(User, bcrypt, jwt, { JWT_SECRET, JWT_EXPIRES_IN });
