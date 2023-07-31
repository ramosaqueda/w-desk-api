import { DynamicModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { Environment} from "src/common/enum";
import { DataSourceOptions } from "typeorm";
 
export const DatabaseProviders : DynamicModule = TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
        const isDevelopmentEnv = config.get('NODE_ENV') === Environment.Development;
        const dbConfig = {
            type: 'mysql',
            host: config.get('DATABASE_HOST'),
            port: +config.get('DATABASE_PORT'),
            username: config.get('DATABASE_USERNAME'),
            password: config.get('DATABASE_PASSWORD'),
            database: config.get('DATABASE_NAME'),
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: isDevelopmentEnv
        }  as DataSourceOptions;
        return dbConfig;
    }
    
}) 