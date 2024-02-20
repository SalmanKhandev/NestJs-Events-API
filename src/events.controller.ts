import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { Event } from './event.entity';

@Controller('/events')
export class EventsController {
  private events: Event[] = [];
  @Get()
  findAll() {
    return this.events;
  }

  @Get(':id')
  findOne(@Param() id) {
    return this.events.find((event) => event.id === id);
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    const event = {
      ...input,
      when: new Date(input.when),
      id: this.events.length + 1,
    };
    return event;
  }

  @Patch(':id')
  update(@Param() id, @Body() input) {
    return id;
  }

  @Delete(':id')
  remove(@Param() id) {
    this.events = this.events.filter((event) => event.id !== id);
    return this.events;
  }
}
