import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientsSeeder } from './seed-files/patient.seeder';
import {
  Patient,
  PatientSchema,
} from 'src/modules/patient/schemas/patient.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Place, PlaceSchema } from 'src/modules/place/schemas/place.schemas';
import { PlacesSeeder } from './seed-files/place/places.seeder';

seeder({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: 'mongodb://127.0.0.1:27017/covid-portal2',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      // { name: Patient.name, schema: PatientSchema }
      { name: Place.name, schema: PlaceSchema },
    ]),
  ],
}).run([
  PlacesSeeder,
  // PatientsSeeder
]);
