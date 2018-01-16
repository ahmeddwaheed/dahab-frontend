import React, { Component } from 'react';
import { Spin, Alert} from 'antd';
import Pool from '../Pool';
import history from '../../history';
import {rootApi} from '../../api';
import './style.css';

export default class Pools extends Component {
    constructor(props){
        super(props);
        this.state = {
          value:""
        }
    }
    change = (event) => {
      this.props.getPools(event.target.value);
      this.setState({value: event.target.value});
    }
    componentWillMount(){
      if(this.props.currentUser){
        this.props.getPools(this.state.value);
      }
    }
    render(){
      const { pools, loading, error, currentUser, isUser , isAdmin } = this.props;
      if(loading){
        return (
            <Spin />
        )
      }
      else if(error){
        return (
            <Alert
            message={error}
            type="error"
            />
        )
      }
      else {
        return (
          <div className = 'content'>
                {
                  isUser ?
                  <div>
                    <h1>Welcome {currentUser.name}</h1>
                    {
                      currentUser.avatar?
                      <img className="avatar" alt="picture" src={`${rootApi}/${currentUser.avatar.url}`} />
                      :
                      null
                    }
                  </div>
                  :
                  null
                }
                  <select className= "choice" name = "pools" id = "pools" onChange = {this.change} value ={this.state.value}>
                    <option value = "" >All Pools</option>
                    <option value = "comming">comming</option>
                    <option value = "running">running</option>
                  </select>
                  {
                      pools.map((pool) => {
                      return (
                        <Pool isAdmin= {isAdmin} isUser= {isUser} pool={pool} onClick={this.props.deletePool.bind(this)} currentUser={currentUser} />
                      )
                      })
                  }

            </div>
        )
      }
    }
}
