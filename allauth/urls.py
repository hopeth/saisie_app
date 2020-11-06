from django.conf.urls import url
from . import views
from django.conf import settings
from django.urls import path
# app_name = 'auths'

urlpatterns = [
    path('register/', views.user_register, name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('profile/', views.user_profile, name='profile'),
]
