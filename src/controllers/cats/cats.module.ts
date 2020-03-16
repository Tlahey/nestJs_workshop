import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cats.entity';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SshMicroserviceController } from 'src/microservices/ssh/sshmicroservice.controller';

@Module({
    imports: [
        ClientsModule.register([
            { name: 'HELLO_SERVICE', transport: Transport.TCP }
        ]),
        TypeOrmModule.forFeature([Cat])
    ],
    controllers: [CatsController, SshMicroserviceController],
    providers: [CatsService],
})
export class CatsModule {}
