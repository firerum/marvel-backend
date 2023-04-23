import { Injectable } from '@nestjs/common';
import { CreateMutant } from './dto/create.dto';
import { UpdateMutant } from './dto/update.dto';
import { Mutant } from './interfaces/Marvel.interface';
import { Pool } from 'pg';

@Injectable()
export class MarvelService {
  private readonly pool: Pool;
  constructor() {
    this.pool = new Pool({
      user: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });
  }

  // @routes /mutants
  // @method GET request
  // @desc retrieve all mutants
  async findAll(): Promise<Mutant[]> {
    const { rows } = await this.pool.query('SELECT * FROM marvel_entity');
    return rows;
  }

  //  @routes /mutants/:id
  //  @method GET request
  //  @desc retrieve mutant with a given id
  async findOne(id: string): Promise<Mutant> {
    const query = `
         SELECT * FROM marvel_entity
         WHERE id = $1
       `;
    const { rows } = await this.pool.query(query, [id]);
    return rows[0];
  }

  //  @routes /mutants
  //  @method POST request
  //  @desc create new mutant
  async create(createMutantDto: CreateMutant): Promise<CreateMutant> {
    const { name, status, gender, age, accomplices, enemies } = createMutantDto;
    const query = `
          INSERT INTO marvel_entity(name, status, gender, age, friends, foes) 
          VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (name) DO NOTHING
          RETURNING *
      `;
    const { rows } = await this.pool.query(query, [
      name,
      status,
      gender,
      age,
      accomplices,
      enemies,
    ]);
    return rows[0];
  }

  //  @routes /mutants/:id
  //  @method PUT request
  //  @desc update mutant details with a given id
  async update(updateMutantDto: UpdateMutant, id: string): Promise<Mutant> {
    const { name, status, gender, age, accomplices, enemies } = updateMutantDto;
    //check if mutant already exists and pre-populate the properties that weren't updated
    const result = await this.pool.query(
      `SELECT * FROM marvel_entity WHERE id = $1`,
      [id],
    );
    const [mutant] = result.rows;
    const query = `
          UPDATE marvel_entity SET 
          name = $1, status = $2, gender = $3, age = $4, friends = $5, foes = $6, updated_at = $7 
          WHERE id = $8
          RETURNING *
      `;
    const { rows } = await this.pool.query(query, [
      name ?? mutant.name,
      status ?? mutant.status,
      gender ?? mutant.gender,
      age ?? mutant.age,
      accomplices ?? mutant.friends,
      enemies ?? mutant.foes,
      id,
    ]);
    return rows[0];
  }

  // @routes /mutants/:id
  // @method DELETE request
  // @desc delete mutant with a given id
  async delete(id: string): Promise<void> {
    await this.pool.query('DELETE FROM marvel_entity WHERE id = $1', [id]);
  }
}
