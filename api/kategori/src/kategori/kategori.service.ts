import { Injectable } from '@nestjs/common';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
import { PrismaService } from '../prisma.service';

type KategoriRow = {
  id: number;
  nama: string;
};

type KategoriStore = {
  create(args: { data: { nama: string } }): Promise<KategoriRow>;
  findMany(): Promise<KategoriRow[]>;
  findUnique(args: { where: { id: number } }): Promise<KategoriRow | null>;
  update(args: {
    where: { id: number };
    data: { nama?: string };
  }): Promise<KategoriRow>;
  delete(args: { where: { id: number } }): Promise<KategoriRow>;
};

@Injectable()
export class KategoriService {
  // buat constructor untuk prisma service
  constructor(private readonly prisma: PrismaService) {}

  private get kategori(): KategoriStore {
    return (this.prisma as unknown as { kategori: KategoriStore }).kategori;
  }

  async create(createKategoriDto: CreateKategoriDto) {
    const data = await this.kategori.create({
      data: {
        nama: createKategoriDto.nama,
      },
    });

    return {
      success: true,
      message: 'Kategori berhasil ditambahkan',
      metadata: {
        status: 201,
      },
      data,
    };
  }

  // tampilkan seluruh data kategori
  async findAll() {
    // return this action returns all kategori
    // tampilkan data kategori
    const data = await this.kategori.findMany();
    return {
      success: true,
      message: '',
      metadata: {
        status: 200,
        total_data: data.length,
      },
      data: data,
    };
  }

  async findOne(id: number) {
    const data = await this.kategori.findUnique({
      where: { id },
    });

    return {
      success: true,
      message: '',
      metadata: {
        status: 200,
      },
      data,
    };
  }

  async update(id: number, updateKategoriDto: UpdateKategoriDto) {
    const data = await this.kategori.update({
      where: { id },
      data: {
        nama: updateKategoriDto.nama,
      },
    });

    return {
      success: true,
      message: 'Kategori berhasil diubah',
      metadata: {
        status: 200,
      },
      data,
    };
  }

  async remove(id: number) {
    const data = await this.kategori.delete({
      where: { id },
    });

    return {
      success: true,
      message: 'Kategori berhasil dihapus',
      metadata: {
        status: 200,
      },
      data,
    };
  }
}
