import LoginFrame from './LoginFrame'
import { connect } from 'react-redux'
import { setUserRole } from '../../storage/app/app.action';
import axios from 'axios';
import { setUser } from '../../storage/personalData/personalData.reducer';

const mapStateToProps = (state) => ({
    userRole: state.app.userRole
  })
  
const mapDispatchToProps = (dispatch) => ({
  setUserRole: (userRole) => dispatch(setUserRole(userRole)),
  setUser: (user) => dispatch(setUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginFrame)