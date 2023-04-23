import { Module } from '@nestjs/common';
import { MarvelController } from './marvel.controller';
import { MarvelService } from './marvel.service';

@Module({
  imports: [MarvelModule],
  controllers: [MarvelController],
  providers: [MarvelService],
})
export class MarvelModule {}
