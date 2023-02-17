import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

const testLogin = {
  identification: '1037663140',
  password: '12345',
};
const testRegister = {
  id: '1',
  type_identification:'cedule',
  identification: '1037663140',
  name: 'Alejandro',
  lastName: 'Acevedo',
  email: 'alejo@perez.com',
  password: '12345',
  country: 'mongolia',
  city: 'mongolia',
  phone: 88888888,
  motivations: 'lorenipsdisiensllassad',
  terms:true,
  enable:true,
  date_of_aproval: 2017-6-7

};

const registerSucces = { message: 'Usuario creado correctamente' };

const loginSucces = {
  identification: '1037663140',
  message: 'Bienvenido',
  result: 'success',
};
const loginFail = {
  message: 'Usuario o contraseña incorrectos',
  result: 'fail',
};

const remove = { message: 'Usuario eliminado correctamente' };

describe('AuthController', () => {
  let controller: AuthController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            findAll: jest.fn(() => [testRegister]),
            create: jest.fn(() => registerSucces),
            login: jest.fn(() => loginSucces),
            remove: jest.fn(() => remove),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('should get the users', async () => {
      expect(await controller.findAll()).toEqual([testRegister]);
    });

    it('should create a user', async () => {
      const result = await controller.create(testRegister);
      expect(result).toEqual(registerSucces);
    });

    it('should login a user and return error when the credentials are incorrect', async () => {
      try {
        const result = await controller.login(testLogin);
        console.log(result);
        expect(result).toEqual(loginSucces);
      } catch (error) {
        console.log(error);
        expect(error).toEqual(loginFail);
        done();
      }
    });

    it('should fail login a user', async () => {
      try {
        const result = await controller.login({
          identification: '1037663148',
          password: '12345',
        });
        console.log(result);
        expect(result).toEqual(loginSucces);
      } catch (error) {
        console.log(error);
        expect(error).toEqual(loginFail);
        done();
      }
    });

    it('should delete a user', async () => {
      const result = await controller.remove('1');
      expect(result).toEqual(remove);
    });
  });
});
function done() {
  throw new Error('Function not implemented.');
}
