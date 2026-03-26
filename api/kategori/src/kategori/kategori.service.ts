import {
  BadRequestException,
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class KategoriService {
  // buat cosntructor untuk prisma service
  constructor(private readonly prisma: PrismaService) {}

  // simpan data kategori
  async create(createKategoriDto: CreateKategoriDto) {
    // return 'This action adds a new kategori';

    const nama = createKategoriDto.nama?.trim();
    if (!nama) {
      throw new BadRequestException({
        success: false,
        message: 'Nama kategori wajib diisi',
        metadata: {
          status: HttpStatus.BAD_REQUEST,
        },
      });
    }

    // buat variabel untuk filter nama
    const nama_filter = nama.replace(/\s/g, '').toLocaleLowerCase();

    // cek apakah nama kategori sudah ada
    const exist = await this.prisma.kategori.findFirst({
      where: {
        nama_filter: nama_filter,
      },
    });

    // jika nama kategori ditemukan
    if (exist) {
      // tampilkan respon
      throw new ConflictException({
        success: false,
        message: 'Data kategori gagal disimpan (Nama kategori sudah ada)!!',
        metadata: {
          status: HttpStatus.CONFLICT,
        },
      });
    }

    // jika nama kategori tidak ditemukan
    // simpan data kategori
    await this.prisma.kategori.create({
      data: {
        nama: nama,
        nama_filter: nama_filter,
      },
    });

    // tampilkan respon
    return {
      success: true,
      message: 'Data kategori berhasil di simpan',
      metadata: {
        status: HttpStatus.CREATED,
      },
    };
  }

  // tampilkan seluruh data kategori
  async findAll() {
    // return `This action returns all kategori`;
    // tampilkan data kategori
    const data = await this.prisma.kategori.findMany();
    // jika data kategori kosong (tidak ada)
    if (data.length === 0) {
      // throw new HttpException(
      //   {
      //     success: false,
      //     message: 'Data kategori tidak ditemukan!',
      //     metadata: {
      //       status: HttpStatus.NOT_FOUND,
      //       total_data: data.length,
      //     },
      //   },
      //   HttpStatus.NOT_FOUND,
      // );
      throw new NotFoundException({
        success: false,
        message: 'Data kategori tidak ditemukan!',
        metadata: {
          status: HttpStatus.NOT_FOUND,
          total_data: data.length,
        },
      });
    }

    // jika data kategori tidak kosong (tersedia)
    return {
      success: true,
      message: '',
      metadata: {
        status: HttpStatus.OK,
        total_data: data.length,
      },
      data: data,
    };
  }

  async findOne(id: number) {
    // return `This action returns a #${id} kategori`;
    if (Number.isNaN(id)) {
      throw new BadRequestException({
        success: false,
        message: 'Parameter/Slug id harus angka!',
        metadata: {
          status: HttpStatus.BAD_REQUEST,
        },
      });
    }

    // tampilkan data kategori berdasarkan id
    const data = await this.prisma.kategori.findUnique({
      where: { id: id },
    });

    // jika data kategori tidak ditemukan
    if (!data) {
      throw new NotFoundException({
        success: false,
        message: 'Data kategori tidak ditemukan!',
        metadata: {
          status: HttpStatus.NOT_FOUND,
        },
      });
    }

    //  jika data kategori ditemukan
    return {
      success: true,
      message: '',
      metadata: {
        status: HttpStatus.OK,
      },
      data: data,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateKategoriDto: UpdateKategoriDto) {
    return `This action updates a #${id} kategori`;
  }

  remove(id: number) {
    return `This action removes a #${id} kategori`;
  }
}
