import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';
import { PrismaModule } from './common/prisma/prisma.module';

@Module({
  imports: [ProductModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
