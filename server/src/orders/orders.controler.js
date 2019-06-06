import {getCollectionOrders} from '../database'
import mongo from "mongodb"

export const getAllOrders = async () => await getCollectionOrders()
                                                .find()
                                                .toArray()

export const userOrder = async (userId) => await getCollectionOrders()
                                                        .findOne(
                                                           userId
                                                        )

export const userDayOrder = async (userId, date) => await getCollectionOrders()
                                                        .findOne(
                                                           {userId, date}
                                                        )

export const postOrder = async (userId, mealId) => {
    const result = await getCollectionOrders().insertOne({date:(new Date()).toISOString().slice(0,10), userId:userId, mealId:mealId})
    return result.ops[0]
}