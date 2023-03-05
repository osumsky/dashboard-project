/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
  HttpCode,
  HttpStatus,
  Header,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product.dto';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return this.productService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return 'Remove: id=' + id;
  }

  @Put(':id')
  update(
    @Body() { title, price }: updateProductDto,
    @Param('id') id: string,
  ): string {
    return `Update: id=${id} (${title}, ${price})`;
  }
}
