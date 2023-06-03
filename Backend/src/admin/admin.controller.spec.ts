import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('AuthUdearrobaController', () => {
  let controller: AuthUdearrobaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthUdearrobaController],
      providers: [
        {
          provide: AuthUdearrobaService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AuthUdearrobaController>(AuthUdearrobaController);
  });
  it('test_create_new_user_with_valid_input', async () => {
    const mockCreateAuthUdearrobaDto = new CreateAuthUdearrobaDto();
    mockCreateAuthUdearrobaDto.nombre = 'John Doe';
    mockCreateAuthUdearrobaDto.documento = '123456789';
    mockCreateAuthUdearrobaDto.email = 'johndoe@example.com';
    mockCreateAuthUdearrobaDto.password = 'password';
    mockCreateAuthUdearrobaDto.area = 'IT';
    mockCreateAuthUdearrobaDto.cargo = 'Developer';

    const mockAuthUdearrobaService = {
      create: jest.fn().mockResolvedValue({
        message: 'Usuario AuthUdea@ creado correctamente',
      }),
    };

    const authUdearrobaController = new AuthUdearrobaController(
      mockAuthUdearrobaService as any,
    );

    const result = await authUdearrobaController.create(
      mockCreateAuthUdearrobaDto,
    );

    expect(mockAuthUdearrobaService.create).toHaveBeenCalledWith(
      mockCreateAuthUdearrobaDto,
    );
    expect(result).toEqual({
      message: 'Usuario AuthUdea@ creado correctamente',
    });
  });
  it('test_find_all_users', async () => {
    const mockAuthUdearrobaService = {
      findAll: jest.fn().mockResolvedValue([
        { id: 1, nombre: 'John Doe' },
        { id: 2, nombre: 'Jane Doe' },
      ]),
    };

    const authUdearrobaController = new AuthUdearrobaController(
      mockAuthUdearrobaService as any,
    );

    const result = await authUdearrobaController.findAll();

    expect(mockAuthUdearrobaService.findAll).toHaveBeenCalled();
    expect(result).toEqual([
      { id: 1, nombre: 'John Doe' },
      { id: 2, nombre: 'Jane Doe' },
    ]);
  });
  it('test_find_user_by_id', async () => {
    const mockAuthUdearrobaService = {
      findOne: jest.fn().mockResolvedValue({ id: 1, nombre: 'John Doe' }),
    };

    const authUdearrobaController = new AuthUdearrobaController(
      mockAuthUdearrobaService as any,
    );

    const result = await authUdearrobaController.findOne('1');

    expect(mockAuthUdearrobaService.findOne).toHaveBeenCalledWith(1);
    expect(result).toEqual({ id: 1, nombre: 'John Doe' });
  });

  it('test_update_user_with_valid_input', async () => {
    const mockUpdateAuthUdearrobaDto = new UpdateAuthUdearrobaDto();
    mockUpdateAuthUdearrobaDto.nombre = 'John Doe';
    mockUpdateAuthUdearrobaDto.documento = '123456789';
    mockUpdateAuthUdearrobaDto.email = 'johndoe@example.com';
    mockUpdateAuthUdearrobaDto.password = 'password';
    mockUpdateAuthUdearrobaDto.area = 'IT';
    mockUpdateAuthUdearrobaDto.cargo = 'Developer';

    const mockAuthUdearrobaService = {
      update: jest
        .fn()
        .mockResolvedValue({ message: 'Usuario Actualizado correctamente' }),
    };

    const authUdearrobaController = new AuthUdearrobaController(
      mockAuthUdearrobaService as any,
    );

    const result = await authUdearrobaController.update(
      '1',
      mockUpdateAuthUdearrobaDto,
    );

    expect(mockAuthUdearrobaService.update).toHaveBeenCalledWith(
      1,
      mockUpdateAuthUdearrobaDto,
    );
    expect(result).toEqual({ message: 'Usuario Actualizado correctamente' });
  });
  it('test_remove_user_by_id', async () => {
    const mockAuthUdearrobaService = {
      remove: jest
        .fn()
        .mockResolvedValue({ message: 'Usuario eliminado correctamente' }),
    };

    const authUdearrobaController = new AuthUdearrobaController(
      mockAuthUdearrobaService as any,
    );

    const result = await authUdearrobaController.remove('1');

    expect(mockAuthUdearrobaService.remove).toHaveBeenCalledWith(1);
    expect(result).toEqual({ message: 'Usuario eliminado correctamente' });
  });
  it('test_login_with_valid_credentials', async () => {
    const mockLoginAuthUdearrobaDto = new LoginAuthUdearrobaDto();
    mockLoginAuthUdearrobaDto.email = 'johndoe@example.com';
    mockLoginAuthUdearrobaDto.password = 'password';

    const mockAuthUdearrobaService = {
      login: jest.fn().mockResolvedValue({
        message: 'Bienvenido',
        result: 'success',
        nombre: 'John Doe',
        sub: 'johndoe@example.com',
        token: 'token',
      }),
    };

    const authUdearrobaController = new AuthUdearrobaController(
      mockAuthUdearrobaService as any,
    );

    const result = await authUdearrobaController.login(
      mockLoginAuthUdearrobaDto,
    );

    expect(mockAuthUdearrobaService.login).toHaveBeenCalledWith(
      mockLoginAuthUdearrobaDto,
    );
    expect(result).toEqual({
      message: 'Bienvenido',
      result: 'success',
      nombre: 'John Doe',
      sub: 'johndoe@example.com',
      token: 'token',
    });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
describe('AuthUdearrobaController', () => {
  let controller: AuthUdearrobaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthUdearrobaController],
      providers: [
        {
          provide: AuthUdearrobaService,
          useValue: {
            create: jest
              .fn()
              .mockRejectedValue(
                new HttpException(
                  'El email ingresado ya se encuentra registrado',
                  200,
                ),
              ),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthUdearrobaController>(AuthUdearrobaController);
  });
  // Tests creating a new user with an existing email.
  it('test_create_user_with_existing_email', () => {
    const createAuthUdearrobaDto = new CreateAuthUdearrobaDto();
    createAuthUdearrobaDto.nombre = 'John Doe';
    createAuthUdearrobaDto.documento = '123456789';
    createAuthUdearrobaDto.email = 'johndoe@example.com';
    createAuthUdearrobaDto.password = 'password';
    createAuthUdearrobaDto.area = 'IT';
    createAuthUdearrobaDto.cargo = 'Developer';
    expect(controller.create(createAuthUdearrobaDto)).rejects.toThrow(
      new HttpException(
        'El email ingresado ya se encuentra registrado',
        HttpStatus.CONFLICT,
      ),
    );
  });
});
