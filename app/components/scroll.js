import React, {Component} from 'react';

import InfiniteScroll from 'react-infinite-scroller';

import {names} from '../json/names'

export default class Scroll extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {items: names, viewItems: [], start: 0}
       this.loadItems();
    }

    loadItems = () => {
        this.state.viewItems = this.state.items.slice(this.state.start, this.state.start + 20)
    }

    render() {
        return (
            <InfiniteScroll
                loadMore={this.loadItems}
                hasMore={true}
            >
                <ul>
                    {this.state.viewItems.map
                    (
                        (item) => (
                            <li> {item}!</li>
                        )
                    )
                    }
                </ul>
            </InfiniteScroll>
        );
    }

}