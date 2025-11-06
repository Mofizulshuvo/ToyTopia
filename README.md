#  ToyTopia – Local Kids Toy Store Platform

ToyTopia is a vibrant online marketplace for kids' toys, designed to help families discover and support local toy sellers.  
Users can browse toys, view detailed information, log in to protected routes, and interact with the platform safely.

---

##  Live Demo
🔗 [Live Site](https://your-live-site-link.netlify.app)

---

##  Project Purpose
The purpose of ToyTopia is to create a playful and user-friendly toy store experience for parents and children.  
The project demonstrates:
- React development skills
- Firebase authentication and protected routes
- JSON-based dynamic data display
- Responsive and engaging UI/UX design

---

## Features

### Home Page
- Hero slider showcasing toys (using Swiper slider or DaisyUI)
- Popular Toys section displaying toy cards from JSON data
- Two extra sections for additional content (e.g., About / Reviews)
- Responsive layout for mobile, tablet, and desktop

### Toy Details Page (Protected)
- Detailed information about each toy
- “Try Now” form with Name and Email fields
- Accessible only for logged-in users

### Authentication
- Email/password registration and login
- Google login
- Show/Hide password toggle
- Password validation (min 6 characters, at least one uppercase and one lowercase letter)
- Persistent login using Firebase `onAuthStateChanged`
- Forgot password functionality (redirects to Gmail)

### My Profile (Protected)
- Display user information: name, email, photo
- Edit name and photoURL with Firebase `updateProfile()`
- Success message on update

### Other
- 404 Page / Not Found page
- Extra private route with meaningful content
- Dynamic page titles for all routes
- Loader while user data is loading
- Toast or SweetAlert for all success/error messages

---

##  JSON Data
All toy data is stored in a `data.json` file with the following structure:

```json
{
  "toyId": 1,
  "toyName": "Lego Classic Bricks",
  "sellerName": "Toys R Us Local",
  "sellerEmail": "contact@toysruslocal.com",
  "price": 49.99,
  "rating": 4.7,
  "availableQuantity": 75,
  "description": "A timeless set of colorful Lego bricks that encourages creativity and problem-solving.",
  "pictureURL": "https://i.ibb.co/example-image.png",
  "subCategory": "Building Blocks"
}
