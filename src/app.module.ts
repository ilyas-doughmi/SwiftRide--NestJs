import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DispatchGateway } from './dispatch/dispatch.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DispatchGateway],
})
export class AppModule {}
