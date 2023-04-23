import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarvelController } from './marvel/marvel.controller';
import { MarvelService } from './marvel/marvel.service';
import { MarvelModule } from './marvel/marvel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MarvelEntity } from './marvel/entity/marvel.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MarvelModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [MarvelEntity],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, MarvelController],
  providers: [AppService, MarvelService],
})
export class AppModule {}
