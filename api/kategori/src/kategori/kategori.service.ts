import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';

@Injectable()
export class KategoriService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createKategoriDto: CreateKategoriDto) {
    const data = await this.prisma.kategori.create({
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

  async findAll() {
    const data = await this.prisma.kategori.findMany();

    return {
      success: true,
      message: '',
      metadata: {
        status: 200,
        total_data: data.length,
      },
      data,
    };
  }

  async findOne(id: number) {
    const data = await this.prisma.kategori.findUnique({
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
    const data = await this.prisma.kategori.update({
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
    const data = await this.prisma.kategori.delete({
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
