import { IsEnum, IsNotEmpty, IsDateString, IsBoolean } from 'class-validator';
import { TaskStatus, TaskPriority } from '../tasks.enum';
import { ApiProperty } from '@nestjs/swagger';
import { errorMessage } from '../../common/constants/messages';

export class CreateTaskDto {
  @IsNotEmpty({ message: errorMessage.pleaseProvide(['Task name']) })
  @ApiProperty({ description: 'Name of the task' })
  name: string;

  @IsNotEmpty({ message: errorMessage.pleaseProvide(['Due Date']) })
  @IsDateString({}, { message: errorMessage.invalidDate })
  @ApiProperty({ description: 'Due date of the task in ISO format' })
  dueDate: Date;

  @IsEnum(TaskStatus)
  @ApiProperty({ enum: TaskStatus })
  @IsEnum(TaskStatus, { message:  errorMessage.invalidStatus(TaskStatus) })
  status: TaskStatus;

  @IsEnum(TaskPriority)
  @IsEnum(TaskPriority, { message: errorMessage.invalidPriority(TaskPriority) })
  @ApiProperty({ enum: TaskPriority })
  priority: TaskPriority;

  @IsBoolean()
  @ApiProperty({ default: true })
  isActive: boolean;
}

