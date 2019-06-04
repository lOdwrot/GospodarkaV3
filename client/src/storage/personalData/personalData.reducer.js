const INITIAL_STATE = {
    name: 'Adam',
    surname: 'Kowalski',
    grade: 7,
    managerName: 'Tomasz Zaolzianski',
    currentBuild: 'Manhatan',
    imageURL: 'https://www.vrc.crim.cam.ac.uk/VRCconferences/conference/cplenaries/pelnspeakers/person-placeholder.jpg/image'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}
