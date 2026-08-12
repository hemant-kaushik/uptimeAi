import React, { useState } from 'react';

export const Repositories = ({ allRepositories }) => {
    const [repoFilter, setRepoFilter] = useState('all');

    const getFilteredRepositories = () => {
        if (repoFilter === 'all') {
            return allRepositories;
        } else if (repoFilter === 'public') {
            return allRepositories.filter((repo) => !repo.private);
        } else if (repoFilter === 'private') {
            return allRepositories.filter((repo) => repo.private);
        } else if (repoFilter === 'forks') {
            return allRepositories.filter((repo) => repo.fork);
        }
        return allRepositories;
    };

    const filteredRepos = getFilteredRepositories();

    return (
        <div className="repositories-tab">
            <div className="repo-filters">
                <input type="text" placeholder="Find a repository..." className="repo-search" />
                <div className="filter-buttons">
                    <button
                        className={`filter-btn ${repoFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setRepoFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${repoFilter === 'public' ? 'active' : ''}`}
                        onClick={() => setRepoFilter('public')}
                    >
                        Public
                    </button>
                    <button
                        className={`filter-btn ${repoFilter === 'forks' ? 'active' : ''}`}
                        onClick={() => setRepoFilter('forks')}
                    >
                        Forks
                    </button>
                </div>
            </div>

            <div className="repos-list">
                {filteredRepos.map((repo) => (
                    <div key={repo.id} className="repo-list-item">
                        <div className="repo-list-header">
                            <svg className="repo-icon" viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
                                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                            </svg>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-list-name">
                                {repo.name}
                            </a>
                            {repo.private ? (
                                <span className="repo-badge">Private</span>
                            ) : (
                                <span className="repo-badge">Public</span>
                            )}
                        </div>
                        {repo.description && <p className="repo-list-description">{repo.description}</p>}
                        <div className="repo-list-meta">
                            {repo.language && (
                                <span className="repo-meta-item">
                                    <span className="language-dot"></span>
                                    {repo.language}
                                </span>
                            )}
                            {repo.stargazers_count > 0 && (
                                <span className="repo-meta-item">
                                    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                                    </svg>
                                    {repo.stargazers_count}
                                </span>
                            )}
                            {repo.forks_count > 0 && (
                                <span className="repo-meta-item">
                                    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                                    </svg>
                                    {repo.forks_count}
                                </span>
                            )}
                            {repo.fork && repo.parent && (
                                <span className="repo-meta-item">
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
        </div>
    );
};
