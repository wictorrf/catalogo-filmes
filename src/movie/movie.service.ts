import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<Movie> {
  constructor(@InjectRepository(Movie) repo) {
    super(repo);
  }
}
