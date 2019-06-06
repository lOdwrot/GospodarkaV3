import {getCollectionMeals} from '../database'
import mongo from "mongodb"

export const getAllMeals = async () => await getCollectionMeals()
                                                .find()
                                                .toArray()

export const meal = async (mealId) => await getCollectionMeals()
                                                        .findOne({_id: new mongo.ObjectID(mealId)})
