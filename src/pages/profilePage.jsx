import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { githubService } from '../Services/Github';
import { DummyData } from '../Services/DummyData';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Overview } from '../components/Overview';
import { Repositories } from '../components/Repozitories';
import { Placeholder } from '../components/Placeholder';

export const ProfilePage = () => {
    const { username } = useParams();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [repositories, setRepositories] = useState([]);
    const [allRepositories, setAllRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [achievements, setAchievements] = useState([]);
    const [organizations, setOrganizations] = useState([]);

    const currentTab = location.pathname.split('/').pop() || 'overview';

    console.log("username ----------> ", username);

    useEffect(() => {
        if (username) {
            setLoading(true);
            loadUserProfile(username);
            loadMockData();
            loadRealRepositories(username);
        }
    }, [username]);

    const loadUserProfile = async (user) => {
        try {
            const data = await githubService.getUserProfile(user);
            setUser(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user profile:', error);
            setLoading(false);
        }
    };

    const loadMockData = () => {
        setAchievements(DummyData.getAchievements());
        setOrganizations(DummyData.getOrganizations());
    };

    const loadRealRepositories = async (user) => {
        try {
            const data = await githubService.getUserRepositories(user);
            setAllRepositories(data);
            setRepositories(data.slice(0, 6));
            console.log('Loaded', data.length, 'repositories');
        } catch (error) {
            console.error('Error fetching repositories:', error);
            const mockRepos = DummyData.getRepos();
            setRepositories(mockRepos);
            setAllRepositories(mockRepos);
        }
    };

    const renderTabContent = () => {
        switch (currentTab) {
            case 'overview':
                return <Overview repositories={repositories} user={user} />;
            case 'repositories':
                return <Repositories allRepositories={allRepositories} />;
            case 'projects':
                return (
                    <Placeholder
                        icon={
                            <svg viewBox="0 0 16 16" width="48" height="48" fill="#8b949e" style={{ marginBottom: '16px' }}>
                                <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path>
                            </svg>
                        }
                        title="Projects"
                        description="User projects and boards will be shown here"
                    />
                );
            case 'packages':
                return (
                    <Placeholder
                        icon={
                            <svg viewBox="0 0 16 16" width="48" height="48" fill="#8b949e" style={{ marginBottom: '16px' }}>
                                <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
                            </svg>
                        }
                        title="Packages"
                        description="Published packages will appear here"
                    />
                );
            case 'stars':
                return (
                    <Placeholder
                        icon={
                            <svg viewBox="0 0 16 16" width="48" height="48" fill="#8b949e" style={{ marginBottom: '16px' }}>
                                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                            </svg>
                        }
                        title="Starred Repositories"
                        description="Repositories starred by this user"
                    />
                );
            default:
                return <Overview repositories={repositories} user={user} />;
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="github-container">
            <Header user={user} username={username} />
            <div className="main-content">
                <Sidebar user={user} achievements={achievements} organizations={organizations} />
                <main className="content">{renderTabContent()}</main>
            </div>
        </div>
    );
}