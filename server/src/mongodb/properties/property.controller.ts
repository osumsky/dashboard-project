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
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { Property } from '../properties/schema';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  getAll(): Promise<Property[]> {
    return this.propertyService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id): Promise<Property> {
    return this.propertyService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.propertyService.create(createPropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Property> {
    return this.propertyService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updatePropertyDto: UpdatePropertyDto,
    @Param('id') id: string,
  ): Promise<Property> {
    return this.propertyService.update(id, updatePropertyDto);
  }
}
