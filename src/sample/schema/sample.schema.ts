import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SampleDocument = Sample & Document;

@Schema()
export class Sample {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const SampleSchema = SchemaFactory.createForClass(Sample);
