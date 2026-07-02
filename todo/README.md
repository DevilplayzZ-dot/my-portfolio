# To-Do List Application

A modern, fully-functional to-do list application with local storage functionality, built with vanilla HTML, CSS, and JavaScript.

## Features

### ✨ Core Functionality
- ✅ **Add Tasks** - Create new tasks with timestamps
- ✔️ **Mark Complete** - Check off completed tasks
- 🗑️ **Delete Tasks** - Remove individual tasks
- 💾 **Local Storage** - Tasks persist between sessions
- 🔄 **Auto-Save** - Changes saved automatically

### 🎨 User Interface
- 📱 **Responsive Design** - Works on all devices
- 🎯 **Filter Tasks** - View All, Active, or Completed
- 📊 **Statistics** - Real-time task counters
- 🌈 **Modern Gradient** - Beautiful purple gradient background
- ✨ **Smooth Animations** - Fade-in and slide effects
- 🔔 **Toast Notifications** - User feedback on actions

### 🛠️ Advanced Features
- 🔒 **Confirmation Modal** - Prevent accidental deletion
- 🏷️ **Priority Badges** - Visual task priority indicators
- ⏰ **Timestamps** - Track when tasks were created
- 📅 **Date Display** - See when each task was added
- ⌨️ **Keyboard Support** - Press Enter to add tasks

## How to Use

### Basic Operations

1. **Add a Task**
   - Type your task in the input field
   - Click "Add Task" or press Enter
   - Task appears at the top of the list

2. **Complete a Task**
   - Click the checkbox next to the task
   - Task text will be struck through
   - Task moves to completed count

3. **Delete a Task**
   - Click the 🗑️ button on the task
   - Task is immediately removed
   - Or use "Clear Completed" to remove all done tasks

4. **Filter Tasks**
   - **All** - Show all tasks
   - **Active** - Show only uncompleted tasks
   - **Completed** - Show only finished tasks

### Statistics

The app displays three key statistics:
- **Total Tasks** - All tasks in the list
- **Completed** - Finished tasks
- **Remaining** - Tasks still to do

## File Structure

```
todo/
├── index.html          # HTML structure
├── css/
│   └── style.css      # Styling and animations
├── js/
│   └── app.js         # Application logic
└── README.md          # Documentation
```

## Technical Details

### Local Storage

Tasks are automatically saved to browser local storage with this structure:

```javascript
{
    id: timestamp,
    text: "Task description",
    completed: false,
    createdAt: "Jan 1, 2024, 10:30 AM",
    priority: "medium"
}
```

### Data Persistence

- Tasks are saved whenever you:
  - Add a new task
  - Mark a task complete/incomplete
  - Delete a task
  - Clear tasks

- Tasks are loaded when:
  - Page first loads
  - Browser is refreshed
  - Window is reopened

### Local Storage Limits

- Storage limit: ~5-10MB per domain
- Current app uses minimal space
- Supports thousands of tasks before reaching limit

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Enter | Add task (when focused in input) |
| Escape | Close confirmation modal |

## Tips & Tricks

1. **Bulk Clear** - Use "Clear All" to start fresh
2. **Filter View** - Filter by status to focus on what matters
3. **Long Tasks** - Tasks are limited to 100 characters for readability
4. **Empty Check** - App won't let you add empty tasks
5. **Priority Badges** - Color-coded priority indicators

## Clear Data

To completely reset the app:
1. Click "Clear All" button
2. Confirm the action
3. All tasks and data will be removed

Or manually clear browser local storage:
1. Open Developer Tools (F12)
2. Go to Application → Local Storage
3. Find your domain and delete it

## Customization

### Change Colors

Edit the gradient in `css/style.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Change Header Text

Edit `index.html`:

```html
<h1>My To-Do List</h1>
```

### Modify Character Limit

Edit `js/app.js`:

```javascript
if (text.length > 100) { // Change 100 to desired limit
    showNotification('Task is too long (max 100 characters)');
}
```

## Performance

- Lightweight application (~25KB total)
- No external dependencies
- Minimal memory footprint
- Instant load and save
- Smooth 60fps animations

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- High contrast colors
- ARIA labels
- Screen reader friendly

## Future Enhancements

Possible features to add:
- [ ] Task categories/projects
- [ ] Due dates and reminders
- [ ] Task editing
- [ ] Drag and drop reordering
- [ ] Dark mode
- [ ] Task sorting
- [ ] Recurring tasks
- [ ] Cloud sync
- [ ] Multiple lists
- [ ] Export/Import tasks

## License

Open source and free to use.

## Support

For issues or suggestions, please create an issue in the repository.

---

**Made with ❤️ for productivity**