import React,{Component} from 'react';
import Input from '../UI/Input/Input';
import classes from './Auth.css';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
class Auth extends Component{
state={
    isChecked: false,
    redirectToReferrer:'',
    countryCodeName:'EG',
    controls:{
        userPhone:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'phone number'
            },
            value:'',
            validation:{
                required:true,
                isNumeric:true
            },
            valid:false,
            touched:false
        },
        countryCode:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'country code'
            },
            value:'',
            validation:{
                required:true,
            },
            valid:false,
            touched:false
        },
        userPassword:{
            elementType:'input',
            elementConfig:{
                type:'password',
                placeholder:'Password'
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
    },
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
    this.props.onAuth(this.state.controls.userPhone.value,this.state.controls.countryCode.value,this.state.controls.userPassword.value,this.state.countryCodeName);
      console.log(this.state.controls.userPhone.value);
  };
  handleSelect = e => {
    this.setState({ countryCodeName: e.target.value });
  };
  onChangeCheckbox = event => {
    this.setState({
        isChecked: event.target.checked
    })
}
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
    let authRedirect = null;
    if (this.props.isAuthenticated) {
        authRedirect = <Redirect to={this.props.authRedirectPath}/>
    }
    return(
        <div className={classes.Auth} >
             {authRedirect}
            <form onSubmit={this.submitHandler} >
                <br/>
                <br/>
                {form}
                <select
                onChange={this.handleSelect}
                className={classes.select}>
                <option disabled selected hidden className={classes.opt}>
                  Country
                </option>
                <option className={classes.opt} value={this.state.countryCodeName}>{this.state.countryCodeName}</option>;
              </select>
              <br/>
              <td  >
              <input type="checkbox" checked={this.state.isChecked} name="lsRememberMe" onChange={this.onChangeCheckbox}className={classes.remember} />
              <label >Remember me</label>
              </td>
                    <button className={classes.btn} >Sign In </button>
                    
            </form>


        </div>



    )
}
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.userPhone !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};
const mapDispatchToProps=dispatch=>{
    return{
        onAuth:(userPhone,countryCode,userPassword,countryCodeName)=>dispatch(actions.auth(userPhone,countryCode,userPassword,countryCodeName)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Auth );