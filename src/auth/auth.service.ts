import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

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
    const email = await this.userModel.findOne({
      where: { email: createAuthDto.email },
    });

    if (user)
      throw new HttpException('El usuario ya existe', HttpStatus.CONFLICT);

    if (email)
      throw new HttpException(
        'El email ingresado ya se encuentra registrado',
        HttpStatus.CONFLICT,
      );

    const plainToHash = await hash(password, 10);
    createAuthDto = { ...createAuthDto, password: plainToHash };

    const date_of_approval = new Date();

    const newUser = {
      type_identification: createAuthDto.type_identification,
      identification: createAuthDto.identification,
      name: createAuthDto.name,
      lastName: createAuthDto.lastName,
      email: createAuthDto.email,
      password: createAuthDto.password,
      country: createAuthDto.country,
      ocupation: createAuthDto.ocupation,
      city: createAuthDto.city,
      phone: createAuthDto.phone,
      motivation: createAuthDto.motivation,
      date_of_approval,
      enabled: true,
      terms: true,
    };
    try {
      await this.userModel.create(newUser);
      return { message: 'Usuario creado correctamente' };
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

  async login(loginAuthDto: LoginAuthDto) {
    const { identification, password } = loginAuthDto;
    const user = await this.userModel.findOne({
      where: { identification },
    });

    const error = {
      message: 'Usuario o contraseña incorrectos',
      result: 'fail',
    };

    const errorEnabled = {
      message: 'Su cuenta caduco',
      result: 'fail',
    };
    if (!user) throw new HttpException(error, HttpStatus.NOT_FOUND);

    const isMatch = await compare(password, user.password);

    if (!isMatch) throw new HttpException(error, HttpStatus.CONFLICT);

    if (user.enabled === false)
      throw new HttpException(errorEnabled, HttpStatus.CONFLICT);

    const now = new Date();
    const date = new Date(user.date_of_approval);
    date.setDate(user.date_of_approval.getDate() + 30);

    if (now.getTime() > date.getTime()) {
      user.enabled = false;
      user.save();
      throw new HttpException(errorEnabled, HttpStatus.CONFLICT);
    }

    const data = {
      identification: user.identification,
      message: 'Bienvenido',
      result: 'success',
    };
    return data;
  }

  async findAll() {
    return await this.userModel.findAll();
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
