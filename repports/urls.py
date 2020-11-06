from django.conf.urls import url
from . import views
from django.conf import settings
from django.urls import path
# app_name = 'auths'

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('create_db_csv_file/', views.create_db_csv_file, name='create_db_csv_file'),
]
