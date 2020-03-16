import { Controller, Get, Delete, Post, Patch, Param, Body, Inject } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDTO } from './dto/cat.dto';
import { Cat } from './cats.entity';
import { ApiResponse, ApiCreatedResponse, ApiParam } from '@nestjs/swagger';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';

@Controller("/cats")
export class CatsController {

    constructor(
        @Inject('HELLO_SERVICE') private readonly client: ClientProxy, 
        private readonly catService: CatsService
    ) { }

    @Get()
    @ApiResponse({ status: 200, description: `Tableau contenant tous les chats`, type: CatDTO, isArray: true })
    async get() : Promise<CatDTO[]> {
        this.client.emit<any>('message_printed', 'Hello World');
        return await this.catService.find();
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        description: 'identifiant',
        type: 'string'
    })
    public async delete(
        @Param('id') id
    ) : Promise<boolean> {
        return await this.catService.delete(id);
    }

    @Post()
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: CatDTO })
    public async create(
        @Body() cat: CatDTO 
    ) : Promise<Cat> {
        return await this.catService.create(cat);
    }

    @Patch(':id')
    public async update(
        @Param('id') id,
        @Body() cat: CatDTO
    ) : Promise<Cat> {
        return await this.catService.patch(id, cat);
    }

}
