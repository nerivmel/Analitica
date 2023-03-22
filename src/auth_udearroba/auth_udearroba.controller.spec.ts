import { Test, TestingModule } from '@nestjs/testing';
import { AuthUdearrobaController } from './auth_udearroba.controller';
import { AuthUdearrobaService } from './auth_udearroba.service';

describe('AuthUdearrobaController', () => {
  let controller: AuthUdearrobaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthUdearrobaController],
      providers: [AuthUdearrobaService],
    }).compile();

    controller = module.get<AuthUdearrobaController>(AuthUdearrobaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
