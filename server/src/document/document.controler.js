import {getCollectionDocument} from '../database'
import mongo from "mongodb"

export const getAllDocuments = async () => await getCollectionDocument()
                                                .find()
                                                .toArray()

export const getDocument = async (documentId) => await getCollectionDocument()
                                                       .findOne(
                                                           {_id: new mongo.ObjectID(documentId)}
                                                        )

export const updateDocument = async (newData) => await getCollectionDocument()
                                                        .updateOne(
                                                            {_id: new mongo.ObjectID(newData._id)},
                                                            {$set: {...newData, _id: new mongo.ObjectID(newData._id)}}
                                                        )

export const insertDocument = async (newDocument) => await getCollectionDocument()
                                                            .insertOne(
                                                                newDocument
                                                            )

export const deleteDocument = async (documentId) => await getCollectionDocument()
                                                            .deleteOne(
                                                                {_id: new mongo.ObjectID(documentId)}
                                                            )

export const assignDocument = async (documentId, userId) => await getCollectionDocument()
                                                            .updateOne(
                                                                {_id : new mongo.ObjectID(documentId)},
                                                                { $set: { userId }}
                                                            )