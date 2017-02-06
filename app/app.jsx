var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        {/*example of how to add more routes*/}
            {/*<Route path="about" component={About} />
            <Route path="examples" component = {Examples} />
            <IndexRoute component={Weather} />*/}
        </Route>
    </Router>,
    document.getElementById('app')
);