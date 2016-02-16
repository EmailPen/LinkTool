/**
 * Created by ychai on 2016/2/16.
 */
var Hello = React.createClass({
    render: function () {
        return <div>Hello {this.props.name} </div>;
    }
});

ReactDOM.render(
    <Hello name="World Test" />,
    document.getElementById('container')
);
