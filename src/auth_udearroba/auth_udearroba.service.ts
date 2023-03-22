import { Injectable } from '@nestjs/common';
import { CreateAuthUdearrobaDto } from './dto/create-auth_udearroba.dto';
import { UpdateAuthUdearrobaDto } from './dto/update-auth_udearroba.dto';
import { LoginAuthUdearrobaDto } from './dto/login-auth_udearroba.dto';
import { auth_udearroba } from './models/auth_udearroba.model';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, HttpStatus } from '@nestjs/common';
import {createHash} from 'crypto';

@Injectable()
export class AuthUdearrobaService {
  constructor(
    @InjectModel(auth_udearroba)
    private authUdearrobaModel: typeof auth_udearroba,
  ) {}
  create(createAuthUdearrobaDto: CreateAuthUdearrobaDto) {
    return 'This action adds a new authUdearroba';
  }

  findAll() {
    return `This action returns all authUdearroba`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authUdearroba`;
  }

  update(id: number, updateAuthUdearrobaDto: UpdateAuthUdearrobaDto) {
    return `This action updates a #${id} authUdearroba`;
  }

  remove(id: number) {
    return `This action removes a #${id} authUdearroba`;
  }

  async login(loginAuthUdearrobaDto: LoginAuthUdearrobaDto) {
    const { email, password } = loginAuthUdearrobaDto;
    const auth_udearroba = await this.authUdearrobaModel.findOne({
      where: { email },
    });

    console.log(auth_udearroba);

    const error = {
      message: 'Email o contraseña incorrectos',
      result: 'fail',
    };

    
    if (!auth_udearroba) throw new HttpException(error, HttpStatus.NOT_FOUND);

    const passwordHash = createHash("md5").update(password).digest("hex");

    if(passwordHash !== auth_udearroba.password){
      throw new HttpException(error, HttpStatus.CONFLICT);
    }

    const data = {
      nombre: auth_udearroba.nombre,
      message: 'Bienvenido',
      result: 'success',
    };
    return data;
  }

}
