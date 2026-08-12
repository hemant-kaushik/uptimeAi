import React from 'react';

export const Sidebar = ({ user, achievements, organizations }) => {
    console.log("user ----------> ", user);
    return (
        <aside className="sidebar">
            <div className="profile-section">
                <img src={user?.avatar_url} alt={user?.login} className="avatar" />
                <div className="profile-info">
                    <h1 className="name">{user?.name}</h1>
                    <p className="username">{user?.login}</p>
                </div>
                <button className="edit-profile-btn">Edit profile</button>
            </div>

            {user?.bio && (
                <div className="bio-section">
                    <p className="bio">{user.bio}</p>
                </div>
            )}

            <div className="stats-section">
                <div className="stat-item">
                    <svg className="icon" viewBox="0 0 16 16" width="16" height="16">
                        <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
                    </svg>
                    <a href="#">
                        <strong>{user?.followers || 0}</strong> followers
                    </a>
                    <span>·</span>
                    <a href="#">
                        <strong>{user?.following || 0}</strong> following
                    </a>
                </div>
            </div>

            <div className="details-section">
                {user?.company && (
                    <div className="detail-item">
                        <svg className="icon" viewBox="0 0 16 16" width="16" height="16">
                            <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
                        </svg>
                        <span>{user.company}</span>
                    </div>
                )}
                {user?.location && (
                    <div className="detail-item">
                        <svg className="icon" viewBox="0 0 16 16" width="16" height="16">
                            <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
                        </svg>
                        <span>{user.location}</span>
                    </div>
                )}
                {user?.blog && (
                    <div className="detail-item">
                        <svg className="icon" viewBox="0 0 16 16" width="16" height="16">
                            <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
                        </svg>
                        <a
                            href={user.blog.startsWith('http') ? user.blog : `http://${user.blog}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {user.blog}
                        </a>
                    </div>
                )}
                {user?.twitter_username && (
                    <div className="detail-item">
                        <svg className="icon" viewBox="0 0 16 16" width="16" height="16">
                            <path d="M13.3174 3.59231C12.7530 3.84477 12.1458 4.01431 11.5097 4.09023C12.1600 3.68615 12.6603 3.05169 12.8971 2.29415C12.2897 2.66646 11.6139 2.93662 10.8945 3.08246C10.3204 2.45323 9.49337 2.06154 8.57829 2.06154C6.82183 2.06154 5.39644 3.48692 5.39644 5.24292C5.39644 5.49231 5.42629 5.73354 5.48337 5.96431C2.86752 5.83015 0.570139 4.57846 -0.936287 2.66646C-1.21860 3.13938 -1.37859 3.68569 -1.37859 4.26892C-1.37859 5.37723 -0.815133 6.35815 0.0366746 6.93354C-0.484979 6.91662 -0.983287 6.76815 -1.41398 6.52292V6.56185C-1.41398 8.10738 -0.300519 9.39815 1.14644 9.69231C0.870904 9.76892 0.581366 9.81169 0.279136 9.81169C0.0666746 9.81169 -0.139595 9.78946 -0.335133 9.75C0.0767594 11.0186 1.27152 11.9435 2.67875 11.9715C1.57506 12.8246 0.188289 13.3354 -1.3103 13.3354C-1.57783 13.3354 -1.83921 13.3186 -2.09537 13.2869C-0.664825 14.1908 1.02183 14.7232 2.52644 14.7232C8.57075 14.7232 11.8855 9.87015 11.8855 5.61231L11.8744 5.15769C12.4921 4.69662 13.0227 4.11862 13.4275 3.46938L13.3174 3.59231Z"></path>
                        </svg>
                        <a
                            href={`https://twitter.com/${user.twitter_username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @{user.twitter_username}
                        </a>
                    </div>
                )}
            </div>

            {achievements && achievements.length > 0 && (
                <div className="achievements-section">
                    <h3 className="section-title">Achievements</h3>
                    <div className="achievements">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="achievement-badge" title={achievement.description}>
                                <span className="badge-icon">{achievement.icon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {organizations && organizations.length > 0 && (
                <div className="organizations-section">
                    <h3 className="section-title">Organizations</h3>
                    <div className="organizations">
                        {organizations.map((org, index) => (
                            <a key={index} href={org.url} className="org-link" target="_blank" rel="noopener noreferrer">
                                <div className="org-avatar">{org.name.charAt(0)}</div>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </aside>
    );
};

