import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthUdearrobaDto {
  @IsString()
  @IsNotEmpty({ message: 'El correo debe no debe ser vacio' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña debe no debe ser vacio' })
  password: string;
}
