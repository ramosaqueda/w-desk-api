import { Module } from '@nestjs/common';
import { DatabaseProviders } from './database.provider';

@Module({
    imports: [DatabaseProviders],
    exports: [DatabaseModule]
})
export class DatabaseModule {}
