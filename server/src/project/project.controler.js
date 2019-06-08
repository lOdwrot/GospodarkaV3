import {getCollectionProject} from '../database'
import mongo from "mongodb"

export const getAllProjects = async () => await getCollectionProject()
                                                .find()
                                                .toArray()

export const getProject = async (projectId) => await getCollectionProject()
                                                       .findOne(
                                                           {_id: new mongo.ObjectID(projectId)}
                                                        )

export const updateProject = async (newData) => await getCollectionProject()
                                                        .updateOne(
                                                            {_id: new mongo.ObjectID(newData._id)},
                                                            {$set: {...newData, _id: new mongo.ObjectID(newData._id)}}
                                                        )

export const insertProject = async (newProject) => await getCollectionProject()
                                                            .insertOne(
                                                                newProject
                                                            )

export const deleteProject = async (projectId) => await getCollectionProject()
                                                            .deleteOne(
                                                                {_id: new mongo.ObjectID(projectId)}
                                                            )

