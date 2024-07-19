import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // ใส่ entity ที่คุณต้องการใช้ในโมดูลนี้
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
