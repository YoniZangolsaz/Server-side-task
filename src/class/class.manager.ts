import classInterface from './class.interface';
import * as classRepository from './class.repository';
import * as trainerRepository from '../trainer/trainer.repository';
import trainerInterface from '../trainer/trainer.interface';

export const addClass = async (dacument: classInterface) => {
  const addClass = await classRepository.addClass(dacument);
  return addClass;
};

export const getAllClass = async () => {
  const getAllClass: object = await classRepository.getAllClass();
  return getAllClass;
};

export const getClassByClassID = async (classID: string) => {
  const getClassByID: classInterface = await classRepository.getClassByClassID(
    classID
  );
  return getClassByID;
};

export const deleteClass = async (classID: string) => {
  const trainers: trainerInterface[] =
    await trainerRepository.getTrainerInClass(classID);

  for (let i = 0; i < trainers.length; i += 1) {
    await trainerRepository.deleteClassFromTrainer(trainers[i].userID, classID);
  }
  const deleteClass: classInterface = await classRepository.deleteClass(
    classID
  );
  return deleteClass;
};

export const updateClassName = async (classID: string, className: string) => {
  const updateClassName: classInterface = await classRepository.updateClassName(
    classID,
    className
  );
  return updateClassName;
};

export const updateStartTime = async (classID: string, startTime: number) => {
  const updateStartTime: classInterface = await classRepository.updateStartTime(
    classID,
    startTime
  );
  return updateStartTime;
};

export const updateEndTime = async (classID: string, endTime: number) => {
  const updateEndTime: classInterface = await classRepository.updateEndTime(
    classID,
    endTime
  );
  return updateEndTime;
};

export const getClassWithTrainers = async (classID: string) => {
  const trainers: any = await trainerRepository.getTrainerInClass(classID);
  const classQuery: classInterface = await classRepository.getClassByClassID(
    classID
  );
  classQuery.trainers = trainers;
  return classQuery;
};
