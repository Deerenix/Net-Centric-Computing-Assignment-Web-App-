# Django Minimal Web App

This is a minimal Django web application with three pages: Home, About, and Contact. The app is designed for easy local hosting and access from other computers on the same network.

## Features

- Three simple pages: Home, About, Contact
- Minimal user interface
- Easy to run locally and accessible from other devices on the same network

## Getting Started

### Prerequisites

- Python 3.8+
- Django (already included in requirements)

### Installation

1. Open a terminal in this project directory.
2. (Optional) Create and activate a virtual environment.
3. Install dependencies:
   ```
   pip install django
   ```

### Running the App

1. Run migrations:
   ```
   python manage.py migrate
   ```
2. Start the server:
   ```
   python manage.py runserver 0.0.0.0:8000
   ```
3. Access the app from your browser at `http://localhost:8000` or from another computer using your local IP (e.g., `http://192.168.x.x:8000`).

---

Replace this README with your own details as needed.
