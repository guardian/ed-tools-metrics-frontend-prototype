import React, {Component} from 'react';
import {LineChart, AreaChart, Themes} from 'formidable-charts';
import BigVal from './bigval/BigVal';
import './App.css';
import './Chart.css';
import './Layout.css';
import defaultData from './data/defaultData';

class App extends Component {
    constructor() {
        super();
        this.state = {
            defaultData: defaultData
        };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Editorial Tools Dashboard</h2>
                </div>
                <div className="grid-3up">
                    <BigVal value={'56'} label={'pieces of content forked'} />
                    <BigVal
                        value={'8240'}
                        label={'pieces of content started in Composer'}
                    />
                    <BigVal
                        value={'203'}
                        label={'pieces of content started in inCopy'}
                    />
                </div>
                <div className="grid-2up">
                    <div className="Chart-wrapper">
                        <LineChart
                            title={'Content started in Composer'}
                            theme={Themes.dark}
                            domain={{y: [0, 100]}}
                            series={
                                this.state.defaultData.contentStartedInComposer
                            }
                            xAxis={{
                                label: 'Day of week',
                                tickFormat: tick => tick.toFixed()
                            }}
                            yAxis={{
                                label: 'percentage'
                            }}
                        />
                    </div>

                    <div className="Chart-wrapper">
                        <LineChart
                            title={'Content started in InCopy'}
                            theme={Themes.dark}
                            domain={{y: [0, 100]}}
                            series={
                                this.state.defaultData.contentStartedInInCopy
                            }
                            xAxis={{
                                label: 'Day of week',
                                tickFormat: tick => tick.toFixed()
                            }}
                            yAxis={{
                                label: 'percentage'
                            }}
                        />
                    </div>
                </div>

                <div className="grid-2up">
                    <div className="Chart-wrapper">
                        <AreaChart
                            title={'Content started in Composer Vs Incopy'}
                            theme={Themes.dark}
                            domain={{y: [0, 100]}}
                            series={this.state.defaultData.contentStartedVs}
                            xAxis={{
                                label: 'Day of week',
                                tickFormat: tick => tick.toFixed()
                            }}
                            yAxis={{
                                label: 'percentage'
                            }}
                        />
                    </div>

                    <div className="Chart-wrapper">
                        <BigVal
                            value={'15%'}
                            label={'of proposed content used this week'}
                        />
                    </div>
                </div>

                <div className="grid-3up">
                    {this.state.defaultData.wordCountByDesk.map(function(
                        wordCountData
                    ) {
                        return (
                            <div className="Chart-wrapper">
                                <LineChart
                                    title={'Word count when changed'}
                                    subtitle={wordCountData.deskName}
                                    theme={Themes.dark}
                                    series={[{data: wordCountData.data}]}
                                    xAxis={{
                                        label: 'Week',
                                        tickFormat: tick => tick.toFixed()
                                    }}
                                    yAxis={{
                                        label: 'Average wordcount'
                                    }}
                                />
                            </div>
                        );
                    })}

                </div>
            </div>
        );
    }
}

export default App;
