import { strict } from 'assert';
import { IsBoolean, isISO8601, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateAuthDto {
  @IsString({ message: 'El nombre debe de ser un texto' })
  @IsNotEmpty({ message: 'El nombre no debe ser vacio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'El apellido no debe ser vacio' })
  lastName: string;

  @IsString()
  @IsNotEmpty({ message: 'El tipo de documento no debe ser vacio' })
  type_identification: string;

  @IsString()
  @IsNotEmpty({ message: 'La identificación no debe ser vacio' })
  identification: string;

  @IsString()
  @IsNotEmpty({ message: 'el pais no debe ser vacio' })
  country: string;

  @IsString()
  @IsNotEmpty({ message: 'la ciudad no debe ser vacio' })
  city: string;

  @IsNumber()
  @IsNotEmpty({ message: 'El numero no debe ser vacio/solo debe contener numeros' })
  phone: number;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'El email no debe ser vacio' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'La motivacion no debe ser vacio' })
  motivation: string;

  @IsBoolean()
  @IsNotEmpty()
  terms: boolean;

  @IsString()
  @IsNotEmpty({ message: 'La ocupacion no debe ser vacio' })
  ocupation: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña no debe estar vacio' })
  password: string;


}
