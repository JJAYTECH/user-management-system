# user-management-system-frontend
Group Project Activity: Full-Stack Application Development - FRONTEND(Angular.js)


## Introduction
The **User Management System** is a web-based application designed to streamline user authentication, authorization, and account management. It provides a secure and efficient way to handle user registration, authentication, and role-based access control. 

Built with **Node.js** and **MySQL** for the backend and **Angular** for the frontend, this system ensures a seamless experience for both users and administrators. Key features include JWT authentication, email verification, password recovery, profile management, and an admin dashboard for managing user accounts. Additionally, a fake backend implementation is available to facilitate development and testing without requiring a live backend.

A fully functional Angular boilerplate app runs with email sign-up and verification, JWT authentication with fresh tokens, Role-based authorization, Profile management, Admin dashboard, and Fake backend implementation for backend-less development. 

This project is developed by:
- **CANETE**
- **ROLDAN**

---


## Installation
   1. Clone the repository:
        git clone https://github.com/JJAYTECH/user-management-system.git to an external site.
   2. Install dependencies:
        npm install
   3. Start the backend server:
        npm start
   4. Start the Angular app:
        ng serve
---

## Usage
# User
    • Register a new account at /account/register.
    • Verify your email using the link sent to your inbox.
    • Log in at /account/login.
    • View and update your profile at /profile/update.
# Admin
    • Log in with an admin account at /account/login.
    • Access dashboard at /admin/accounts/list.
    • Manage user accounts (CRUD) at /admin/accounts/add-edit.

## Testing
    • Functional Testing: Covered key scenarios such as sign-up, login, role permissions, and password reset.
    • Security Testing: Ensured JWT validation, secure routes, and form validations.
    • Code Review: Ensured adherence to best practices, code organization, and documentation.
    • Test cases and detailed reports can be found here (insert the link).

## Contributing

# Frontend Development:
    1. Developer 3: Email Sign-Up, Verification, and Authentication
        • user-management-system-frontend the respository.
        • Create a feature branch: git checkout -b castillo-frontend-signup-auth, git branch to view the (castillo-frontend-signup-auth) if exist.
        • Implement the feature: Implement email sign-up, verification, and authentication.
        • Commit changes to the branch: git add ., git commit -m "Adding all the frontend signup auth"
        • Push to the remote repository: git push origin castillo-frontend-signup-auth.
        • Create a Pull Request and request review to merge into main

    2. Developer 4: Profile Management, Admin Dashboard, And Fake Backend
        • user-management-system-frontend the respository.
        • Create a feature branch: git checkout -b langomez-frontend-profile-admin-fake-backend, git branch to view the (langomez-frontend-profile-admin-fake-backend) if exist.
        • Implement the feature: Implement the profile management and admin dashboard components in the Angular boilerplate.
        • Add a fake backend to simulate API responses during development.
        • Commit changes to the branch: git add ., git commit -m "Adding The Functions of all fake backend"
        • Push to the remote repository: git push origin gomez-frontend-profile-admin-fake-backend.
        • Create a Pull Request and request review to merge into main.

## License
This project is licensed under the MIT License.
See LICENSE for details.