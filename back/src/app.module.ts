import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './entities/user.entity';
import { HomeModule } from './home/home.module';
import { Service } from './entities/service.entity';
import { Home } from './entities/home.entity';
import { ServiceModule } from './service/service.module';
import { Room } from './entities/room.entity';
import { ReservationModule } from './reservation/reservation.module';
import { Reservation } from './entities/reservation.entity';
import { RoomModule } from './room/room.module';
import { AuthModule } from './auth/auth.module';
import { Role } from './entities/role.entity';
import { Profile } from './entities/profile.entity';
import { Account } from './entities/account.entity';
import { Ads } from './entities/ads.entity';
import { Rule } from './entities/rule.entity';
import { RuleModule } from './rule/rule.module';
import { RoleController } from './role/role.controller';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'reserhab',
      entities: [User, Profile, Home, Service, Room, Reservation, Role, Account, Ads, Rule],
      synchronize: true
    }),
    UserModule,
    HomeModule,
    ServiceModule,
    ReservationModule,
    RoomModule,
    AuthModule,
    RuleModule,
    RoleModule
  ],
  controllers: [AppController, RoleController],
  providers: [AppService],
})
export class AppModule {}
