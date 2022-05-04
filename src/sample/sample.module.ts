import { Module } from '@nestjs/common';
import { SampleService } from './sample.service';
import { SampleController } from './sample.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sample, SampleSchema } from './schema/sample.schema';

@Module({
  providers: [SampleService],
  controllers: [SampleController],
  imports: [
    MongooseModule.forFeature([{ name: Sample.name, schema: SampleSchema }]),
  ],
})
export class SampleModule {}
