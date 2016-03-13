/**
 * Created by ychai on 2016/2/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';

var DataInput = React.createClass({
  getInitialState: function () {
    return {
      code: '',
      aliasInput: '',
      showCodeTextAreaError: false,
      showAliasTextAreaError: false
    };
  },
  dataValidate: function (e) {
    if (this.state.code == '' && this.state.aliasInput == '') {
      alert("Both code and alias area can't be null!")
      e.preventDefault();
      return;
    }
    if (this.state.code == '') {
      alert("Code area can't be null!")
      e.preventDefault();
    }
    if (this.state.aliasInput == '') {
      alert("Alias area can't be null!")
      e.preventDefault();
    }
  },
  handleCodeChange: function(e){
    this.setState({code: e.target.value});
    if (e.target.value) {
      this.setState({showCodeTextAreaError: false});
    }else{
      this.setState({showCodeTextAreaError: true});
    }
  },
  handleAliasInputChange: function(e){
    this.setState({aliasInput: e.target.value});
    if (e.target.value) {
      this.setState({showAliasTextAreaError: false});
    }else{
      this.setState({showAliasTextAreaError: true});
    }
  },
  render: function() {
    return (
      <form action="" onSubmit={this.dataValidate}>
        <div className="row">
          <div className="form-group col-sm-7 col-xs-12">
            <label htmlFor="code"><h3>Paste your email code below {this.state.showCodeTextAreaError ? <span className="text-danger">(This area can't be empty.)</span> : null}</h3></label>
            <textarea className="form-control" name="code" id="code" cols="30" rows="30" onChange={this.handleCodeChange} value={this.state.code}></textarea>
          </div>
          <div className="form-group col-sm-5 col-xs-12">
            <label htmlFor="alias"><h3>Paste your alias from CWS to below {this.state.showAliasTextAreaError ? <span className="text-danger">(This area can't be empty.)</span> : null}</h3></label>
            <textarea className="form-control" name="alias" id="alias" cols="30" rows="30" onChange={this.handleAliasInputChange} value={this.state.aliasInput}></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
});

ReactDOM.render(
  <DataInput />,
  document.getElementById('container')
);
