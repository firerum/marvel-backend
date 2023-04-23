import { Injectable } from '@nestjs/common';

@Injectable()
export class MarvelService {
  findAll(): string {
    return `find all mutants`;
  }

  findOne(id: string): string {
    return `find one mutant ${id}`;
  }

  create(): string {
    return `create mutant`;
  }

  update(id: string): string {
    return `update mutant ${id}`;
  }

  delete(id: string): string {
    return `delete mutant ${id}`;
  }
}
