import LoginFrame from './LoginFrame'
import { connect } from 'react-redux'
import { setUserRole } from '../../storage/app/app.action';
import axios from 'axios';

const mapStateToProps = (state) => ({
    userRole: state.app.userRole
  })
  
const mapDispatchToProps = (dispatch) => ({
  setUserRole: async (userRole) => dispatch(setUserRole(userRole)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginFrame)