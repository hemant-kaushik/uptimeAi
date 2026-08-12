# GitHub Profile – Vite + React Version

This is a React version of the GitHub profile viewer, built with **Vite**. It displays a GitHub user's profile with their repositories, contribution graph, and other details, matching the GitHub UI design.

## Features

- **User Profile Display**: Shows user avatar, name, username, bio, and basic stats
- **Multiple Tabs**:
  - Overview: Shows popular repositories and contribution activity
  - Repositories: Lists all repositories with filtering options
  - Projects, Packages, and Stars: Placeholder tabs for additional features
- **Contribution Chart**: Interactive heatmap showing user contributions over the past year
- **Repository Cards**: Displays repository information including language, stars, forks
- **GitHub API Integration**: Fetches real data from GitHub's public API
- **Responsive Design**: Adapts to different screen sizes
- **Dark Theme**: Matches GitHub's dark theme UI

## Tech Stack

- **React 18**: UI framework
- **Vite**: Lightning-fast dev server + optimized build
- **Axios**: HTTP client for API requests
- **ECharts**: Charting library for contribution heatmap
- **GitHub API**: Data source for user and repository information

## Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Top navigation bar
│   ├── Sidebar.jsx             # Left sidebar with profile info
│   ├── Overview.jsx            # Overview tab content
│   ├── Repozitories.jsx        # Repositories tab with filtering
│   ├── Placeholder.jsx         # Placeholder for other tabs
│   └── ContributionChart.jsx   # Contribution heatmap
├── services/
│   ├── Github.js        # GitHub API service
│   └── DummyData.js      # Mock data for achievements/orgs
├── types/
│   └── github.js               # Type definitions
├── App.jsx                      # Main application component
├── App.css                     # Styles matching GitHub UI
├── main.jsx                    # Application entry point
└── index.css                   # Global styles
```

## Installation

1. Navigate to the project directory:
   ```bash
   cd github-profile
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit: **http://localhost:5173**

The app will automatically open in your default browser.

## Usage

The application uses dynamic routing based on GitHub usernames.

### View Any GitHub Profile

Simply navigate to `/:username` to view any GitHub user's profile:

- `http://localhost:5173/shreeramk` - View shreeramk's profile
- `http://localhost:5173/torvalds` - View Linus Torvalds' profile
- `http://localhost:5173/YOUR_USERNAME` - View your profile

### URL Structure

The app follows GitHub's URL pattern:
- `/:username` - Redirects to overview tab
- `/:username/overview` - Overview tab
- `/:username/repositories` - Repositories tab
- `/:username/projects` - Projects tab
- `/:username/packages` - Packages tab
- `/:username/stars` - Stars tab

### Change Default User

To change the default user when visiting `/`:

1. Open `src/App.jsx`
2. Find the root route redirect
3. Change `shreeramk` to your desired username

```javascript
<Route path="/" element={<Navigate to="/YOUR_USERNAME" replace />} />
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:5173](http://localhost:5173)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App for full configuration control

## Features Matching Original Angular App

✅ User profile display with avatar and stats
✅ Tab navigation (Overview, Repositories, Projects, Packages, Stars)
✅ Popular repositories grid on Overview tab
✅ Contribution heatmap chart with ECharts
✅ Activity timeline
✅ Repositories tab with filtering (All, Public, Forks)
✅ Repository cards with language, stars, and fork information
✅ Achievements and organizations display
✅ GitHub-style dark theme
✅ Responsive design
✅ Loading states

## Known Warnings

The app compiles with ESLint accessibility warnings about anchor tags. These are non-critical and don't affect functionality. They can be fixed by converting clickable `<a>` tags to `<button>` elements.

## API Rate Limiting

The GitHub API has rate limits for unauthenticated requests (60 requests per hour). If you hit the rate limit, the application will fall back to mock data. For higher limits, you can add authentication:

1. Create a GitHub personal access token
2. Add it to the API requests in `src/services/Github.js`:

```javascript
const response = await axios.get(`${API_URL}/users/${username}`, {
  headers: {
    Authorization: `token YOUR_TOKEN_HERE`
  }
});
```

## Build for Production

```bash
npm run build
```

The built files will be in the `build` directory, ready for deployment.

## Deployment

### Deploy to Vercel (Recommended)

This project is optimized for Vercel with the included `vercel.json` configuration.

#### Quick Deploy:
1. Push to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Visit [vercel.com](https://vercel.com) and import your repository
3. Click Deploy - Vercel will auto-detect Create React App settings

#### Via Vercel CLI:
```bash
npm install -g vercel
vercel login
vercel --prod
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

### Other Deployment Options:
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Follow [CRA deployment guide](https://create-react-app.dev/docs/deployment)
- **Any static hosting service**

## Comparison: CRA vs Vite

This project was originally built with Vite:

| Feature | Create React App | Vite |
|---------|-----------------|------|
| Dev Server Start | ~30 seconds | ~1 second |
| Hot Reload | 1-3 seconds | Instant |
| Bundle Tool | Webpack | esbuild/Rollup |
| Dependencies | 1300+ packages | ~160 packages |
| Maintenance | Maintenance mode | Active development |
| Use Case | Enterprise/Legacy | Modern projects |

**Recommendation**: For new projects, Vite is recommended. CRA is better for projects requiring webpack compatibility or specific organizational requirements.

## Contributing

Feel free to submit issues or pull requests to improve the application.

## License

This project is open source and available under the MIT License.
