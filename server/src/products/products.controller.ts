import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id): string {
    return 'getOne ' + id;
  }

  @Post()
  create(@Body() { title, price }: CreateProductDto): string {
    return `Title: ${title}, price: ${price}`;
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
