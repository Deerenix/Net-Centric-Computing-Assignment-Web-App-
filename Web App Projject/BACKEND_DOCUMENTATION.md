# Backend Documentation: Net-Centric Computing Assignment Web App

## Overview

This backend is built with Django, a Python web framework. It handles routing, view rendering, static file management, and basic configuration for the web application.

---

## 1. Project Structure

- `manage.py`: Django’s command-line utility.
- `webapp/`: Django project settings and configuration.
- `main/`: Django app containing views, URLs, and templates.
- `db.sqlite3`: SQLite database (default for Django projects).

---

## 2. Key Files and Their Roles

### a. `webapp/settings.py`

- Configures installed apps, middleware, database, templates, and static files.
- Sets `TEMPLATES['DIRS']` to use `main/templates`.
- Sets `STATICFILES_DIRS` to use `main/static`.
- `DEBUG = True` for development.

### b. `main/views.py`

- Contains view functions for each page:
  - `index` (login page)
  - `homepage` (dashboard)
  - `about` (about page)
  - `signin` (attendance page)
- Each view uses `render(request, 'main/<template>.html')` to serve the correct template.

### c. `main/urls.py`

- Maps URLs to views:
  - `/` → `index`
  - `/Homepage/` → `homepage`
  - `/About/` → `about`
  - `/SignIn/` → `signin`

### d. `main/templates/main/`

- Contains all HTML templates rendered by the backend.

### e. `main/static/main/`

- Contains all static assets (images, JS, CSS) referenced in templates using Django’s static tag.

---

## 3. Static Files

- Use `{% load static %}` at the top of templates.
- Reference static files as `{% static 'main/filename' %}`.
- Example: `<img src="{% static 'main/download-removebg-preview.png' %}" ...>`

---

## 4. Database

- Uses SQLite by default (no custom models in this version).
- Migrations are managed with `python manage.py migrate`.

---

## 5. Running the Backend

1. (Optional) Create and activate a virtual environment:
   - `python -m venv .venv`
   - `.venv\Scripts\activate` (Windows) or `source .venv/bin/activate` (Mac/Linux)
2. Install Django:
   - `pip install django`
3. Run migrations:
   - `python manage.py migrate`
4. Start the server:
   - `python manage.py runserver`
   - For LAN access: `python manage.py runserver 0.0.0.0:8000`

---

## 6. Version Control

- Use Git for tracking changes.
- Push to GitHub for backup and collaboration.

---

## 7. Notes

- This backend is for development/testing. For production, use a WSGI/ASGI server and set `DEBUG = False`.
- Ensure all static and template files are in their correct directories for proper rendering.

---

For further backend customization (models, authentication, APIs), extend the Django app as needed.
