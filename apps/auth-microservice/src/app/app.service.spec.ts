import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('createUser', () => {
    it('should return "Hello API"', () => {
      expect(
        service.createUser({ name: 'name', email: 'email@gmail.com' })
      ).toEqual({ message: 'Hello API' });
    });
  });
});
