"""
manage.py
This script serves as the entry point for Django project management tasks.
1. Used to run administrative commands such as runserver, migrate, makemigrations, createsuperuser, etc.
2. Sets the default Django settings module for the project.
3. Loads and executes Django's command-line utility.
4. Handles ImportError if Django is not installed or the environment is not set up.
5. Allows you to manage the project from the terminal using: python manage.py <command>
6. Ensures commands are executed in the correct project context.
7. Can be extended for custom management commands.
8. Should be run from the root directory of the Django project.
9. Essential for development, testing, and deployment workflows.
10. Keeping this file unchanged ensures compatibility with Django updates.
"""
#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webapp.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
