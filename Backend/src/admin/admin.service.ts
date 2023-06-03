import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { admin } from './models/admin.model';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, HttpStatus } from '@nestjs/common';
import { createHash } from 'crypto';
import { hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(admin)
    private adminModel: typeof admin,
    private jwtService: JwtService,
  ) {}
  async create(createAdminDto: CreateAdminDto) {
    const { documento, password } = createAdminDto;
    const user = await this.adminModel.findOne({
      where: { documento },
    });
    const email = await this.adminModel.findOne({
      where: { email: createAdminDto.email },
    });

    if (user)
      throw new HttpException('El usuario ya existe', HttpStatus.CONFLICT);

    if (email)
      throw new HttpException(
        'El email ingresado ya se encuentra registrado',
        HttpStatus.CONFLICT,
      );
    const passwordHash = createHash('md5').update(password).digest('hex');

    const newAdmin = {
      documento: createAdminDto.documento,
      nombre: createAdminDto.nombre,
      area: createAdminDto.area,
      email: createAdminDto.email,
      password: passwordHash,
      cargo: createAdminDto.cargo,
    };
    try {
      await this.adminModel.create(newAdmin);
      return { message: 'Usuario administrador creado correctamente' };
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
    return await this.adminModel.findAll();
  }

  findOne(id: number) {
    return this.adminModel.findOne({ where: { id } });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const authAdmin = await this.adminModel.findOne({
      where: { id },
    });
    if (!authAdmin)
      throw new HttpException('Usuario no existe', HttpStatus.NOT_FOUND);

    const { password } = updateAdminDto;
    let passwordHash;
    if (password) {
      passwordHash = createHash('md5').update(password).digest('hex');
    }
    const updateAdmin = {
      documento: updateAdminDto.documento,
      nombre: updateAdminDto.nombre,
      password: passwordHash,
      email: updateAdminDto.email,
      area: updateAdminDto.area,
      cargo: updateAdminDto.cargo,
    };
    await authAdmin.update(updateAdmin);
    return { message: 'Admin Actualizado correctamente' };
  }

  async remove(id: number) {
    const user = await this.adminModel.findOne({ where: { id } });
    if (!user) {
      throw new HttpException('Admin no existe', HttpStatus.NOT_FOUND);
    }
    user.destroy();
    return { message: 'Admin eliminado correctamente' };
  }

  async login(loginAdminDto: LoginAdminDto) {
    const { email, password } = loginAdminDto;
    const auth_admin = await this.adminModel.findOne({
      where: { email },
    });

    const error = {
      message: 'Email o contraseña incorrectos',
      result: 'fail',
    };

    if (!auth_admin) throw new HttpException(error, HttpStatus.NOT_FOUND);

    const passwordHash = createHash('md5').update(password).digest('hex');

    if (passwordHash !== auth_admin.password) {
      throw new HttpException(error, HttpStatus.CONFLICT);
    }

    const payload = {
      nombre: auth_admin.nombre,
      sub: auth_admin.email,
    };
    const token = await this.jwtService.signAsync(payload);

    const data = {
      message: 'Bienvenido',
      result: 'success',
      nombre: auth_admin.nombre,
      sub: auth_admin.email,
      token,
    };
    return data;
  }
}
