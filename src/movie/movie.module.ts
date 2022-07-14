import { Module } from '@nestjs/common';
import { UsersService } from './movie.service';
import { UsersController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class MovieModule {}
