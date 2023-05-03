import { Module } from '@nestjs/common';
import { AuthUdearrobaService } from './auth_udearroba.service';
import { AuthUdearrobaController } from './auth_udearroba.controller';
import { auth_udearroba } from './models/auth_udearroba.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '99999s' },
    }),
    SequelizeModule.forFeature([auth_udearroba]),
  ],
  controllers: [AuthUdearrobaController],
  providers: [AuthUdearrobaService, JwtStrategy],
})
export class AuthUdearrobaModule {}
