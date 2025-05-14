import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { getPaginationOptions } from '../common/utils/pagination';
import { errorMessage } from '../common/constants/messages';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,
  ) {}

  create(dto: CreateTaskDto) {
    const task = this.taskRepo.create(dto);
    return this.taskRepo.save(task);
  }

  async findAll(query: any) {
    const { page, limit, status, priority, isActive } = query;
    const { limit: take, skip } = getPaginationOptions({ page: +page, limit: +limit });

    const where: any = { isDeleted: false };
    if (status) where.status = status;
    if (priority) where.priority = priority;
    if (isActive) where.isActive = isActive;
    
    const [data, totalCount] = await this.taskRepo.findAndCount({
      where,
      take,
      skip,
      order: { createdAt: 'DESC' },
    });

    return {
      data,
      totalCount,
      page: +page,
      limit: +limit,
    };
  }

  async findOne(id: number) {
    const task = await this.taskRepo.findOne({ where: { id, isDeleted: false } });
    if (!task) throw new NotFoundException(errorMessage.notFound('Task'));
    return task;
  }

  async update(id: number, dto: UpdateTaskDto) {
    await this.taskRepo.update(id, dto);
    return this.findOne(id);
  }

  async delete(id: number) {
    const task = await this.findOne(id);
    task.isDeleted = true;
    await this.taskRepo.save(task);
    return { deleted: true };
  }
}
