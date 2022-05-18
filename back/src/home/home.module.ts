import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from 'src/account/account.module';
import { Home } from 'src/entities/home.entity';
import { RuleModule } from 'src/rule/rule.module';
import { ServiceModule } from 'src/service/service.module';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  imports: [AccountModule, ServiceModule, RuleModule, TypeOrmModule.forFeature([Home])],
  providers: [HomeService],
  controllers: [HomeController],
  exports: [HomeService]
})
export class HomeModule {}
