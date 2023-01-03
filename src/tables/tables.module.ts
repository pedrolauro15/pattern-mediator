import { Module } from '@nestjs/common';
import { FakeController } from './fake.controller';
import { Mediator } from './mediator/mediator';
import { TableMediator } from './mediator/table.mediator';

@Module({
  controllers: [FakeController],
  providers: [{ provide: Mediator<string>, useClass: TableMediator }],
})
export class TablesModule {}
