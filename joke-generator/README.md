# Random Joke Generator

A fun and interactive joke generator that fetches random jokes from the JokeAPI. Built with vanilla HTML, CSS, and JavaScript.

## Features

### 😄 Joke Generation
- 🎯 **Random Jokes** - Get random jokes at the click of a button
- 🏷️ **Categories** - Filter jokes by category (Any, General, Programming, Knock Knock)
- 📝 **Joke Types** - Choose between single-line or two-part jokes
- 🔒 **Safe Mode** - Toggle NSFW content filtering
- ⚡ **Instant Loading** - Smooth loading animations

### 🎨 User Interface
- 📱 **Responsive Design** - Works on all devices
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🎭 **Smooth Animations** - Beautiful transitions and effects
- 📤 **Share Feature** - Share jokes with others
- 📋 **Copy Feature** - Copy jokes to clipboard
- 🔔 **Toast Notifications** - User feedback on actions
- 📊 **Statistics** - Track jokes loaded and API status

### 🌐 API Integration
- **JokeAPI v2** - Free, reliable joke API
- **Error Handling** - Graceful error handling with user feedback
- **Safe Requests** - Uses CORS and safe API practices
- **Real-time Status** - Shows API status

## How to Use

### Getting Started

1. **Open the App**
   - Visit the joke generator page
   - A random joke loads automatically

2. **Get a New Joke**
   - Click the "Get Joke" button
   - Or change filters to auto-load

3. **Customize**
   - **Category**: Select joke category
   - **Type**: Choose single or two-part jokes
   - **Safe Mode**: Toggle NSFW filtering

4. **Share or Copy**
   - Click "Share" to share with others
   - Click "Copy" to copy to clipboard

## Joke Categories

| Category | Description |
|----------|-------------|
| **Any** | Mix of all available jokes |
| **General** | Family-friendly general jokes |
| **Programming** | Tech and coding jokes |
| **Knock Knock** | Classic knock-knock jokes |

## Joke Types

| Type | Format |
|------|--------|
| **Any** | Both single and two-part |
| **Single** | One-liner jokes |
| **Two-Part** | Setup and punchline |

## File Structure

```
joke-generator/
├── index.html          # HTML structure
├── css/
│   └── style.css      # Styles and animations
├── js/
│   └── app.js         # Application logic
└── README.md          # Documentation
```

## Technical Details

### API Used

**JokeAPI v2** - Free joke API
- **Endpoint**: `https://v2.jokeapi.dev/joke`
- **No authentication required**
- **Rate limit friendly**
- **CORS enabled**

### API Request Format

```
https://v2.jokeapi.dev/joke/{category}?type={type}&safe-mode
```

### Response Format

**Single Joke:**
```json
{
  "type": "single",
  "joke": "Why did the chicken cross the road?",
  "category": "General"
}
```

**Two-Part Joke:**
```json
{
  "type": "twopart",
  "setup": "Why did the chicken cross the road?",
  "delivery": "To get to the other side!",
  "category": "General"
}
```

### Error Handling

- Network errors with user-friendly messages
- API errors caught and displayed
- Graceful fallback UI
- Try again functionality

## Local Storage

The app saves:
- **Dark Mode Preference** - Key: `darkMode`
- **Joke Count** - Key: `jokeCount`
- **Auto-loads on page refresh**

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Keyboard Support

| Key | Action |
|-----|--------|
| Click buttons | Interact with features |
| Tab | Navigate elements |
| Enter | Activate buttons |

## Performance

- **Lightweight** - ~30KB total
- **No dependencies** - Vanilla JavaScript
- **Fast API** - Usually < 500ms response
- **Optimized animations** - 60fps smooth
- **Minimal memory** - Lightweight state management

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- High contrast colors
- Keyboard navigation
- Screen reader friendly

## Tips & Tricks

1. **Quick Category Switch** - Changing category auto-loads new joke
2. **Type Filtering** - Narrow down jokes by type
3. **Safe Mode** - Suitable for all audiences
4. **Share** - Native share API on mobile
5. **Dark Mode** - Easier on the eyes at night

## Customization

### Change Header Color

Edit `css/style.css`:

```css
.header {
    background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%);
}
```

### Change Primary Color

```css
:root {
    --primary-color: #ff6b6b;  /* Change this */
    --secondary-color: #4ecdc4;
}
```

### Modify API Endpoint

Edit `js/app.js`:

```javascript
const API_BASE = 'https://v2.jokeapi.dev/joke';
```

## Limitations

- **Rate Limiting** - Free tier has reasonable limits
- **Offline** - Requires internet connection
- **Caching** - Each request is fresh

## Future Enhancements

Possible features to add:
- [ ] Joke history
- [ ] Favorites
- [ ] Custom categories
- [ ] Language selection
- [ ] Filter by rating
- [ ] Export jokes
- [ ] Audio pronunciation
- [ ] Search functionality

## API Documentation

For more info about JokeAPI:
- **Website**: https://jokeapi.dev
- **Documentation**: https://jokeapi.dev/api
- **GitHub**: https://github.com/Sv443/JokeAPI

## License

Open source and free to use.

## Troubleshooting

### "API Error" Message
- Check internet connection
- Try refreshing the page
- Check if JokeAPI is down
- Try different category/type

### Jokes Not Loading
- Clear browser cache
- Check browser console for errors
- Verify safe mode setting
- Try disabling ad blockers

### Share Not Working
- Share API requires HTTPS
- Use copy button as fallback
- Some browsers don't support share API

## Support

For issues or suggestions, please create an issue in the repository.

---

**Made with ❤️ for laughter**