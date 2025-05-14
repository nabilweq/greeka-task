import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus, TaskPriority } from '../tasks.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column({ type: 'timestamp' })
  @ApiProperty()
  dueDate: Date;

  @Column({ type: 'enum', enum: TaskStatus })
  @ApiProperty({ enum: TaskStatus })
  status: TaskStatus;

  @Column({ type: 'enum', enum: TaskPriority })
  @ApiProperty({ enum: TaskPriority })
  priority: TaskPriority;

  @Column({ default: true })
  @ApiProperty()
  isActive: boolean;

  @Column({ default: false })
  @ApiProperty()
  isDeleted: boolean;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;
}
