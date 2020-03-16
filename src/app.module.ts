import { SshMicroserviceController } from './microservices/ssh/sshmicroservice.controller';
import { CatsModule } from './controllers/cats/cats.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database.provider';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
      CatsModule, 
      ...databaseProviders
  ],
  controllers: [
      SshMicroserviceController,  
      AppController
  ],
  providers: [
      AppService,
  ],
  exports: [
  ]
})
export class AppModule {}
