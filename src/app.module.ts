import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { SystemController } from './system/system.controller';
import { SystemService } from './system/system.service';
import { SystemModule } from './system/system.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService}  from '@nestjs/config'
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          type: 'mysql',
          host: configService.get('DATABASE_HOST'),
          port: +configService.get<number>('DATABASE_PORT'),
          username: configService.get('DATABASE_USER'),
          password: configService.get('DATABASE_PASS'),
          database: configService.get('DATABASE_NAME'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true
        
        }),      
        inject: [ConfigService],
    }),
     
      UsersModule,
      ProfileModule,
      SystemModule,
   
    ]
})
export class AppModule {
  static port: number
  constructor(private readonly configservice: ConfigService) {
    AppModule.port = +this.configservice.get('PORT')

  }
}
