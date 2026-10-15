# React Image Gallery

A responsive image gallery built with **React**, **Axios**, and **Tailwind CSS**, using the [Picsum Photos API](https://picsum.photos/) to display images with pagination.

## 🚀 Features

- **Dynamic Image Gallery:** Fetches and displays images from an external API.
- **Pagination:** Navigate between pages using the Previous and Next buttons.
- **Image Details:** Displays the author name below each image.
- **Full Image Access:** Click an image to open its source page in a new tab.
- **API Integration:** Uses Axios to make HTTP requests and retrieve image data.
- **Responsive Layout:** Uses Tailwind CSS utility classes to arrange the gallery.
- **React Hooks:** Uses `useState` and `useEffect` to manage state and fetch data.

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Axios
- Tailwind CSS
- HTML5
- CSS3
- Vite
- Picsum Photos API

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js and npm installed on your computer
- Git installed on your computer

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Alex-Ravi/react-image-gallery.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-image-gallery
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## 📂 Project Structure

```text
react-image-gallery/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🌐 API Reference

This project uses the [Picsum Photos API](https://picsum.photos/).

Example endpoint:

`https://picsum.photos/v2/list?page=1&limit=35`

The API provides image information, including author names, image URLs, and download URLs.

## 💡 Learning Outcomes

Through this project, I practiced:

- Building reusable UI with React.
- Managing component state with React Hooks.
- Fetching and displaying external API data using Axios.
- Implementing pagination and user interactions.
- Styling interfaces with Tailwind CSS.
- Using Git and GitHub for version control.

## 🔗 Links

- **GitHub Repository:** [React Image Gallery](https://github.com/Alex-Ravi/react-image-gallery)
- **Developer Profile:** [Alex-Ravi](https://github.com/Alex-Ravi)

---

*Built as a frontend development learning project.*
