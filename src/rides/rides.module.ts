import { Module } from '@nestjs/common';
import { RidesService } from './rides.service';
import { RidesController } from './rides.controller';
import { DispatchModule } from 'src/dispatch/dispatch.module';

@Module({
  controllers: [RidesController,DispatchModule],
  providers: [RidesService],
})
export class RidesModule {}
