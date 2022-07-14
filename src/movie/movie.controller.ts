import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Movie } from './movie.entity';
import { UsersService } from './movie.service';

@Crud({
  model: {
    type: Movie,
  },
})
@Controller('movie')
export class UsersController implements CrudController<Movie> {
  constructor(public service: UsersService) {}
}
