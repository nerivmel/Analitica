import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthUdearrobaDto } from './create-auth_udearroba.dto';

export class UpdateAuthUdearrobaDto extends PartialType(
  CreateAuthUdearrobaDto,
) {}
