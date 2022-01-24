import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './modules/patient/patient.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { VaccinationModule } from './modules/vaccination/vaccination.module';
import { PlaceModule } from './modules/place/place.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
      }),
      inject: [ConfigService],
    }),
    // MongooseModule.forRoot('mongodb://localhost/covid-portal'),
    PatientModule,
    VaccinationModule,
    PlaceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
