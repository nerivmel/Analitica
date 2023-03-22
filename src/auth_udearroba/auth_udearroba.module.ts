import { Module } from '@nestjs/common';
import { AuthUdearrobaService } from './auth_udearroba.service';
import { AuthUdearrobaController } from './auth_udearroba.controller';
import { auth_udearroba } from './models/auth_udearroba.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([auth_udearroba])],
  controllers: [AuthUdearrobaController],
  providers: [AuthUdearrobaService],
})
export class AuthUdearrobaModule {}
