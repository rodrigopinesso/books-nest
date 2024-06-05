import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prismaService.product.create({ data: createProductDto });
  }

  async findAll() {
    return this.prismaService.product.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.product.findUnique({ where: { id } });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where: { id },
      data: { ...updateProductDto },
    });
  }

  async remove(id: string) {
    return this.prismaService.product.delete({ where: { id } });
  }
}
