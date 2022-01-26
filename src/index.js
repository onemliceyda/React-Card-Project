//react'ın çalışmaya başladığı dosya.component yazıp,tarayıcıda göstereceğiz.

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Collapse from './components/Collapse';


const App = () => {


    return (
        <div className="container">
            <div className="row">
                <div className="card-group w-100">
                    <div className="col">
                        <Collapse href="collapseExample1">
                            <Card cardTitle="Card Title 1"
                                cardText="Lorem Ipsum Text1"
                                updatedTime="Last updated 1 min ago"
                                image="https://picsum.photos/id/1/200/300" />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample2">
                            <Card cardTitle="Card Title 2"
                                cardText="Lorem Ipsum Text2"
                                updatedTime="Last updated 2 min ago"
                                image="https://picsum.photos/id/10/200/300" />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample3">
                            <Card cardTitle="Card Title 3"
                                cardText="Lorem Ipsum Text3"
                                updatedTime="Last updated 3 min ago"
                                image="https://picsum.photos/id/100/200/300" />
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')

);

