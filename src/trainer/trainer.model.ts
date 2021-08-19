import * as config from '../config';
import trainerInterface from '../trainer/trainer.interface';
import mongoose, { Model, Schema, Document } from 'mongoose';

export const trainerSchema: Schema = new Schema({
    userID: { required: true, type: String, index: true, unique:true },
    fullName : { required: true, type: String },
    age: { required: true, type: Number },
    classIDs: { required: true, type: [String] }
}, {versionKey: false});

const trainerModel = mongoose.model<trainerInterface & Document>(config.trainerCollectionName, trainerSchema, config.trainerCollectionName);

export default trainerModel;