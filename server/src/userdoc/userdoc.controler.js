import {getCollectionUserDoc} from '../database'
import mongo from "mongodb"

export const getAllUserDocs = async () => await getCollectionUserDoc()
                                                .find()
                                                .toArray()

export const getAllDocsForUser = async (userId) => await getCollectionUserDoc()
                                                .find({userId})
                                                .toArray()

export const getUserDoc = async (userDocId) => await getCollectionUserDoc()
                                                       .findOne(
                                                           {_id: new mongo.ObjectID(userDocId)}
                                                        )

export const updateUserDoc = async (newData) => await getCollectionUserDoc()
                                                        .updateOne(
                                                            {_id: new mongo.ObjectID(newData._id)},
                                                            {$set: {...newData, _id: new mongo.ObjectID(newData._id)}}
                                                        )

export const insertUserDoc = async (newUserDoc) => await getCollectionUserDoc()
                                                            .insertOne(
                                                                newUserDoc
                                                            )

export const deleteUserDoc = async (userDocId) => await getCollectionUserDoc()
                                                            .deleteOne(
                                                                {_id: new mongo.ObjectID(userDocId)}
                                                            )
