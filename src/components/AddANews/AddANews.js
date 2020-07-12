import React,{Component} from 'react';
import axios from "axios";
import Input from '../UI/Input/Input';
import classes from './AddANews.css'

class AddArticle extends Component {
    constructor(props) {
        super(props);
   this.state  ={
        selectedFile: [],
                controls:{
            userId:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'User Id'
                },
                value:'',

            },
            titel:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Title'
                },
                value:'',

            },
            description:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Description'
                },
                value:'',

            },
            activeDateFrom:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Active DateFrom'
                },
                value:'',

            },           
             activeDateTo:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Active DateTo'
                },
                value:'',
            },
            language:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Language'
                },
                value:'',
            },
        },
        newNews:[]
    }

}
    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
      }

    inputChangedHandler=(event, controlName)=>{
        const updatedControls={
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value: event.target.value,
            }
        };
        this.setState({controls:updatedControls});
    }
    submitHandler = e => {
        e.preventDefault();
        const url = 'https://cors-anywhere.herokuapp.com/https://api-task1.adminssw.com/news/addNews';

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
            const formData = new FormData();
            formData.set('userId',this.state.controls.userId.value);
            formData.set('titel',this.state.controls.titel.value);
            formData.set('description',this.state.controls.description.value);
            formData.set('activeDateFrom',this.state.controls.activeDateFrom.value);
            formData.set('activeDateTo',this.state.controls.activeDateTo.value);
            formData.set('language',this.state.controls.language.value);
            formData.append('imageNews',this.state.selectedFile);
            axios
              .post(url,formData,config)
               .then(response=>{
                   console.log(formData);
               })


          
      };

    render(){
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        const form=formElementsArray.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
            
        ));
        return (
            <div className={classes.atricleback}>
                <form onSubmit={this.submitHandler} >
                <h1>Fork</h1>
                {form}
                <input type="file" onChange={this.fileChangedHandler}style={{width:'20%',marginTop:'3%'}} /> 
                <br/>
                     <button className={classes.Order} >Add This Article</button>
                <br/>
                </form>
            </div>
        )
    }

}

export default AddArticle;
