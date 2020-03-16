import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class SshMicroserviceController {
    @EventPattern({ cmd: 'message_printed' })
    async handleMessagePrinted(data: Record<string, unknown>) {
        console.log(data);
    }
}