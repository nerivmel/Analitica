import { Test, TestingModule } from '@nestjs/testing';
import { AuthUdearrobaService } from './admin.service';
import { CreateAuthUdearrobaDto } from './dto/create-admin.dto';
import { HttpException } from '@nestjs/common';
import { UpdateAuthUdearrobaDto } from './dto/update-admin.dto';
import { LoginAuthUdearrobaDto } from './dto/login-admin.dto';

describe('AuthUdearrobaService created successfully', () => {
  let service: AuthUdearrobaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthUdearrobaService,
          useValue: {
            findOne: jest.fn().mockReturnValue(null),
            create: jest.fn(),
            signAsync: jest.fn().mockReturnValue('mockToken'),
          },
        },
      ],
    }).compile();

    service = module.get<AuthUdearrobaService>(AuthUdearrobaService);
  });
  // Tests that a new user can be created successfully.
  it('test_create_user_successfully', async () => {
    const createAuthUdearrobaDto = new CreateAuthUdearrobaDto();
    createAuthUdearrobaDto.documento = '123456789';
    createAuthUdearrobaDto.nombre = 'John Doe';
    createAuthUdearrobaDto.email = 'johndoe@example.com';
    createAuthUdearrobaDto.password = 'password';
    createAuthUdearrobaDto.area = 'IT';
    createAuthUdearrobaDto.cargo = 'Developer';
    await service.create(createAuthUdearrobaDto);
    expect(service.findOne).toHaveBeenCalledTimes(0);
    expect(service.create).toHaveBeenCalledTimes(1);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
describe('AuthUdearrobaService find all users', () => {
  let service: AuthUdearrobaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthUdearrobaService,
          useValue: {
            findAll: jest.fn().mockReturnValue([
              { id: 1, nombre: 'John Doe' },
              { id: 2, nombre: 'Jane Doe' },
            ]),
            signAsync: jest.fn(),
          },
        },
      ],
    }).compile();
    service = module.get<AuthUdearrobaService>(AuthUdearrobaService);
  });
  it('test_find_all_users_successfully', async () => {
    const result = await service.findAll();
    expect(result).toEqual([
      { id: 1, nombre: 'John Doe' },
      { id: 2, nombre: 'Jane Doe' },
    ]);
  });
});
describe('AuthUdearrobaService update non existent user', () => {
  let service: AuthUdearrobaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthUdearrobaService,
          useValue: {
            update: jest.fn().mockRejectedValue(new HttpException('💣', 400)),
            findOne: jest.fn().mockReturnValue(null),
            create: jest.fn(),
            findAll: jest.fn().mockReturnValue([]),
            signAsync: jest.fn(),
          },
        },
      ],
    }).compile();
    service = module.get<AuthUdearrobaService>(AuthUdearrobaService);
  });
  // Tests that an error is thrown when trying to update a non-existing user.
  it('test_update_non_existing_user', async () => {
    const updateAuthUdearrobaDto = new UpdateAuthUdearrobaDto();
    updateAuthUdearrobaDto.documento = '123456789';
    updateAuthUdearrobaDto.nombre = 'John Doe';
    updateAuthUdearrobaDto.email = 'johndoe@example.com';
    updateAuthUdearrobaDto.password = 'password';
    updateAuthUdearrobaDto.area = 'IT';
    updateAuthUdearrobaDto.cargo = 'Developer';
    await expect(service.update(1, updateAuthUdearrobaDto)).rejects.toThrow(
      HttpException,
    );
  });
});
describe('AuthUdearrobaService remove', () => {
  let service: AuthUdearrobaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthUdearrobaService,
          useValue: {
            remove: jest
              .fn()
              .mockRejectedValue(
                new HttpException('removido exitosamnete', 200),
              ),
            findOne: jest.fn().mockReturnValue(null),
            create: jest.fn(),
            findAll: jest.fn().mockReturnValue([]),
            signAsync: jest.fn(),
          },
        },
      ],
    }).compile();
    service = module.get<AuthUdearrobaService>(AuthUdearrobaService);
  });
  // Tests that an error is thrown when trying to remove a non-existing user.
  it('test_remove_non_existing_user', async () => {
    await expect(service.remove(1)).rejects.toThrow(HttpException);
  });
});
describe('AuthUdearrobaService test wrong email or pass', () => {
  let service: AuthUdearrobaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthUdearrobaService,
          useValue: {
            login: jest
              .fn()
              .mockRejectedValue(
                new HttpException('removido exitosamnete', 200),
              ),
            findOne: jest.fn().mockReturnValue(null),
            create: jest.fn(),
            findAll: jest.fn().mockReturnValue([]),
            signAsync: jest.fn(),
          },
        },
      ],
    }).compile();
    service = module.get<AuthUdearrobaService>(AuthUdearrobaService);
  });
  // Tests that an error is thrown when trying to login with incorrect email or password.
  it('test_login_with_incorrect_email_or_password', async () => {
    const loginAuthUdearrobaDto = new LoginAuthUdearrobaDto();
    loginAuthUdearrobaDto.email = 'johndoe@example.com';
    loginAuthUdearrobaDto.password = 'password';
    await expect(service.login(loginAuthUdearrobaDto)).rejects.toThrow(
      HttpException,
    );
  });
});
describe('AuthUdearrobaService find one user', () => {
  let service: AuthUdearrobaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthUdearrobaService,
          useValue: {
            findOne: jest.fn().mockReturnValue({ id: 1, nombre: 'John Doe' }),
            create: jest.fn(),
            findAll: jest.fn().mockReturnValue([]),
            signAsync: jest.fn(),
          },
        },
      ],
    }).compile();
    service = module.get<AuthUdearrobaService>(AuthUdearrobaService);
  });
  // Tests that one user can be found successfully.
  it('test_find_one_user_successfully', async () => {
    const result = await service.findOne(1);
    expect(result).toEqual({ id: 1, nombre: 'John Doe' });
  });
});
describe('AuthUdearrobaService create user with existent doc', () => {
  let service: AuthUdearrobaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthUdearrobaService,
          useValue: {
            findOne: jest.fn().mockReturnValue({}),
            create: jest
              .fn()
              .mockRejectedValue(new HttpException('documento duplicado', 200)),
            findAll: jest.fn().mockReturnValue([]),
            signAsync: jest.fn(),
          },
        },
      ],
    }).compile();
    service = module.get<AuthUdearrobaService>(AuthUdearrobaService);
  });
  // Tests that an error is thrown when trying to create a user with an existing document number.
  it('test_create_user_with_existing_document_number', async () => {
    const createAuthUdearrobaDto = new CreateAuthUdearrobaDto();
    createAuthUdearrobaDto.documento = '123456789';
    createAuthUdearrobaDto.nombre = 'John Doe';
    createAuthUdearrobaDto.email = 'johndoe@example.com';
    createAuthUdearrobaDto.password = 'password';
    createAuthUdearrobaDto.area = 'IT';
    createAuthUdearrobaDto.cargo = 'Developer';
    await expect(service.create(createAuthUdearrobaDto)).rejects.toThrow(
      HttpException,
    );
  });
});
describe('AuthUdearrobaService update', () => {
  let service: AuthUdearrobaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthUdearrobaService,
          useValue: {
            update: jest.fn().mockReturnValue({
              message: 'Usuario Actualizado correctamente',
            }),
            findOne: jest.fn().mockReturnValue({ update: jest.fn() }),
          },
        },
      ],
    }).compile();
    service = module.get<AuthUdearrobaService>(AuthUdearrobaService);
  });
  // Tests that a user can be updated successfully.
  it('test_update_user_successfully', async () => {
    const updateAuthUdearrobaDto = new UpdateAuthUdearrobaDto();
    updateAuthUdearrobaDto.documento = '123456789';
    updateAuthUdearrobaDto.nombre = 'John Doe';
    updateAuthUdearrobaDto.email = 'johndoe@example.com';
    updateAuthUdearrobaDto.password = 'password';
    updateAuthUdearrobaDto.area = 'IT';
    updateAuthUdearrobaDto.cargo = 'Developer';
    const result = await service.update(1, updateAuthUdearrobaDto);
    expect(service.findOne).toHaveBeenCalledTimes(0);
    expect(result).toEqual({ message: 'Usuario Actualizado correctamente' });
  });
});
describe('AuthUdearrobaService delete', () => {
  let service: AuthUdearrobaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthUdearrobaService,
          useValue: {
            remove: jest
              .fn()
              .mockReturnValue({ message: 'Usuario eliminado correctamente' }),
            findOne: jest.fn().mockReturnValue({ destroy: jest.fn() }),
          },
        },
      ],
    }).compile();
    service = module.get<AuthUdearrobaService>(AuthUdearrobaService);
  });
  // Tests that a user can be removed successfully.
  it('test_remove_user_successfully', async () => {
    const result = await service.remove(1);
    expect(service.findOne).toHaveBeenCalledTimes(0);
    expect(result).toEqual({ message: 'Usuario eliminado correctamente' });
  });
});
