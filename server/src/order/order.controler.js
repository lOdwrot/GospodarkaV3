import {getCollectionOrder} from '../database'

export const getAllOrder = async () => await getCollectionOrder()
                                                .find()
                                                .toArray()

export const order = async (mail, mealDescription) => await getCollectionOrder()
                                                        .findOne({mail, mealDescription})