import LoginFrame from './LoginFrame'
import { connect } from 'react-redux'
import { setUserRole } from '../../storage/app/app.action';
import axios from 'axios';

const mapStateToProps = (state) => ({
    userRole: state.app.userRole
  })
  
const mapDispatchToProps = (dispatch) => ({
    logIn: async (login, password) => {
      debugger
      const loginResp = await axios.post(
        '/api/Account/Login',
        {
          Mail: login,
          Password: password
        })
      dispatch(setUserRole('worker'))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginFrame)