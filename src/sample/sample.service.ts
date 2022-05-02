import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateSampleModel } from './model/create-sample.model';
import { UpdateSampleModel } from './model/update-sample.model';

import { Sample, SampleDocument } from './schema/sample.schema';

@Injectable()
export class SampleService {
  constructor(
    @InjectModel(Sample.name) private readonly model: Model<SampleDocument>,
  ) {}

  async findAll(): Promise<Sample[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Sample> {
    return await this.model.findById(id).exec();
  }

  async create(data: CreateSampleModel): Promise<Sample> {
    return await new this.model({
      ...data,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, data: UpdateSampleModel): Promise<Sample> {
    return await this.model
      .findByIdAndUpdate(id, { ...data, updatedAt: new Date() })
      .exec();
  }

  async delete(id: string): Promise<Sample> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
