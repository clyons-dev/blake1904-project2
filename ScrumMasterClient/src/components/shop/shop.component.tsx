import React from 'react';
import { ShopCardComponent } from './shop-card.component';
import { Item } from '../../model/item';

interface IShopState {
    itemlist: Item[],
}

export class ShopComponent extends React.Component<any, IShopState> {
    constructor(props: any) {
        super(props);
        this.state = {
            itemlist: [],
        };
    }

    async componentDidMount() {
        const resp = await fetch('http://localhost:8081/shopitem', { method: 'GET', credentials: 'include' })
        const body = await resp.json();
        await this.setState({
            itemlist: body
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.itemlist.map(item => (<ShopCardComponent item={item}/>))}
                </div>
            </div>
        )
    };
}