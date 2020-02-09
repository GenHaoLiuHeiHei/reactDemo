import React from 'react';
import {Tabs} from 'antd'
const { TabPane } = Tabs;
export default class Dome extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
          { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
          { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
          {
            title: 'Tab 3',
            content: 'Content of Tab 3',
            key: '3',
            closable: false,
          },
        ];
        this.state = {
          activeKey: panes[0].key,
          panes,
        };
    }
    render () {
        return (
            <div className="content">
                <Tabs>
                    {this.state.panes.map(pane=> (
                        <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                            {pane.content}
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
}