import PersonalData from './PersonalData'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    userData: {
        name: state.personalData.user.name,
        surname: state.personalData.user.surname,
        grade: state.personalData.user.grade,
        managerName: state.personalData.user.managerName,
        currentBuild: state.personalData.user.currentBuild,
        imageURL: state.personalData.user.imageURL,
        mail: state.personalData.user.mail,
    }
  })
  
const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData)