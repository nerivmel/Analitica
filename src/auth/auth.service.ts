import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { Sequelize } from 'sequelize';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    const { identification, password } = createAuthDto;
    const user = await this.userModel.findOne({
      where: { identification },
    });
    if (user)
      throw new HttpException('El usuario ya existe', HttpStatus.BAD_REQUEST);

    const plainToHash = await hash(password, 10);
    createAuthDto = { ...createAuthDto, password: plainToHash };
    const newUser = {
      name: createAuthDto.name,
      identification: createAuthDto.identification,
      lastName: createAuthDto.lastName,
      password: createAuthDto.password,
      email: createAuthDto.email,
    };

    this.userModel
      .create(newUser)
      .then(() => {
        return { meessage: 'Usuario creado correctamente' };
      })
      .catch((error) => {
        console.log(error);
        throw new HttpException(error.meessage, error.statusCode);
      });
  }

  async login(loginAuthDto: LoginAuthDto) {
    return 'Logeado';
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findOne({ where: { id } });
  }

  async update(id: number, updateAuthDto: UpdateAuthDto) {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user)
      throw new HttpException('Usuario no existe', HttpStatus.NOT_FOUND);

    const { password } = updateAuthDto;
    if (password) {
      const plainToHash = await hash(password, 10);
      updateAuthDto = { ...updateAuthDto, password: plainToHash };
    }
    const updateUser = {
      identification: updateAuthDto.identification,
      name: updateAuthDto.name,
      lastName: updateAuthDto.lastName,
      email: updateAuthDto.email,
      password: updateAuthDto.password,
    };
    await user
      .update(updateUser)
      .then(() => {
        return { meessage: 'Usuario actualizado correctamente' };
      })
      .catch((error) => {
        throw new HttpException(error.meessage, error.statusCode);
      });
  }

  async remove(id: number) {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) {
      throw new HttpException('Usuario no existe', HttpStatus.NOT_FOUND);
    }
    user.destroy();
    return { message: 'Usuario eliminado correctamente' };
  }
}
