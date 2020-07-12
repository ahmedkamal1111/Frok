import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import News from './components/News/News';
import NewsDetails from './components/NewsDetails/NewsDetails';
import Layout from './hoc/Layout/Layout';
import Auth from './components/Auth/Auth';
import Logout from './components/Auth/Logout/Logout';
import AddANews from './components/AddANews/AddANews';
import AddUser from './components/AddUser/AddUser';
import ShowNews from './components/ShowNews/ShowNews';
class App extends Component {
  render () {
    return (
      <div>
        <Layout >
          <Switch>
           <Route path="/login" exact component={Auth} />
           <Route path="/logout"  exact component={Logout} />
           <Route path="/home/:newsId"component={NewsDetails}/>
           <Route path="/addnews"component={AddANews}/>
           <Route path="/adduser"component={AddUser}/>
           <Route path="/shownews"component={ShowNews}/>
           <Route path="/"  exact component={News} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
