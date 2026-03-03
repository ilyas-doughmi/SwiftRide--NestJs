import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import {Server,Socket} from 'socket.io';

@WebSocketGateway({ cors:{origin: '*'}})
export class DispatchGateway {
  @WebSocketServer()
  server: Server;

    @SubscribeMessage('driver_ready')
    handleDriverReady(
      @MessageBody() data: {driverId: string},
      @ConnectedSocket() client:Socket
    )  {
      console.log(`Driver ${data.driverId} is now online`);

      client.emit('dispatch_update',`Welcome to SwiftRide, You are now Connected Driver ${data.driverId}`);
    }
}
