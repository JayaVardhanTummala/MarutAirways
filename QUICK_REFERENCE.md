# Flight Dashboard - Quick Reference Guide

## 🚀 React Fundamentals

### useState Hook Pattern
```javascript
const [state, setState] = useState(initialValue);
```

### Component Structure
```javascript
function ComponentName() {
  // 1. State declarations
  const [data, setData] = useState([]);
  
  // 2. Handler functions
  const handleClick = () => {
    setData([...data, newItem]);
  };
  
  // 3. Return JSX
  return <div>Content</div>;
}
```

## 📊 State Management Patterns

### Authentication States
```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState(null);
const [users, setUsers] = useState([]);
```

### Data States
```javascript
const [flights, setFlights] = useState([]);
const [bookings, setBookings] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
```

### UI States
```javascript
const [showModal, setShowModal] = useState(false);
const [activeTab, setActiveTab] = useState("flights");
const [selectedItem, setSelectedItem] = useState(null);
```

## 🔍 Search & Filter Patterns

### Search Logic
```javascript
const filteredData = data.filter(item => 
  item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.location.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### Filter Logic
```javascript
const matchesFilter = filterValue === "" || item.property === filterValue;
```

### Combined Search & Filter
```javascript
const filteredResults = data.filter(item => 
  matchesSearch && matchesFilter1 && matchesFilter2
);
```

## 🎯 Event Handling Patterns

### Button Click
```javascript
<button onClick={() => handleAction(item)}>Action</button>
```

### Input Change
```javascript
<input 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>
```

### Form Submit
```javascript
<form onSubmit={(e) => {
  e.preventDefault();
  handleSubmit();
}}>
```

## 🎨 Conditional Rendering Patterns

### If/Else
```javascript
if (condition) {
  return <ComponentA />;
} else {
  return <ComponentB />;
}
```

### Ternary Operator
```javascript
{condition ? <ComponentA /> : <ComponentB />}
```

### Logical AND
```javascript
{condition && <Component />}
```

### Dynamic Classes
```javascript
<button className={`btn ${isActive ? 'active' : ''}`}>
```

## 📋 Array Methods

### Map (Rendering Lists)
```javascript
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```

### Filter (Search/Filter)
```javascript
const filtered = items.filter(item => condition);
```

### Find (Single Item)
```javascript
const item = items.find(item => item.id === targetId);
```

### Set (Remove Duplicates)
```javascript
const uniqueItems = [...new Set(items.map(item => item.property))];
```

## 🏗️ Component Communication

### Props (Parent to Child)
```javascript
// Parent
<ChildComponent data={data} onAction={handleAction} />

// Child
function ChildComponent({ data, onAction }) {
  return <button onClick={onAction}>{data}</button>;
}
```

### Callback Functions (Child to Parent)
```javascript
// Parent
const handleChildAction = (data) => {
  setParentState(data);
};

// Child
<button onClick={() => onAction(childData)}>Action</button>
```

## 🎨 CSS Patterns

### Flexbox Layout
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

### Grid Layout
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

### Responsive Design
```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

### Modal Overlay
```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 🔧 Common Patterns

### Form Handling
```javascript
function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
    </form>
  );
}
```

### Modal Pattern
```javascript
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
```

### Tab Navigation
```javascript
function TabNavigation({ activeTab, onTabChange, tabs }) {
  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
```

## 🧪 Testing Checklist

### Functionality Tests
- [ ] Authentication (login/signup/logout)
- [ ] Search functionality
- [ ] Filter functionality
- [ ] Booking process
- [ ] Data display

### UI Tests
- [ ] Responsive design
- [ ] Modal interactions
- [ ] Form validation
- [ ] Button states
- [ ] Loading states

### Edge Cases
- [ ] Empty search results
- [ ] No data available
- [ ] Invalid form inputs
- [ ] Network errors (if applicable)

## 📚 Key React Concepts

### 1. **State Updates**
- Always use setter functions
- State updates are asynchronous
- State is immutable

### 2. **Component Lifecycle**
- Components re-render when state changes
- Props changes trigger re-renders
- useEffect for side effects

### 3. **Performance**
- Use key prop for list items
- Avoid unnecessary re-renders
- Memoize expensive calculations

### 4. **Best Practices**
- Keep components small and focused
- Use meaningful variable names
- Add comments for complex logic
- Follow consistent naming conventions

---

This quick reference guide covers the most important patterns and concepts used in the flight dashboard application. Use it as a cheat sheet when building similar React applications!
