import PersonalData from './PersonalData'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    userData: {
        name: state.personalData.name,
        surname: state.personalData.surname,
        grade: state.personalData.grade,
        managerName: state.personalData.managerName,
        currentBuild: state.personalData.currentBuild,
        imageURL: state.personalData.imageURL,
    }
  })
  
const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData)