import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { ApiBody, ApiTags, ApiParam, ApiOperation } from '@nestjs/swagger';

@ApiTags('users') 
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  
  @Get()
  @ApiOperation({ summary: 'Listagem de usuários ativos' })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('all')
  @ApiOperation({ summary: 'Listagem de todos os usuários' })
  async findAllIncludingDeleted(): Promise<User[]> {
    return this.usersService.findAllIncludingDeleted();
  }


  @Get(':id')
  @ApiOperation({ summary: 'Pesquisa de usuário específico' })
  async findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criação de usuário' })
  @ApiBody({
    description: 'Criação de um novo usuário',
    schema: {
      type: 'object',
      properties: {
        nome: { type: 'string', description: 'Nome do usuário', example: 'João' },
        email: { type: 'string', description: 'Email do usuário', example: 'joao@example.com' },
      },
      required: ['nome', 'email'], 
    },
  })
  async create(@Body() user: Partial<User>): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualização de usuário' })
  @ApiBody({
    description: 'Atualização completa de um usuário',
    schema: {
      type: 'object',
      properties: {
        nome: { type: 'string', description: 'Nome do usuário', example: 'Maria' },
        email: { type: 'string', description: 'Email do usuário', example: 'maria@example.com' },
      },
      required: ['nome', 'email'], 
    },
  })
  @ApiParam({
    name: 'id',
    description: 'ID do usuário a ser atualizado',
    example: 1,
  })
  async update(
    @Param('id') id: number,
    @Body() user: Partial<User>,
  ): Promise<string> {
    return this.usersService.update(id, user);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualização de campo específico do usuário' })
  @ApiBody({
    description: 'Atualização parcial de um usuário',
    schema: {
      type: 'object',
      properties: {
        nome: { type: 'string', description: 'Nome do usuário', example: 'Carlos' },
        email: { type: 'string', description: 'Email do usuário', example: 'carlos@example.com' },
      },
      required: [], 
    },
  })
  @ApiParam({
    name: 'id',
    description: 'ID do usuário a ser atualizado',
    example: 2,
  })
  async updatePartial(
    @Param('id') id: number,
    @Body() user: Partial<User>,
  ): Promise<string> {
    return this.usersService.updatePartial(id, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar usuário da base de dados' })
  async remove(@Param('id') id: number): Promise<string> {
    return this.usersService.remove(id);
}
}
