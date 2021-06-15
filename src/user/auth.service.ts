import { Inject, Injectable, Render } from '@nestjs/common';
import { Model } from 'mongoose';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import User from '../schemas/user.schema';
import { userLoginDTO } from './model/user.model';

@Injectable()
export class authService {
  constructor() {}

  public async loginService(username, password) {
    console.log(username)
    const loginUser = await User.findOne({
      username: username,
    });
    console.log(username)
    if (!loginUser) {
      throw new Error('User does not exist');
    }
    const isEqual = this.checkPassword(
      password,
      loginUser.password,
    );
    if (!isEqual) {
      throw new Error('Password is incorrect');
    }
    const token = this.getSignedJwtToken(loginUser);
    console.log(token)
    return {
      userId: loginUser._id,
      token: token,
      tokenExpiration: "30d",
    };
  }

  public async registerService(userDTO) {
    console.log(userDTO)
    const registerUser = await User.findOne({
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
    User.create(newUser)
    return newUser
  }

  private getSignedJwtToken(loginUser) {
    return sign(
      { userId: loginUser._id, userEmail: loginUser.email },
      "brainhack",
      {
        expiresIn: "30d",
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