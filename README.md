📱 QR Code Generator – Mini Project
📌 Project Overview

The QR Code Generator is a web-based mini project that allows users to generate customized QR codes for any website link. Users can control the size, foreground color, and background color of the QR code and download it instantly.

This project demonstrates the practical use of JavaScript DOM manipulation, external libraries, and CSS animations to create an interactive and user-friendly experience.

✨ Features

Generate QR codes for any website URL

Customizable QR code size

Dark and light color selection

Animated loading spinner during QR generation

Download generated QR code as an image

Input validation for empty fields

🛠️ Technologies Used

HTML5 – Structure and layout

CSS3 – Styling and animations

JavaScript (ES6) – Logic and DOM manipulation

QRCode.js Library – QR code generation

⚙️ Working Principle

User enters a website URL and selects QR size and colors.

On form submission, the default form behavior is prevented.

A loading spinner is displayed while the QR code is generated.

The QRCode.js library generates the QR code dynamically.

The spinner hides once generation is complete.

A download button allows the user to save the QR code image locally.

📂 Project Structure
QR-Code-Generator/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── README.md

🧪 Validation & Error Handling

Displays an alert if the URL input field is empty

Prevents QR generation without valid input

Ensures only one QR code is displayed at a time

📸 Output

Generates a clear and scannable QR code

Supports high error correction level for better reliability

Downloadable image format for offline use

🚀 Future Enhancements

Add QR code format options (SVG, PDF)

Enable QR generation for text, email, and phone numbers

Add dark mode UI

Improve responsiveness for mobile devices

🎯 Learning Outcomes

Understanding JavaScript event handling

Working with third-party libraries

DOM manipulation and dynamic content updates

Implementing loaders and user-friendly UI

👨‍💻 Author

Gokul Raja
Frontend Mini Project developed with ❤️ using HTML, CSS & JavaScript
