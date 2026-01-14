# This file defines URL patterns for the 'main' app.
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Homepage/', views.homepage, name='Homepage'),
    path('About/', views.about, name='About'),
    path('SignIn/', views.signin, name='SignIn'),
]
