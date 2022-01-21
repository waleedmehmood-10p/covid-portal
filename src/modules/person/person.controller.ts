import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async getAllPersons() {
    return this.personService.getAllPersons();
  }

  @Post()
  async addPerson(@Req() req: Request, @Body() body: any) {
    const person = body;

    return this.personService.createPerson(person);
  }
}
