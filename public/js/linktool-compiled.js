/**
 * Created by ychai on 2016/2/16.
 */
var Hello = React.createClass({
    displayName: "Hello",

    render: function () {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name,
            " "
        );
    }
});

ReactDOM.render(React.createElement(Hello, { name: "World" }), document.getElementById('container'));

//# sourceMappingURL=linktool-compiled.js.map