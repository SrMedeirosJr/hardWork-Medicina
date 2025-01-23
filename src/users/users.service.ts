import {
    Injectable,
    NotFoundException,
    BadRequestException,
    ConflictException,
  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { User } from './users.entity';
import { ERROR_MESSAGES } from '../helpers/errors/error.messages';
import { SUCCESS_MESSAGES } from '../helpers/successfuls/success.messages';
  

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ where: { deletado: false } });
  }

  async findAllIncludingDeleted(): Promise<User[]> {
    return this.userRepository.find(); 
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(ERROR_MESSAGES.USER_NOT_FOUND(id));
    }
    return user;
  }


  async create(user: Partial<User>): Promise<User> {
    if (!user.nome) {
      throw new BadRequestException(ERROR_MESSAGES.MISSING_NAME);
    }

    if (!user.email) {
      throw new BadRequestException(ERROR_MESSAGES.MISSING_EMAIL);
    }

    const userExists = await this.userRepository.findOne({
        where: { nome: user.nome, email: user.email, deletado: false },
      });
      if (userExists) {
        throw new ConflictException(ERROR_MESSAGES.USER_ALREADY_EXISTS);
      }

    const emailExists = await this.userRepository.findOne({
      where: { email: user.email, deletado: false },
    });
    if (emailExists) {
      throw new ConflictException(ERROR_MESSAGES.EMAIL_IN_USE);
    }


    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }


  async updatePartial(id: number, user: Partial<User>): Promise<string> {
    const existingUser = await this.findOne(id);
  
    let hasChanges = false; 
  
 
    if (user.email && user.email !== existingUser.email) {
      const emailExists = await this.userRepository.findOne({
        where: { email: user.email, id: Not(id), deletado: false },
      });
      if (emailExists) {
        throw new ConflictException(ERROR_MESSAGES.EMAIL_IN_USE_UPDATE);
      }
      existingUser.email = user.email;
      hasChanges = true;
    }
  

    if (user.nome && user.nome !== existingUser.nome) {
      existingUser.nome = user.nome;
      hasChanges = true;
    }
  

    if (typeof user.deletado !== 'undefined' && user.deletado !== existingUser.deletado) {
      existingUser.deletado = Boolean(user.deletado);
      hasChanges = true;
    }
  

    if (!hasChanges) {
        throw new BadRequestException(ERROR_MESSAGES.NO_CHANGES);
      }
      
  

    await this.userRepository.save(existingUser);
  
    return SUCCESS_MESSAGES.USER_PARTIAL_UPDATED;
  }

  async update(id: number, user: Partial<User>): Promise<string> {
    const existingUser = await this.findOne(id);

    if (user.email) {
      const emailExists = await this.userRepository.findOne({
        where: { email: user.email, id: Not(id), deletado: false },
      });
      if (emailExists) {
        throw new ConflictException(ERROR_MESSAGES.EMAIL_IN_USE_UPDATE);
      }
    }

    const updatedUser = { ...existingUser, ...user };
    await this.userRepository.save(updatedUser);
    return SUCCESS_MESSAGES.USER_UPDATED;
  }
  

  async remove(id: number): Promise<string> {
    const user = await this.findOne(id);
    user.deletado = true;
    await this.userRepository.save(user);
    return SUCCESS_MESSAGES.USER_DELETED;
  }
}
