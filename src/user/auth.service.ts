import { Inject, Injectable, Render } from '@nestjs/common';
import { Model } from 'mongoose';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import User from '../schemas/user.schema';
import { userLoginDTO } from './model/user.model';

@Injectable()
export class authService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<typeof User>,
  ) {}

  public async loginService(username, password) {
    const loginUser = await this.userModel.findOne({
      username: username,
    });
    if (!loginUser) {
      throw new Error('User does not exist');
    }
    const isEqual = this.checkPassword(
      password,
      password,
    );
    if (!isEqual) {
      throw new Error('Password is incorrect');
    }
    const token = this.getSignedJwtToken(loginUser);
    return {
      userId: loginUser._id,
      token: token,
      tokenExpiration: process.env.JWT_EXPIRE,
    };
  }

  public async registerService(userDTO) {
    console.log(userDTO)
    const registerUser = await this.userModel.findOne({
      username: userDTO.username,
    })
    // Check if user already exists
    if (registerUser) {
      throw new Error('User already exist')
    }
    // Hash password
    const hashedPassword = await this.hashPassword(userDTO.password)
    // update DB on new User
    const newUser = {
      username: userDTO.username,
      password: hashedPassword,
      email: userDTO.email,
      phoneNumber: userDTO.phoneNumber
    }
    this.userModel.create(newUser)
    return newUser
  }

  private getSignedJwtToken(loginUser) {
    sign(
      { userId: loginUser._id, userEmail: loginUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      },
    );
  }

  private async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  private async checkPassword(inputPassword: string, originalPassword: string) {
    await bcrypt.compare(inputPassword, originalPassword);
  }
}

export default authService;