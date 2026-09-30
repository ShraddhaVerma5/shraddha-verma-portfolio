# Shraddha Verma — Developer Portfolio

> A modern, responsive developer portfolio built with **React and Vite**, showcasing my experience, projects, technical skills, education, and approach to building production-ready web applications.

**Live Portfolio:** [Add your deployed website URL here]
**GitHub:** [ShraddhaVerma5](https://github.com/ShraddhaVerma5)
**LinkedIn:** [Shraddha Verma]([https://www.linkedin.com/in/shraddhaverma-331b11290](https://www.linkedin.com/in/shraddha-verma-331b11290))

---

## About the Project

This portfolio was designed and developed to present my professional profile in a clean, interactive, and recruiter-friendly way.

Instead of using a static template, the website is built as a **component-based React application**, with content separated from UI components to make the portfolio easy to maintain and update.

It highlights my experience across:

* Web Development
* WordPress Development & Optimization
* Java Development
* Database-driven Applications
* Technical & On-Page SEO
* IT Operations
* Frontend Development

The portfolio also includes **Vaani**, an AI-powered personal assistant that can answer questions about my experience, projects, skills, and education.

---

## ✨ Features

### 👩‍💻 Personal Portfolio

* Professional hero section
* About section
* Education timeline
* Internship/work experience
* Technical skills
* Selected projects
* Contact section
* GitHub and LinkedIn links

### 🤖 Vaani — AI Personal Assistant

The portfolio includes an interactive AI assistant named **Vaani**.

Visitors can ask questions such as:

* "What projects has Shraddha worked on?"
* "What are her technical skills?"
* "Tell me about her internships."
* "What is her educational background?"
* "How can I contact her?"

The application uses a server-side API endpoint for AI requests while keeping sensitive API credentials away from the client.

A keyword-based fallback system is also included so that the assistant remains functional when the AI API is unavailable.

### 🎨 Modern UI

* Responsive design
* Mobile navigation
* Interactive project cards
* Animated text
* Scroll/reveal animations
* Tilt interaction for profile image
* Floating visual elements
* Smooth section-based navigation
* Dark developer-focused visual style

### 🔍 SEO & Accessibility

* Semantic HTML structure
* Meta description
* Open Graph metadata
* Twitter card metadata
* Schema.org structured data
* Responsive viewport configuration
* Accessible navigation labels
* Keyboard-friendly interactions
* `aria` attributes for interactive components

---

## 🛠️ Tech Stack

### Frontend

* **React 18**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Vite**

### Programming & Development

* Java
* Python
* C
* SQL

### Databases

* MySQL
* Oracle Database

### Tools

* Git
* VS Code
* Eclipse
* IntelliJ IDEA

### Other Technologies

* WordPress
* Elementor
* Astra
* PHP
* Java Servlets
* JDBC
* Apache Tomcat
* Rank Math SEO

### AI Integration

* Serverless API
* AI-powered portfolio assistant
* Client/server separation for API credentials
* Fallback response system

---

## 📂 Project Structure

```text
shraddha-verma-portfolio/
│
├── api/
│   ├── chat.js
│   └── _resume.js
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Background.jsx
│   │   ├── ChatBot.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── TiltPhoto.jsx
│   │   └── ...
│   │
│   ├── data/
│   │   ├── profile.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── ...
│   │
│   ├── hooks/
│   │   └── useScrolled.js
│   │
│   ├── services/
│   │   └── chatService.js
│   │
│   ├── styles/
│   │
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/ShraddhaVerma5/shraddha-verma-portfolio.git
```

### 2. Navigate to the project

```bash
cd shraddha-verma-portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📦 Production Build

Create an optimized production build with:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated production files will be available in:

```text
dist/
```

---

## 🤖 AI Assistant Setup

The portfolio supports an AI-powered assistant through the `/api/chat` serverless endpoint.

For production deployment, configure the required API key as an environment variable.

Example:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

### Important

The API key should **never be placed directly inside frontend React code**.

The frontend communicates with:

```text
/api/chat
```

while the API credential remains on the server side.

If the AI service is unavailable, Vaani uses predefined fallback responses for common questions.

---

## 📝 Updating Portfolio Content

Most portfolio content is separated into the `src/data/` directory.

For example:

```text
src/data/
├── profile.js
├── projects.js
├── skills.js
├── experience.js
└── education.js
```

This makes it possible to update personal information, projects, skills, and experience without modifying the main UI components.

For example, adding a project can be done inside:

```text
src/data/projects.js
```

Example:

```javascript
{
  title: "My New Project",
  date: "2026",
  desc: "Short description of the project.",
  stack: ["React", "JavaScript", "MySQL"],
  link: "https://github.com/..."
}
```

---

## 💼 Featured Projects

The portfolio currently showcases projects across different areas of software development.

### WordPress Migration & Performance Optimization

Migrated and optimized a live WordPress website while preserving URL structure, media, SEO configuration, and production data. The project also involved resolving storage bloat, broken images, layout issues, and responsive behavior.

**Technologies:**
`WordPress` `Elementor` `Astra` `PHP` `MySQL` `Rank Math`

### Hospital Management System

A Java-based management system designed to handle patient registration, appointments, billing, and room allocation using CRUD operations and database connectivity.

**Technologies:**
`Java` `JDBC` `MySQL` `HTML` `CSS`

### InstaSmart Application

A full-stack web application developed using Java Servlets with database integration, authentication, CRUD functionality, and dynamic content rendering.

**Technologies:**
`Java Servlets` `Oracle Database` `Apache Tomcat` `HTML5` `CSS3` `JavaScript`

### Text-to-Speech Converter

A Python desktop application that converts text into speech through an interactive Tkinter interface and Google Text-to-Speech integration.

**Technologies:**
`Python` `Tkinter` `gTTS`

---

## 📱 Responsive Design

The portfolio is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

The navigation automatically adapts to smaller screen sizes with a mobile menu.

---

## ⚡ Performance & Architecture

The project follows a component-based architecture where:

* UI components are separated into individual files
* CSS is organized alongside components
* Portfolio content is stored separately from presentation logic
* API functionality is separated from frontend code
* Reusable components reduce duplication
* Vite provides a fast development and production workflow

---

## 🔐 Security Considerations

Sensitive API credentials are intended to remain server-side.

The frontend does not directly expose the AI API key.

Environment variables should be used for production credentials:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

Do not commit `.env` or `.env.local` files containing secrets to GitHub.

---

## 🌐 Deployment

The project can be deployed on platforms that support Vite applications.

### Recommended: Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Select the Vite framework if it isn't detected automatically.
4. Add the required environment variable.
5. Deploy.

The serverless `/api/chat` endpoint can then be used for the AI assistant.

---

## 🔮 Future Improvements

Planned improvements include:

* [ ] Add individual GitHub repository links for each project
* [ ] Add project screenshots and Open Graph preview image
* [ ] Add downloadable resume
* [ ] Add project case-study pages
* [ ] Improve AI assistant knowledge retrieval
* [ ] Add analytics
* [ ] Add sitemap and robots.txt
* [ ] Add automated CI/CD checks
* [ ] Add more interactive project demonstrations

---

## 👩‍💻 About Me

I'm **Shraddha Verma**, a Computer Science graduate and Web Developer with hands-on experience in web development, WordPress, Java-based systems, IT operations, and SEO.

I enjoy taking real-world technical problems and turning them into reliable, maintainable solutions.

I'm currently interested in opportunities where I can continue growing as a **Software Developer** while contributing to real production systems.

---

## 📫 Contact

**Email:** [vnsvermashraddha@gmail.com](mailto:vnsvermashraddha@gmail.com)

**LinkedIn:**
https://www.linkedin.com/in/shraddhaverma-331b11290

**GitHub:**
https://github.com/ShraddhaVerma5

**Location:**
Varanasi, Uttar Pradesh, India

---

## 📄 License

This project is a personal portfolio website.

The source code is available for reference, but personal content, images, branding, and other portfolio assets should not be reused without permission.

---

<p align="center">
  Built with React & Vite · Designed & developed by Shraddha Verma
</p>
