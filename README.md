# Backend Development Fundamentals

**Institution:** Aurora  
**Department:** Computer Science and Engineering  
**Degree:** B.Tech CSE  
**Subject:** Backend Development Fundamentals  
**Faculty / Instructor:** Joel Prashanth D  
**Academic Year:** 2026–2027  
**GitHub Student Profile:** [@gamingwithdinog151-web](https://github.com/gamingwithdinog151-web)  
**Repository:** [backend-development-fundamentals](https://github.com/gamingwithdinog151-web/backend-development-fundamentals)  

---

## Course Laboratory Index

| Lab # | Lab Title | Topic / Module | Status | Lab Directory |
| :--- | :--- | :--- | :---: | :--- |
| **Lab 01** | **Node.js and Express Server** | Core HTTP & Express REST APIs | `Completed` | [Open Lab 1](lab-01/) |
| **Lab 02** | Express Routing & Middleware | Advanced Middlewares & Error Handling | `Upcoming` | `lab-02/` |
| **Lab 03** | RESTful CRUD APIs with MongoDB | NoSQL Database Integration | `Upcoming` | `lab-03/` |
| **Lab 04** | SQL & Relational Database Integration | PostgreSQL / MySQL ORM | `Upcoming` | `lab-04/` |
| **Lab 05** | User Authentication & Authorization | JWT & Password Hashing (bcrypt) | `Upcoming` | `lab-05/` |
| **Lab 06** | File Uploads & Cloud Storage | Multer & Cloudinary Integration | `Upcoming` | `lab-06/` |
| **Lab 07** | Real-time Communication | WebSockets & Socket.IO | `Upcoming` | `lab-07/` |
| **Lab 08** | API Testing & Documentation | Jest, Supertest & Swagger/OpenAPI | `Upcoming` | `lab-08/` |
| **Lab 09** | Caching & Performance Optimization | Redis Caching & Rate Limiting | `Upcoming` | `lab-09/` |
| **Lab 10** | Cloud Deployment & CI/CD Pipelines | Render/Railway & GitHub Actions | `Upcoming` | `lab-10/` |

---

## Lab 1 Quick Summary: Node.js and Express Server

- **Directory:** [`lab-01/`](lab-01/)
- **Full Report & Viva Notes:** See [`lab-01/README.md`](lab-01/README.md)
- **Key Files:**
  - `lab-01/basic-server.js` - Low-level native Node.js HTTP server using built-in `http` module.
  - `lab-01/server.js` - Production Express.js server implementing REST GET endpoints and 404 middleware.
  - `lab-01/screenshots/` - Actual browser evaluation screenshots (`home.png`, `about.png`, `time.png`, `not-found.png`).

### Quick Start for Lab 1:

```bash
cd lab-01
npm install
npm start
```

Visit endpoints:
- Welcome Route: `http://localhost:3000/`
- About Route: `http://localhost:3000/about`
- Dynamic Time Route: `http://localhost:3000/time`
- 404 Error Handler: `http://localhost:3000/unknown`
