import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Person } from './schemas/person.schema';
import { PaginatedDto } from 'src/common/dto/paginadted-response.dto';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private readonly personModel: Model<Person>,
  ) {}

  async getAllPersons(): Promise<Person[]> {
    return this.personModel.find();
  }

  async getPerson() {
    return await this.personModel.findById(1);
  }
  async createPerson(person: any): Promise<Person> {
    return this.personModel.create(person);
  }
}
