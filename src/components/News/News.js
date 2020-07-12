import React ,{Component} from 'react';
import classes from './Photo.css';
import media from './7.1 Grid.css';
import axios from "axios";
import { NavLink } from 'react-router-dom';
class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
          news:[],
        };
      }
      componentDidMount() {
        axios
        .get(`${'https://cors-anywhere.herokuapp.com/'}https://api-task1.adminssw.com/news//allNewsActive`)
        .then(response => {
            this.setState({news:response.data.newsData})
          });
        }
 
        
    render () {
      return (
       <div>
          {this.state.news.map(response=>{
              return (
                          <section className={`${media.col} ${media.row} $ `}>
                          <div className={classes.Menu} >
                            <header style={{marginTop:'2.5%',fontSize:'18px' }} >{response.tranierName} </header>
                          <NavLink to={'/home/'+response.newsId} >
                            <img className={classes.img} src={response.imagePath}/>
                          </NavLink>
                          <footer style={{marginTop:'8.5%',width:'100%',textAlign:'left',fontSize:'20px',marginLeft:'2%' }} >
                          &nbsp;titel :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {response.titel} </footer>
                          </div>
                          <br/>
                      </section>
                       )
                    })} 
      </div> 
      );
      }
    }
export default Articles;