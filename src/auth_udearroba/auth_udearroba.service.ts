import { Injectable } from '@nestjs/common';
import { CreateAuthUdearrobaDto } from './dto/create-auth_udearroba.dto';
import { UpdateAuthUdearrobaDto } from './dto/update-auth_udearroba.dto';
import { LoginAuthUdearrobaDto } from './dto/login-auth_udearroba.dto';
import { auth_udearroba } from './models/auth_udearroba.model';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, HttpStatus } from '@nestjs/common';
import { createHash } from 'crypto';
import { hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUdearrobaService {
  constructor(
    @InjectModel(auth_udearroba)
    private authUdearrobaModel: typeof auth_udearroba,
    private jwtService: JwtService,
  ) {}
  async create(createAuthUdearrobaDto: CreateAuthUdearrobaDto) {
    const { documento, password } = createAuthUdearrobaDto;
    const user = await this.authUdearrobaModel.findOne({
      where: { documento },
    });
    const email = await this.authUdearrobaModel.findOne({
      where: { email: createAuthUdearrobaDto.email },
    });

    if (user)
      throw new HttpException('El usuario ya existe', HttpStatus.CONFLICT);

    if (email)
      throw new HttpException(
        'El email ingresado ya se encuentra registrado',
        HttpStatus.CONFLICT,
      );
    const passwordHash = createHash('md5').update(password).digest('hex');

    const newAuthUdearroba = {
      documento: createAuthUdearrobaDto.documento,
      nombre: createAuthUdearrobaDto.nombre,
      area: createAuthUdearrobaDto.area,
      email: createAuthUdearrobaDto.email,
      password: passwordHash,
      cargo: createAuthUdearrobaDto.cargo,
    };
    try {
      await this.authUdearrobaModel.create(newAuthUdearroba);
      return { message: 'Usuario AuthUdea@ creado correctamente' };
    } catch (error) {
      console.log(error);
      if (error.errors.length > 0) {
        throw new HttpException(
          error.errors[0].message,
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }

  async findAll() {
    return await this.authUdearrobaModel.findAll();
  }

  findOne(id: number) {
    return this.authUdearrobaModel.findOne({ where: { id } });
  }

  async update(id: number, updateAuthUdearrobaDto: UpdateAuthUdearrobaDto) {
    const authUdearroba = await this.authUdearrobaModel.findOne({
      where: { id },
    });
    if (!authUdearroba)
      throw new HttpException('Usuario no existe', HttpStatus.NOT_FOUND);

    const { password } = updateAuthUdearrobaDto;
    let passwordHash;
    if (password) {
      passwordHash = createHash('md5').update(password).digest('hex');
    }
    const updateAuthUdearroba = {
      documento: updateAuthUdearrobaDto.documento,
      nombre: updateAuthUdearrobaDto.nombre,
      password: passwordHash,
      email: updateAuthUdearrobaDto.email,
      area: updateAuthUdearrobaDto.area,
      cargo: updateAuthUdearrobaDto.cargo,
    };
    await authUdearroba
      .update(updateAuthUdearroba)
      .then(() => {
        return { meessage: 'Usuario auth actualizado correctamente' };
      })
      .catch((error) => {
        throw new HttpException(error.meessage, error.statusCode);
      });
  }

  async remove(id: number) {
    const user = await this.authUdearrobaModel.findOne({ where: { id } });
    if (!user) {
      throw new HttpException('Usuario no existe', HttpStatus.NOT_FOUND);
    }
    user.destroy();
    return { message: 'Usuario eliminado correctamente' };
  }

  async login(loginAuthUdearrobaDto: LoginAuthUdearrobaDto) {
    const { email, password } = loginAuthUdearrobaDto;
    const auth_udearroba = await this.authUdearrobaModel.findOne({
      where: { email },
    });

    const error = {
      message: 'Email o contraseña incorrectos',
      result: 'fail',
    };

    if (!auth_udearroba) throw new HttpException(error, HttpStatus.NOT_FOUND);

    const passwordHash = createHash('md5').update(password).digest('hex');

    if (passwordHash !== auth_udearroba.password) {
      throw new HttpException(error, HttpStatus.CONFLICT);
    }

    const payload = {
      nombre: auth_udearroba.nombre,
      sub: auth_udearroba.email,
    };
    const token = await this.jwtService.signAsync(payload);

    const data = {
      message: 'Bienvenido',
      result: 'success',
      nombre: auth_udearroba.nombre,
      sub: auth_udearroba.email,
      token,
    };
    return data;
  }
}
