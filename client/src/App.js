import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Counter } from './components/Counter';
import Login from './components/Login/LoginFrameContainer'
import { withRouter } from 'react-router-dom'
import WorkerPage from './Pages/Worker'
import Building from './Pages/Building';
import Manager from './Pages/Manager';
import BossBuildingManagment from './Pages/BossBuildingManagment';
import Boss from './Pages/Boss';
import EditBuilding from './Pages/EditBuilding';
import InventoryManagment from './components/InventoryManagment/InventoryManagment';
import WorkersManagment from './components/WorkersManagment/WorkersManagment';


const App = ({userRole}) => {
  return (
    <Layout>
      <Route path='/counter' component={Counter} />
      <Route path='/workerModule' component={WorkerPage} />
      <Route path='/managerModule' component={Manager} />
      <Route path='/bossModule' component={Boss} />
      <Route path='/bossBuildingManagment' component={BossBuildingManagment} />
      <Route path='/building' component={Building} />
      <Route path='/inventory' component={InventoryManagment} />
      <Route path='/workersManagments' component={WorkersManagment} />
      <Route path='/editdBuilding/:id' component={EditBuilding} />
      <Route exact path='/' component={Login} />
    </Layout>)


  // return userRole 
  // ? (
  //   <Layout>
  //     <Route exact path='/' component={Home} />
  //     <Route path='/counter' component={Counter} />
  //     <Route path='/fetchdata' component={FetchData} />
  //     <Route path='/workerModule' component={WorkerPage} />
  //     <Route path='/managerModule' component={Manager} />
  //     <Route path='/bossModule' component={Boss} />
  //     <Route path='/bossBuildingManagment' component={BossBuildingManagment} />
  //     <Route path='/worker' component={WorkerPage} />
  //     <Route path='/building' component={Building} />
  //     <Route path='/editdBuilding/:id' component={EditBuilding} />
  //   </Layout>)
  // : <Login/>
}

const mapStateToProps = (state) => ({
  userRole: state.app.userRole
})

const mapDispatchToProps = (dispatch) => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))