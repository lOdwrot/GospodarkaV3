import {getCollectionMeal} from '../database'

export const getAllMeals = async () => await getCollectionMeal()
                                                .find()
                                                .toArray()

export const order = async (mail, mealDescription) => await getCollectionMeal()
                                                        .findOne({mail, mealDescription})