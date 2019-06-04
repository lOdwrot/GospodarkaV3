import Meals from './Meals'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    mealList: state.meal.mealList,
    userChoice: state.meal.userChoice
  })
  
const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Meals)