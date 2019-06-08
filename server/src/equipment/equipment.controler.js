import {getCollectionEquipment} from '../database'
import mongo from "mongodb"

export const getAllEquipments = async () => await getCollectionEquipment()
                                                .find()
                                                .toArray()


export const getEquipment= async (equipmentId) => await getCollectionEquipment()
                                                       .findOne(
                                                           {_id: new mongo.ObjectID(equipmentId)}
                                                        )

export const updateEquipment = async (newData) => await getCollectionEquipment()
                                                        .updateOne(
                                                            {_id: new mongo.ObjectID(newData._id)},
                                                            {$set: {...newData, _id: new mongo.ObjectID(newData._id)}}
                                                        )

export const insertEquipment = async (newEquipment) => await getCollectionEquipment()
                                                            .insertOne(
                                                                newEquipment
                                                            )

export const deleteEquipment = async (equipmentId) => await getCollectionEquipment()
                                                            .deleteOne(
                                                                {_id: new mongo.ObjectID(equipmentId)}
                                                            )

export const assignEquipment = async (equipmentId, projectid) => await getCollectionUser()
                                                            .updateOne(
                                                                {_id : new mongo.ObjectID(equipmentId)},
                                                                { $set: { projectid }}
                                                            )