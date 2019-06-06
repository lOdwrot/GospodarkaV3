import {getCollectionOrders} from '../database'

export const getAllOrders = async () => await getCollectionOrders()
                                                .find()
                                                .toArray()

export const order = async (mail) => await getCollectionOrders()
                                                        .findOne({mail})


export const postOrder = async (userId, mealId) => {
    const result = await getCollectionOrders().insertOne({date:(new Date()).toISOString(), userId:userId, meal:mealId})
    return result.ops[0]
}