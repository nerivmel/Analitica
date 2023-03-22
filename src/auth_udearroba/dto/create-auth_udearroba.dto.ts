
import {
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';
  
  export class CreateAuthUdearrobaDto {
    @IsString({ message: 'El nombre debe de ser un texto' })
    @IsNotEmpty({ message: 'El nombre no debe ser vacio' })
    nombre: string;
  
    @IsString()
    @IsNotEmpty({ message: 'el docuemnto no debe ser vacio' })
    document: string;
  
    @IsString()
    @IsEmail()
    @IsNotEmpty({ message: 'El email no debe ser vacio' })
    email: string;
  
    @IsString()
    @IsNotEmpty({ message: 'La contraseña no debe estar vacio' })
    password: string;

    @IsString()
    @IsNotEmpty({ message: 'el area no debe ser vacio' })
    area: string;

    @IsString()
    @IsNotEmpty({ message: 'el cargo no debe ser vacio' })
    cargo: string;
  }
  