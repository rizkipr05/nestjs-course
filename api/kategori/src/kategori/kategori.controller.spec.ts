import { Test, TestingModule } from '@nestjs/testing';
import { KategoriController } from './kategori.controller';
import { KategoriService } from './kategori.service';
import { PrismaService } from '../prisma.service';

describe('KategoriController', () => {
  let controller: KategoriController;

  beforeEach(async () => {
    const prismaMock = {
      kategori: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [KategoriController],
      providers: [
        KategoriService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    controller = module.get<KategoriController>(KategoriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
