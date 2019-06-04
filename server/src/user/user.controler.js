import {getCollectionUser} from '../database'

export const getAllUsers = async () => await getCollectionUser()
                                                .find()
                                                .toArray()

export const login = async (mail, password) => await getCollectionUser()
                                                        .findOne({mail, password})