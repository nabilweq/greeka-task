# 📝 Todo task management API

A RESTful API built with NestJS, PostgreSQL, and TypeORM for managing tasks. Includes Swagger API documentation, filtering, pagination, and task management features.

---

## Features :-

- CRUD operations for tasks
- Task status and priority enums
- Filter tasks by `status`, `priority`, and `isActive`
- Pagination with `page` and `limit` query params
- Swagger UI (`/api-docs`) for interactive API testing
- PostgreSQL + TypeORM integration
- Environment-based configuration using `.env`
- A sample env file with field names is there named as `.env.example`
- For deleting the task, here Iam used soft delete

---

## Installation :-

```bash
git clone https://github.com/nabilweq/greeka-task.git
cd greeka-task
npm install
