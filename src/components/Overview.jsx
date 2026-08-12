import React from 'react';
import { ContributionChart } from './ContributionChart';

export const Overview = ({ repositories, user }) => {
    return (
        <div className="overview-tab">
            <section className="popular-repos">
                <h2 className="section-heading">Popular repositories</h2>
                <div className="repos-grid">
                    {repositories.map((repo) => (
                        <div key={repo.id} className="repo-card">
                            <div className="repo-header">
                                <svg className="repo-icon" viewBox="0 0 16 16" width="16" height="16">
                                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                                </svg>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-name">
                                    {repo.name}
                                </a>
                                <span className="repo-visibility">{repo.visibility}</span>
                            </div>
                            {repo.description && <p className="repo-description">{repo.description}</p>}
                            <div className="repo-footer">
                                {repo.language && (
                                    <span className="repo-language">
                                        <span className="language-color"></span>
                                        {repo.language}
                                    </span>
                                )}
                                {repo.fork && repo.parent && (
                                    <span className="repo-fork">
                                        Forked from{' '}
                                        <a href={repo.parent.html_url} target="_blank" rel="noopener noreferrer">
                                            {repo.parent.full_name}
                                        </a>
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <ContributionChart username={user?.login || 'shreeramk'} />

            <section className="activity-section">
                <h2 className="section-heading">Contribution activity</h2>
                <div className="activity-timeline">
                    <div className="activity-month">
                        <h3>November 2025</h3>
                        <div className="activity-item">
                            <div className="activity-icon">
                                <svg viewBox="0 0 16 16" width="16" height="16">
                                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                </svg>
                            </div>
                            <div className="activity-content">
                                <p>
                                    Created <strong>56 commits</strong> in 11 repositories
                                </p>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">
                                <svg viewBox="0 0 16 16" width="16" height="16">
                                    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                                </svg>
                            </div>
                            <div className="activity-content">
                                <p>
                                    Opened <strong>29 pull requests</strong> in 5 repositories
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

