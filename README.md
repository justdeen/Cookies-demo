## 💫 Overview
A simple demonstration of using cookies in Express.js, including setting, getting, and signing cookies.

## 🪄 Features
- Setting and getting cookies using `cookie-parser` middleware
- Signing cookies for added security
- Demonstrating the difference between `req.cookies` and `req.signedCookies`

## 🔗 API Endpoints
- `GET /greet`: Retrieves the `name` cookie and sends a personalized greeting
- `GET /setname`: Sets the `name` and `animal` cookies
- `GET /getsignedcookie`: Sets a signed `fruit` cookie
- `GET /verifyfruit`: Verifies the signed `fruit` cookie and logs the difference between `req.cookies` and `req.signedCookies`
