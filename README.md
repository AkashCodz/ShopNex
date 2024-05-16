# ShopNex

ShopNex is an e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project aims to provide a full-fledged online shopping experience, including product browsing, user authentication, shopping cart functionality, order management, and a responsive UI.

## Table of Contents

- [Features](#features)
- [TechStack](#techStack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User Authentication (Register/Login)
- Browse Products
- Add/Remove Products to/from Cart
- Checkout Process
- Admin Panel for Product Management
- Responsive Design

## Advanced Feature

- Share your product using WhatsApp Also.

## TechStack

- Frontend: React.js, RTK, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- State Management: (RTK to be implemented)

## Installation

To set up this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB
- npm or yarn

### Backend Setup

1. Clone the repository:
   ```
   git clone https://github.com/AkashCodz/ShopNex.git
   cd ShopNex
   ```

2. Install dependencies for both frontend and backend
    
   ### Install backend dependencies
       cd server
       npm install cors dotenv express mongoose nodemon uuid

   ### Install frontend dependencies
       cd client
       npm install @reduxjs/toolkit axios nodemon react react-dom react-redux react-router-dom
    

3. Set up environment variables
    Create a .env file in the backend directory and add the following:

    ```
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Run the application

    ```
    # Run backend
    cd server
    npm start

    # Run frontend
    cd client
    npm run dev
    ```

5. Access the application

    Open your browser and go to http://localhost:5173/.

## Usage
- Register a new account or login with existing credentials.
- Browse through the available products.
- Add desired products to the cart.
- Proceed to checkout and complete the purchase.
- Admin users can manage products through the admin panel.

## Contributing

Contributions are welcome! To contribute, follow these steps:
1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/YourFeature).
6. Open a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries or feedback, please contact:

Akash Codz - [@AkashCodz](https://github.com/AkashCodz)

You can also open an issue on the [GitHub repository](https://github.com/AkashCodz/ShopNex/issues).
