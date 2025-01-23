import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from 'typeorm';
  
  @Entity('users') 
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255, nullable: false })
    nome: string;
  
    @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
    email: string;
  
    @CreateDateColumn({ type: 'timestamp' })
    data_criacao: Date;

    @Column({ type: 'boolean', default: false })
    deletado: boolean; 
  }
  