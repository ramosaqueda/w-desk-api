import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProfileModule } from './profile/profile.module';
import { SystemController } from './system/system.controller';
import { SystemService } from './system/system.service';
import { SystemModule } from './system/system.module';
@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password:'12345',
      database: 'bdWDesk',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule,
    ProfileModule,
    SystemModule],
  controllers: [AppController, SystemController],
  providers: [AppService, SystemService],
})
export class AppModule {}
