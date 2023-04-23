import { Controller, Get, Put, Post, Delete, Param } from '@nestjs/common';
import { MarvelService } from './marvel.service';

@Controller('marvel')
export class MarvelController {
  constructor(private marvelService: MarvelService) {}

  @Get()
  getMutants(): string {
    return this.marvelService.findAll();
  }

  @Get(':id')
  getOneMutant(@Param('id') id: string): string {
    return this.marvelService.findOne(id);
  }

  @Post()
  createMutant(): string {
    return this.marvelService.create();
  }

  @Put(':id')
  updateMutant(@Param('id') id: string): string {
    return this.marvelService.update(id);
  }

  @Delete(':id')
  deleteMutant(@Param('id') id: string): string {
    return this.marvelService.delete(id);
  }
}
