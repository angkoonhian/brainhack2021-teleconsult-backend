import { Inject, Injectable, Render } from '@nestjs/common';
import { Model } from 'mongoose';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import Clinic from '../schemas/clinic.schema';

@Injectable()
export class clinicService {
  constructor() {}

  public async loginService(username, password) {
    console.log(username)
    const loginUser = await Clinic.findOne({
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

  public async updatePushToken(userId, pushToken) {
    try {
      const clinic = await Clinic.findOne({_id: userId})
      clinic['pushToken'] = pushToken
      clinic.save()
      return clinic
    } catch (err) {
      throw err
    }
  }

  public async getOneClinicDoctors(clinicId) {
    try {
      const clinic = await Clinic.findOne({_id:clinicId})
      return clinic.doctors
    } catch (err) {
      throw err
    }
  }

  public async registerService(userDTO) {
    console.log("hgell")
    console.log(userDTO)
    const registerUser = await Clinic.findOne({
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
      phoneNumber: userDTO.phoneNumber,
      address: userDTO.address,
      appointments: [],
    }
    Clinic.create(newUser)
    return newUser
  }

  public async getAllClinicsService() {
    try {
      const allClinics = await Clinic.find()
      console.log(allClinics)
      return allClinics
    } catch (err) {
      throw err
    }
  }

  public async getOneClinicService(clinidId) {
    try {
      const clinic = await Clinic.findOne({_id: clinidId})
      console.log(clinic)
      return clinic
    } catch (err) {
      throw err
    }
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

export default clinicService;