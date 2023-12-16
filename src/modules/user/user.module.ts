import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/lib/db/entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
    imports:[ TypeOrmModule.forFeature([UserEntity])],
    controllers:[UserController],
    providers:[UserService,UserRepository]
})
export class UserModule {}
