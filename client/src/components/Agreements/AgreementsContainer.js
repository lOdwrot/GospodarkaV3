import Agreements from './Agreements'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    agreements: [{name: 'Agreement 1'}, {name: 'Agreement 2'}]
})
  
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Agreements)