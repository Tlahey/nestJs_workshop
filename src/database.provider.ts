import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

export const databaseProviders = [
  TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'cats',
    entities: [
      join(__dirname, '**', '*.entity.{ts,js}')
    ],
    synchronize: true,
    useUnifiedTopology: true
  })
];