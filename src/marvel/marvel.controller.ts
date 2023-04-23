import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MarvelService } from './marvel.service';
import { Mutant } from './interfaces/Marvel.interface';
import { CreateMutant } from './dto/create.dto';
import { UpdateMutant } from './dto/update.dto';

@Controller('marvel')
export class MarvelController {
  constructor(private marvelService: MarvelService) {}

  @Get()
  getMutants(): Promise<Mutant[]> {
    return this.marvelService.findAll();
  }

  @Get(':id')
  getOneMutant(@Param('id') id: string): Promise<Mutant> {
    return this.marvelService.findOne(id);
  }

  @Post()
  createMutant(@Body() creatMutantDto: CreateMutant): Promise<Mutant> {
    return this.marvelService.create(creatMutantDto);
  }

  @Put(':id')
  updateMutant(
    @Param('id') id: string,
    @Body() updateMutantDto: UpdateMutant,
  ): Promise<Mutant> {
    return this.marvelService.update(updateMutantDto, id);
  }

  @Delete(':id')
  deleteMutant(@Param('id') id: string): Promise<void> {
    return this.marvelService.delete(id);
  }
}
