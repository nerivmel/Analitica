import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthDto {
  @IsString()
  @IsNotEmpty({ message: 'La identificación debe no debe ser vacio' })
  identification: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña debe no debe ser vacio' })
  password: string;
}
