import React, { useEffect, useState, useMemo } from 'react';
import { githubService } from '../Services/Github';
import { ContributionHeatMap } from './ContributionMap';
import { Activity } from './Activity';

export const ContributionChart = ({ username = 'shreeramk' }) => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [contributionData, setContributionData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const years = useMemo(() => {
        const current = new Date().getFullYear();
        return Array.from({ length: 6 }, (_, idx) => current - idx);
    }, []);

    useEffect(() => {
        const fetchContributions = async () => {
            setLoading(true);
            setError('');
            try {
                const data = await githubService.getUserContributions(username, selectedYear);
                setContributionData(data);
            } catch (err) {
                setError(err?.message || 'Unable to load contributions.');
                setContributionData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchContributions();
    }, [selectedYear, username]);

    const totalContributions = useMemo(() => {
        if (!contributionData || !contributionData.total) return 0;
        return contributionData.total[selectedYear] || 0;
    }, [contributionData, selectedYear]);

    return (
        <section className="contribution-section-wrapper">
            <div className="contribution-card">
                <div className="contribution-card-header">
                    <span className="contributions-count">
                        {loading ? 'Loading contributions...' : `${totalContributions.toLocaleString()} contribution${totalContributions !== 1 ? 's' : ''} in ${selectedYear}`}
                    </span>
                </div>

                <div className="contribution-card-body">
                    <div className="heatmap-area">
                        <div className="contribution-chart-container">
                            {loading && <div className="chart-placeholder">Loading...</div>}
                            {!loading && error && <div className="chart-placeholder error">{error}</div>}
                            {!loading && !error && (
                                <ContributionHeatMap
                                    contributionData={contributionData}
                                    year={selectedYear}
                                    theme="dark"
                                />
                            )}
                        </div>
                    </div>

                    <div className="year-selector">
                        {years.map((year) => (
                            <button
                                key={year}
                                className={`year-btn ${selectedYear === year ? 'active' : ''}`}
                                onClick={() => setSelectedYear(year)}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="activity-overview-inline">
                    <Activity />
                </div>
            </div>
        </section>
    );
};
