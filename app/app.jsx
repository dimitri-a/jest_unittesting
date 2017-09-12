import {Provider} from 'react-redux';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';
import Cart from './components/cart';
import {createStore} from 'redux';
import Nothing from './components/nothing';

import reducer from './components/reducers';
import TestComponent from './components/TestComponent';
import CheckboxWithLabel from './components/CheckboxWithLabel';

const store = createStore(reducer)

const App = () => (
    <Provider store={store}>
        <div>
            <CheckboxWithLabel labelOn="On" labelOff="Off" ></CheckboxWithLabel>
            <TestComponent></TestComponent>
        </div>
    </Provider>
);

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
