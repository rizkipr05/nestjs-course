import { Test, TestingModule } from '@nestjs/testing';
import { KategoriService } from './kategori.service';
import { PrismaService } from '../prisma.service';

describe('KategoriService', () => {
  let service: KategoriService;

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
      providers: [
        KategoriService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<KategoriService>(KategoriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
