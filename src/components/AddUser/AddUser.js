import React,{Component} from 'react';
import axios from "axios";
import Input from '../UI/Input/Input';
import classes from './AddUser.css'

class AddUser extends Component {

   state  ={
         controls:{
            tranierName:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Tranier Name'
                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false

            },
            countryCodeName:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country CodeName'
                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false

            },
            countryCode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country Code'
                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false

            },
            tranierPhone:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Tranier Phone'
                },
                value:'',
                validation:{
                    required:true,
                    isNumeric:true,
                    isPhone:true
                },
                valid:false,
                touched:false

            },           
            tranierAddress:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Tranier Address'
                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false
            },
            tranierPassword:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Tranier Password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:6,
                    isPassword:true
                },
                valid:false,
                touched:false
            }
        }
    }



checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isPhone) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }
    if(rules.isPassword){
        const pattern=/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
        isValid=pattern.test(value) && isValid
    }

    return isValid;
}
inputChangedHandler=(event, controlName)=>{
    const updatedControls={
        ...this.state.controls,
        [controlName]:{
            ...this.state.controls[controlName],
            value: event.target.value,
            valid:this.checkValidity(event.target.value,this.state.controls[controlName].validation),
            touched:true
        }
    };
    this.setState({controls:updatedControls});
}
    submitHandler = e => {
        e.preventDefault();
        const url = 'https://cors-anywhere.herokuapp.com/https://api-task1.adminssw.com/traniers/addTranier';
        const tranierName=this.state.controls.tranierName.value
        const countryCodeName=this.state.controls.countryCodeName.value
        const countryCode=this.state.controls.countryCode.value
        const tranierPhone=this.state.controls.tranierPhone.value
        const tranierAddress=this.state.controls.tranierAddress.value
        const tranierPassword=this.state.controls.tranierPassword.value

            axios
              .post(url,{tranierName,countryCodeName,countryCode,tranierPhone,tranierAddress,tranierPassword})
               .then(response=>{
                   console.log(response);
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
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
            
        ));
        return (
            <div className={classes.atricleback}>
                <form onSubmit={this.submitHandler} >
                <h1>Add Tranier</h1>
                {form}
                <br/>
                     <button className={classes.Order} >Add Tranier</button>
                <br/>
                </form>
            </div>
        )
    }

}

export default AddUser;
