import React ,{Component} from 'react';
import axios from "axios";
import classes from './NewsDetails.css';
class ArticlesDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedPost: '',
        };
      }
        componentDidMount(){
            if ( this.props.match.params.newsId ) {
                if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.newsId !== +this.props.match.params.newsId) ) {
                    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api-task1.adminssw.com/news/allnews/`)
                    .then( response => {
                      response.data.newsData.map(item=>{
                        item.newsId===this.props.match.params.newsId
                        this.setState({loadedPost:item})
                        
                      })
                      })
                    } }
        }



      render () {
          let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
          if ( this.props.match.params.id ) {
              post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
          }
          if ( this.state.loadedPost ) {
              post = (
                  <div style={{position:'relative'}}>

                  <div className={classes.ArticlesDetails}>
                          <div style={{marginTop:'3.5%',width:'100%',textAlign:'left',fontSize:'24px',marginLeft:'7%' }} >
                          &nbsp;Tranier Name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {this.state.loadedPost.tranierName} </div>                     
                           <div style={{marginTop:'3.5%',width:'100%',textAlign:'left',fontSize:'24px',marginLeft:'7%' }} >
                          &nbsp;Title :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {this.state.loadedPost.titel} </div>                     
                           <div style={{marginTop:'3.5%',width:'100%',textAlign:'left',fontSize:'24px',marginLeft:'7%' }} >
                          &nbsp;Description :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {this.state.loadedPost.description} </div> 
                           <div style={{marginTop:'3.5%',width:'100%',textAlign:'left',fontSize:'24px',marginLeft:'7%' }} >
                          &nbsp;Active Date From :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {this.state.loadedPost.activeDateFrom} </div> 
                           <div style={{marginTop:'3.5%',width:'100%',textAlign:'left',fontSize:'24px',marginLeft:'7%' }} >
                          &nbsp;Active Date To :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {this.state.loadedPost.activeDateTo} </div> 
                           <div style={{marginTop:'3.5%',width:'100%',textAlign:'left',fontSize:'24px',marginLeft:'7%' }} >
                          &nbsp;Language :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {this.state.loadedPost.language} </div>                     
                     <br/>
                     </div>
                     <br/>
                     <br/>
                  </div>
  
              );
          }

          return (
         <div>
          {post} 
          </div>     
          )
          
      }
      
    }
    export default ArticlesDetails;