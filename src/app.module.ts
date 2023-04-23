import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarvelController } from './marvel/marvel.controller';
import { MarvelService } from './marvel/marvel.service';
import { MarvelModule } from './marvel/marvel.module';

@Module({
  imports: [MarvelModule],
  controllers: [AppController, MarvelController],
  providers: [AppService, MarvelService],
})
export class AppModule {}
