import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './auth/models/user.model';
import { AuthUdearrobaModule } from './auth_udearroba/auth_udearroba.module';
import { auth_udearroba } from './auth_udearroba/models/auth_udearroba.model';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        dialect: 'mariadb',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'sigred_externos',
        models: [User, auth_udearroba],
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
    AuthModule,
    AuthUdearrobaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
