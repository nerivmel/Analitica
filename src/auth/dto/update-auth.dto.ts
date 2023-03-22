import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @IsString({ message: 'El nombre debe de ser un texto' })
  @IsNotEmpty({ message: 'El nombre no debe ser vacio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'El apellido no debe ser vacio' })
  lastName: string;

  @IsString()
  @IsNotEmpty({ message: 'La identificación no debe ser vacio' })
  identification: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'El email debe no debe ser vacio' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'El email debe no debe estar vacio' })
  password: string;
}
