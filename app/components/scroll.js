import React, {Component} from 'react';

import InfiniteScroll from 'react-infinite-scroller';

import {hamletScripts} from '../json/hamlet'

export default class Scroll extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {items: hamletScripts, viewItems: []}
        this.loadItems();
    }

    loadItems = () => {
        this.state.viewItems = this.state.items.slice(1, 3)
    }

    render() {
        return (
            <InfiniteScroll
                pageStart={0}
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