/**
 * Created by ychai on 2016/2/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';

class ButtonConvert extends React.Component{
    render(){
        return <button type="submit" className="btn btn-default">Submit</button>;
    }
}

class DataInput extends React.Component{
    render() {
        return (
            <form action="">
                <div className="row">
                    <div className="form-group col-sm-7 col-xs-12">
                        <label htmlFor="code"><h3>Paste your email code below</h3></label>
                        <textarea className="form-control" name="code" id="code" cols="30" rows="30"></textarea>
                    </div>
                    <div className="form-group col-sm-5 col-xs-12">
                        <label htmlFor="alias"><h3>Paste your alias from CWS to below</h3></label>
                        <textarea className="form-control" name="alias" id="alias" cols="30" rows="30"></textarea>
                    </div>
                </div>
                <ButtonConvert />
            </form>
        );
    }
}

ReactDOM.render(
    <DataInput />,
    document.getElementById('container')
);
