
from django.shortcuts import render

# Homepage view
def homepage(request):
	return render(request, 'main/Homepage.html')

# About page view
def about(request):
	return render(request, 'main/About.html')

# Index (login) page view
def index(request):
	return render(request, 'main/index.html')

# Sign in page view
def signin(request):
	return render(request, 'main/Sign in page.html')

# Homepage view
def homepage(request):
	return render(request, 'main/Homepage.html')

# Sign in page view
def signin(request):
	return render(request, 'main/Sign in page.html')
