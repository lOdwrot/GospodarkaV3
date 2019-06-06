const INITIAL_STATE = {
    user: {
        _id: '5cf966d798d5e21938f0531f',
        name: 'Adam',
        surname: 'Kowalski',
        grade: 7,
        managerName: 'Tomasz Zaolzianski',
        currentBuild: 'Manhatan',
        imageURL: 'https://www.vrc.crim.cam.ac.uk/VRCconferences/conference/cplenaries/pelnspeakers/person-placeholder.jpg/image'
    }
}

const SET_USER = 'SET_USER'
export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_USER:
            return ({...state, user: action.payload})
        default:
            return state
    }
}
