import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthUdearrobaService } from './auth_udearroba.service';
import { CreateAuthUdearrobaDto } from './dto/create-auth_udearroba.dto';
import { UpdateAuthUdearrobaDto } from './dto/update-auth_udearroba.dto';
import { LoginAuthUdearrobaDto } from './dto/login-auth_udearroba.dto';

@Controller('auth-udearroba')
export class AuthUdearrobaController {
  constructor(private readonly authUdearrobaService: AuthUdearrobaService) {}

  @Post()
  create(@Body() createAuthUdearrobaDto: CreateAuthUdearrobaDto) {
    return this.authUdearrobaService.create(createAuthUdearrobaDto);
  }

  @Get()
  findAll() {
    return this.authUdearrobaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authUdearrobaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAuthUdearrobaDto: UpdateAuthUdearrobaDto,
  ) {
    return this.authUdearrobaService.update(+id, updateAuthUdearrobaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authUdearrobaService.remove(+id);
  }

  @Post('/login')
  login(@Body() loginAuthUdearrobaDto: LoginAuthUdearrobaDto) {
    return this.authUdearrobaService.login(loginAuthUdearrobaDto);
  }
}
