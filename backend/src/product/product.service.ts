import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'node:assert';
import { DeleteResult, Like, Repository, UpdateResult } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return await this.productRepository.create(createProductDto);
  }

  async search(word: string): Promise<Product[]> {
    return await this.productRepository.find({
      where: { name: Like(`%${word}%`) },
      take: word == null ? 25 : 10,
    });
  }

  async findOne(id: string): Promise<Product> {
    return await this.productRepository.findOne(id);
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<UpdateResult> {
    return await this.productRepository.update(id, updateProductDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }
}
