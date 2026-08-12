import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const Activity = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const accentColor = '#39d353';

    const percentValues = {
        commitsPct: 89,
        pullRequestsPct: 10,
        issuesPct: 0,
        reviewsPct: 1
    };

    useEffect(() => {
        if (!chartRef.current) {
            return;
        }

        if (chartInstance.current) {
            chartInstance.current.dispose();
        }
        chartInstance.current = echarts.init(chartRef.current);

        const option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'axis',
                backgroundColor: '#161b22',
                borderColor: '#30363d',
                textStyle: {
                    color: '#c9d1d9'
                }
            },
            radar: {
                center: ['50%', '50%'],
                radius: '60%',
                startAngle: 90,
                splitNumber: 1,
                shape: 'polygon',
                axisName: {
                    show: true,
                    color: '#8b949e',
                    fontSize: 12,
                    fontWeight: 400,
                    formatter: function (value, indicator) {
                        const pct = indicator.name === 'Commits' ? percentValues.commitsPct :
                            indicator.name === 'Pull requests' ? percentValues.pullRequestsPct :
                                indicator.name === 'Issues' ? percentValues.issuesPct :
                                    percentValues.reviewsPct;
                        return `{percent|${pct}%}\n{label|${value}}`;
                    },
                    rich: {
                        percent: {
                            fontSize: 14,
                            fontWeight: 600,
                            color: '#c9d1d9',
                            lineHeight: 20
                        },
                        label: {
                            fontSize: 12,
                            color: '#8b949e',
                            lineHeight: 18
                        }
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: accentColor,
                        width: 2
                    }
                },
                splitLine: {
                    show: false
                },
                indicator: [
                    { name: 'Commits', max: 100 },
                    { name: 'Pull requests', max: 100 },
                    { name: 'Issues', max: 100 },
                    { name: 'Code review', max: 100 }
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [percentValues.commitsPct, percentValues.pullRequestsPct, percentValues.issuesPct, percentValues.reviewsPct],
                            name: 'Activity',
                            areaStyle: {
                                color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                                    {
                                        color: 'rgba(57, 211, 83, 0.25)',
                                        offset: 0
                                    },
                                    {
                                        color: 'rgba(57, 211, 83, 0.08)',
                                        offset: 1
                                    }
                                ])
                            },
                            lineStyle: {
                                color: accentColor,
                                width: 2
                            },
                            itemStyle: {
                                color: accentColor,
                                borderColor: accentColor,
                                borderWidth: 2
                            }
                        }
                    ]
                }
            ]
        };

        chartInstance.current.setOption(option);

        const handleResize = () => {
            if (chartInstance.current) {
                chartInstance.current.resize();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (chartInstance.current) {
                chartInstance.current.dispose();
            }
        };
    }, []);

    return (
        <div className="activity-overview">
            <div className="activity-overview-content">
                <div className="activity-overview-left">
                    <h3 className="activity-overview-title">Activity overview</h3>
                    <div className="activity-contribution-info">
                        <svg className="contribution-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        <span>Contributed to <a href="https://github.com/timescale/pgvectorscale" target="_blank" rel="noopener noreferrer">timescale/pgvectorscale</a></span>
                    </div>
                </div>
                <div className="activity-overview-right">
                    <div ref={chartRef} className="activity-overview-chart"></div>
                </div>
            </div>
        </div>
    );
};
