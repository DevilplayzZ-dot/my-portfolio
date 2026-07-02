# My Portfolio Website

A modern, fully-functional portfolio website with an admin panel.

## Features

- 📱 **Fully Responsive Design** - Mobile, tablet, and desktop optimized
- 🎨 **Dark/Light Mode** - Theme toggle with localStorage persistence
- ✨ **Smooth Animations** - Particle effects, fade-ins, and transitions
- 🖼️ **Interactive Gallery** - Lightbox image viewer
- 📊 **Admin Dashboard** - Content management system with password protection
- 🔐 **Secure Authentication** - Session-based admin access
- 📞 **Contact Form** - Get in touch with visitors
- 📈 **Skills Display** - Progress bars and skill categories
- 📚 **Timeline** - Education and experience timeline
- 🌐 **Modern Stack** - Vanilla HTML, CSS, and JavaScript

## Project Structure

```
Portfolio/
├── index.html                 # Home page
├── about.html                 # About me
├── education.html             # Education timeline
├── skills.html                # Skills showcase
├── projects.html              # Project portfolio
├── gallery.html               # Image gallery
├── contact.html               # Contact form
├── css/
│   ├── style.css              # Main styles
│   ├── animations.css         # Animation definitions
│   └── responsive.css         # Mobile responsive styles
├── js/
│   ├── main.js                # Main functionality
│   ├── theme.js               # Theme toggle
│   ├── particles.js           # Particle animation
│   ├── gallery.js             # Gallery lightbox
│   └── timeline.js            # Timeline animation
├── admin/
│   ├── index.html             # Admin login and dashboard
│   ├── css/admin.css          # Admin styles
│   └── js/admin.js            # Admin functionality
├── assets/                    # Images, icons, documents
└── README.md                  # This file
```

## Getting Started

### Installation

1. Clone this repository
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Open in a local server (required for proper functionality)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Admin Panel

### Accessing the Admin Panel

1. Click the "Admin" link in the navigation or visit `/admin/`
2. Enter the password: `kingak4832@`
3. Access the dashboard to manage content

### Admin Features

- 📊 Dashboard with statistics
- 📝 Edit page content
- 🔧 Manage projects
- 🖼️ Upload gallery images
- ⚙️ Change settings and password

## Customization

### Change Admin Password

Edit `admin/js/admin.js` and update the `ADMIN_PASSWORD` variable:

```javascript
const ADMIN_PASSWORD = 'your-new-password';
```

### Update Personal Information

- Edit the content in `about.html`
- Update skills in `skills.html`
- Modify projects in `projects.html`
- Update contact info in `contact.html`

### Customize Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;      /* Change primary color */
    --secondary-color: #ec4899;    /* Change secondary color */
    --bg-color: #ffffff;           /* Change background */
    --text-color: #1f2937;         /* Change text color */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized for fast loading
- Minimal external dependencies
- Efficient animations
- Responsive images

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast colors

## Deployment

### Deploy to GitHub Pages

1. Push to GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` folder
5. Your site will be live at `https://yourusername.github.io/my-portfolio`

### Deploy to Other Platforms

- **Netlify**: Drag and drop folder or connect GitHub
- **Vercel**: Import GitHub repository
- **Traditional Hosting**: Upload files via FTP

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository or contact the maintainer.

## Credits

Created with ❤️ by Your Name

---

**Last Updated**: 2024