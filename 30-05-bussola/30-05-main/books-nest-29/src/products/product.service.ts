import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dtos/update-product.dto';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductRepository } from './product.repository';
import { NotFoundException } from 'src/common/exceptions/not-found.exception';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  async findAll() {
    return this.productRepository.findAll();
  }

  async findOne(id: string) {
    const foundProduct = await this.productRepository.findOne(id);
    if (!foundProduct) {
      throw new NotFoundException(`Product not found with id ${id}`);
    }
    return foundProduct;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.findOne(id);

    return this.productRepository.update(id, updateProductDto);
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.productRepository.remove(id);
  }
}
