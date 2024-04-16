import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ZeroxService } from './zerox.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [ZeroxService, ConfigService],
  exports: [ZeroxService],
})
export class ZeroxModule {}