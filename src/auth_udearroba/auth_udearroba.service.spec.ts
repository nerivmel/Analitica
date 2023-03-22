import { Test, TestingModule } from '@nestjs/testing';
import { AuthUdearrobaService } from './auth_udearroba.service';

describe('AuthUdearrobaService', () => {
  let service: AuthUdearrobaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthUdearrobaService],
    }).compile();

    service = module.get<AuthUdearrobaService>(AuthUdearrobaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
