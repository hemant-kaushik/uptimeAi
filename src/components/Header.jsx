import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = ({ user, username }) => {
    const location = useLocation();
    const activeTab = location.pathname.split('/').pop() || 'overview';
    const [showProductMenu, setShowProductMenu] = useState(false);
    const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <>
            <header className="github-top-header">
                <div className="github-top-nav">
                    <div className="top-nav-left">
                        <a href="/" className="github-logo-link">
                            <svg height="32" viewBox="0 0 16 16" width="32" fill="white" aria-hidden="true">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <nav className={`top-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                            <div className="nav-item-dropdown">
                                <button className="nav-link" onClick={() => setShowProductMenu(!showProductMenu)}>
                                    Product
                                    <svg className="dropdown-caret" width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="nav-item-dropdown">
                                <button className="nav-link" onClick={() => setShowSolutionsMenu(!showSolutionsMenu)}>
                                    Solutions
                                    <svg className="dropdown-caret" width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                                    </svg>
                                </button>
                            </div>

                            <a href="#" className="nav-link">Resources</a>
                            <a href="#" className="nav-link">Open Source</a>
                            <a href="#" className="nav-link">Enterprise</a>
                            <a href="#" className="nav-link">Pricing</a>
                        </nav>
                    </div>

                    <div className="top-nav-search">
                        <div className="search-input-wrapper">
                            <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M10.68 11.74a6 6 0 01-7.922-8.982 6 6 0 018.982 7.922l3.04 3.04a.749.749 0 01-.326 1.275.749.749 0 01-.734-.215ZM11.5 7a4.5 4.5 0 10-8.999 0A4.5 4.5 0 0011.5 7Z"></path>
                            </svg>
                            <input
                                type="text"
                                placeholder="Search or jump to..."
                                className="top-search-input"
                            />
                            <kbd className="search-kbd">/</kbd>
                        </div>
                    </div>

                    <div className="top-nav-right">
                        <a href="#" className="top-nav-icon-link" title="Pull requests">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                            </svg>
                        </a>

                        <a href="#" className="top-nav-icon-link" title="Issues">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                            </svg>
                        </a>

                        <a href="#" className="top-nav-icon-link" title="Marketplace">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
                            </svg>
                        </a>

                        <a href="#" className="top-nav-icon-link" title="Explore">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7.25-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7.25 8V4.75a.75.75 0 0 1 1.5 0Z"></path>
                            </svg>
                        </a>

                        <button className="top-nav-icon-link" title="Notifications">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path>
                            </svg>
                        </button>

                        <button className="top-nav-create-btn" title="Create new...">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
                            </svg>
                            <svg className="dropdown-caret" width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                            </svg>
                        </button>

                        <button className="top-nav-avatar-btn" title="View profile and more">
                            <img src={user?.avatar_url} alt={user?.login} className="top-nav-avatar" />
                        </button>
                    </div>
                </div>
            </header>

            <nav className="profile-tabs-nav">
                <div className="profile-tabs-container">
                    <Link
                        to={`/${username}/overview`}
                        className={`profile-tab ${activeTab === 'overview' ? 'active' : ''}`}
                    >
                        <svg className="tab-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                        Overview
                    </Link>
                    <Link
                        to={`/${username}/repositories`}
                        className={`profile-tab ${activeTab === 'repositories' ? 'active' : ''}`}
                    >
                        <svg className="tab-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                        </svg>
                        Repositories
                        <span className="tab-count">{user?.public_repos || 0}</span>
                    </Link>
                    <Link
                        to={`/${username}/projects`}
                        className={`profile-tab ${activeTab === 'projects' ? 'active' : ''}`}
                    >
                        <svg className="tab-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path>
                        </svg>
                        Projects
                    </Link>
                    <Link
                        to={`/${username}/packages`}
                        className={`profile-tab ${activeTab === 'packages' ? 'active' : ''}`}
                    >
                        <svg className="tab-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
                        </svg>
                        Packages
                    </Link>
                    <Link
                        to={`/${username}/stars`}
                        className={`profile-tab ${activeTab === 'stars' ? 'active' : ''}`}
                    >
                        <svg className="tab-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                        </svg>
                        Stars
                        <span className="tab-count">5</span>
                    </Link>
                </div>
            </nav>
        </>
    );
};
