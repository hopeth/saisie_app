from django.urls import include, path
from . import views
from django.conf import settings
urlpatterns = [
    path('', views.ChwsData, name="chws_create"),
    path('<str:id>/<str:param>/', views.ChwsData, name="chws_find_or_update_or_delete"),
    path('<str:all>/', views.ChwsData, name="chws_deleteall"),
]
