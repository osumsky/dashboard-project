import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// for .env
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose/dist';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CLUSTER0),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
