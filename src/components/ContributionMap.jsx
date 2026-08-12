import React, { useMemo } from "react";
import ReactECharts from "echarts-for-react";

export const ContributionHeatMap = ({
    contributionData,
    year = new Date().getFullYear(),
    theme = "dark",
}) => {
    const colorScheme = useMemo(() => {
        if (theme === "dark") {
            return {
                visualMap: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                textColor: "#c9d1d9",
                backgroundColor: "#0d1117",
                legendColors: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            };
        }
        return {
            visualMap: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            textColor: "#1f2328",
            backgroundColor: "#ffffff",
            borderColor: "#d0d7de",
            legendColors: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        };
    }, [theme]);

    const chartData = useMemo(() => {
        if (!contributionData || !contributionData.contributions) {
            return { data: [], total: 0, maxValue: 0 };
        }

        const data = contributionData.contributions.map((day) => {
            return [day.date, day.count];
        });

        const total = contributionData.contributions.reduce(
            (sum, day) => sum + day.count,
            0
        );
        const maxValue = Math.max(
            ...contributionData.contributions.map((day) => day.count),
            0
        );

        return { data, total, maxValue };
    }, [contributionData]);

    const chartOptions = useMemo(() => {
        const startDate = `${year}-01-01`;
        const endDate = `${year}-12-31`;

        return {
            tooltip: {
                formatter: (params) => {
                    const date = params.data[0];
                    const count = params.data[1];
                    return `${count} contribution${count !== 1 ? "s" : ""} on ${date}`;
                },
                backgroundColor: theme === "dark" ? "#1c2128" : "#ffffff",
                borderColor: colorScheme.borderColor,
                textStyle: {
                    color: colorScheme.textColor,
                },
            },
            visualMap: {
                min: 0,
                max: chartData.maxValue || 20,
                show: false,
                type: "piecewise",
                orient: "horizontal",
                left: "center",
                top: "bottom",
                inRange: {
                    color: colorScheme.visualMap,
                },
                pieces: [
                    { min: 0, max: 0 },
                    { min: 1, max: Math.ceil(chartData.maxValue * 0.25) || 5 },
                    {
                        min: Math.ceil(chartData.maxValue * 0.25) + 1 || 6,
                        max: Math.ceil(chartData.maxValue * 0.5) || 10,
                    },
                    {
                        min: Math.ceil(chartData.maxValue * 0.5) + 1 || 11,
                        max: Math.ceil(chartData.maxValue * 0.75) || 15,
                    },
                    { min: Math.ceil(chartData.maxValue * 0.75) + 1 || 16 },
                ],
            },
            calendar: {
                top: 20,
                left: 30,
                right: 30,
                cellSize: [12, 12],
                range: [startDate, endDate],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: theme === "dark" ? "" : "#e1e4e8",
                        width: 0,
                    },
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: colorScheme.backgroundColor,
                    borderRadius: 0,
                },
                yearLabel: {
                    show: false,
                },
                monthLabel: {
                    nameMap: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    fontSize: 10,
                    color: colorScheme.textColor,
                    margin: 8,
                },
                dayLabel: {
                    nameMap: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    firstDay: 0,
                    fontSize: 10,
                    color: colorScheme.textColor,
                    margin: 8,
                },
            },
            series: [
                {
                    type: "heatmap",
                    coordinateSystem: "calendar",
                    data: chartData.data,
                    itemStyle: {
                        borderRadius: 0,
                        borderWidth: 0,
                        shadowBlur: 0,
                        shadowColor: "#0969da",
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: theme === "dark" ? "#58a6ff" : "#0969da",
                            borderWidth: 0,
                            shadowBlur: 8,
                            shadowColor:
                                theme === "dark"
                                    ? "rgba(88, 166, 255, 0.4)"
                                    : "rgba(9, 105, 218, 0.3)",
                        },
                    },
                },
            ],
        };
    }, [year, chartData, colorScheme, theme]);

    if (!contributionData || chartData.data.length === 0) {
        return (
            <div
                className="contribution-placeholder"
                style={{
                    backgroundColor: colorScheme.backgroundColor,
                    borderColor: colorScheme.borderColor,
                }}
            >
                <p style={{ color: colorScheme.textColor }}>
                    No contribution data available for {year}
                </p>
            </div>
        );
    }

    return (
        <div
            className="contribution-heatmap-wrapper"
            style={{
                backgroundColor: colorScheme.backgroundColor,
                borderColor: colorScheme.borderColor,
            }}
        >
            <div className="contribution-heatmap-content">
                <ReactECharts
                    option={chartOptions}
                    style={{ height: "180px", minWidth: "800px" }}
                    opts={{ renderer: "svg" }}
                />
            </div>

            <div
                className="contribution-legend"
                style={{ color: colorScheme.textColor }}
            >
                <span>Less</span>
                <div className="legend-colors">
                    {colorScheme.legendColors.map((color, index) => (
                        <span
                            key={index}
                            className="legend-box"
                            style={{ backgroundColor: color }}
                        ></span>
                    ))}
                </div>
                <span>More</span>
            </div>
        </div>
    );
};

