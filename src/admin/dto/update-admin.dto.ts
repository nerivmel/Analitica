import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  @IsString({ message: 'El nombre debe de ser un texto' })
  @IsNotEmpty({ message: 'El nombre no debe ser vacio' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'El documento no debe ser vacio' })
  documento: string;

  @IsString()
  @IsNotEmpty({ message: 'El area no debe ser vacio' })
  area: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'El email debe no debe ser vacio' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña no debe estar vacia' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'El cargo no debe estar vacio' })
  cargo: string;
}
