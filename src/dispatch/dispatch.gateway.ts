import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import {Socket} from 'socket.io';
@WebSocketGateway({ cors:{origin: '*'}})
export class DispatchGateway {
    @SubscribeMessage('driver_ready')
    handleDriverReady(
      @MessageBody() data: {driverId: string},
      @ConnectedSocket() client:Socket
    )  {
      console.log(`Driver ${data.driverId} is now online`);

      client.emit('dispatch_update',`Welcome to SwiftRide, You are now Connected Driver ${data.driverId}`);
    }
}
