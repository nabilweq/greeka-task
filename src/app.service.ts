import { Injectable } from '@nestjs/common';
import { successMessage } from './common/constants/messages';

@Injectable()
export class AppService {
  healthCheck(): string {
    return successMessage.healthOk;
  }
}
