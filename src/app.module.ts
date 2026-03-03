import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RidesModule } from './rides/rides.module';
import { DispatchModule } from './dispatch/dispatch.module';

@Module({
  imports: [RidesModule,DispatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
