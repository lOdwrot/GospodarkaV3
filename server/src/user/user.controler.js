import {getCollectionUser} from '../database'
import mongo from "mongodb"

export const getAllUsers = async () => await getCollectionUser()
                                                .find()
                                                .toArray()

export const login = async (mail, password) => await getCollectionUser()
                                                        .findOne(
                                                            {mail, password}
                                                        )

export const getUser = async (userId) => await getCollectionUser()
                                                       .findOne(
                                                           {_id: new mongo.ObjectID(userId)}
                                                        )

export const updateUser = async (newData) => await getCollectionUser()
                                                        .updateOne(
                                                            {_id: new mongo.ObjectID(newData._id)},
                                                            {$set: {...newData, _id: new mongo.ObjectID(newData._id)}}
                                                        )

export const insertUser = async (newUser) => await getCollectionUser()
                                                            .insertOne(
                                                                newUser
                                                            )

export const deleteUser = async (userId) => await getCollectionUser()
                                                            .deleteOne(
                                                                {_id: new mongo.ObjectID(userId)}
                                                            )