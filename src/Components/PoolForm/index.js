import React, { Component } from 'react';
import { AdminHeader } from '../../Containers/UserCardContainer/nav_bar';


export default class Form extends Component {
    constructor(){
      super();
      this.state = {
        name:'',
        amount: '',
        monthly_amount: '',
        seat_number: '',
        status:'comming'
      }
      this._handleChange = this._handleChange.bind(this)
    }
    _handleChange(e){
      this.setState({...this.state, [e.target.name]:e.target.value})
    }
    add = (e) => {
      e.preventDefault();
      this.props.addPool(this.state);
      this.setState({ name:'',
                      amount: '',
                      monthly_amount: '',
                      seat_number: '',
                      status:'comming'
                   });
    };

    render(){
        const { pools, loading, isAdmin} = this.props;
        if(isAdmin){
          return (
            <div>
            <AdminHeader/>
                  <h2> New pool</h2>
                   <form onSubmit = {this.add}>
  
                       <label> Pool Name </label>
                       <input type = "text" name="name"  onChange={this._handleChange} />
                       <label> amount </label>
                       <input type = "text" name="amount" onChange={this._handleChange} />
                       <label> monthly amount </label>
                       <input type = "text" name="monthly_amount" onChange={this._handleChange} />
                       <label> seats number </label>
                       <input type = "text" name="seat_number" onChange={this._handleChange} />
                       <label> status </label>
                       <input type = "text" name="status" onChange={this._handleChange} />
  
                       <input type = "submit" value = "Create Pool" />
                    </form>
              </div>
          )
        }
        else {
          return (
            <div>
              <h1> Invalid Request </h1>
            </div>
          )
        }
    }
}



// import React, { Component } from 'react';
//
// export default class Form extends Component {
//     constructor(){
//         super();
//         this.state = {
//             pool: '',
//
//         }
//     }
//     onNameChange = (e) => {
//       const pool = e.target.value;
//       this.setState({pool} );
//     };
//
//
//     add = (e) => {
//       e.preventDefault();
//       this.props.addPool(this.state.pool);
//       this.setState({ pool: '' });
//     };
//
//     render(){
//         const { pools, loading} = this.props;
//         return (
//             <div>
//                  <form onSubmit = {this.add}>
//                      <input type = "text" value={this.state.pool} onChange={this.onNameChange} placeholder = "New Pool" />
//                      <input type = "submit" value = "Add Pool" />
//                   </form>
//             </div>
//         )
//     }
// }






//
//
// import React, { Component } from 'react';
//
//
// export default class Form extends Component {
//     constructor(){
//         super();
//         this.state = {
//             pool: '',
//
//         }
//     }
//     onNameChange = (e) => {
//       const pool = e.target.value;
//       console.log(e.target.value);
//       console.log(pool);
//       this.setState({pool} );
//       console.log(this.state);
//       console.log(pool);
//     };
//
//     add = (e) => {
//       e.preventDefault();
//       this.props.addPool(this.state.pool);
//       console.log('component add');
//       console.log(this.state);
//       this.setState({ pool: '' });
//
//     };
//
//     render(){
//         const { pools, loading} = this.props;
//         return (
//             <div>
//                  <form onSubmit = {this.add}>
//                      <input type = "text" value={this.state.pool} onChange={this.onNameChange} placeholder = "New Pool" />
//                      <input type = "submit" value = "Add Pool" />
//                   </form>
//             </div>
//         )
//     }
// }
//
