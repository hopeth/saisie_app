from django.urls import include, path
from . import views
from django.conf import settings

urlpatterns = [
    path('', views.UspsData, name="usps_create"),
    path('<str:id>/<str:param>/', views.UspsData, name="usps_find_or_update_or_delete"),
    path('<str:all>/', views.UspsData, name="usps_deleteall"),

    path('motifs/fiche/de/consulation/', views.CountPaper, name="usps_motifs_create"),
    path('motifs/fiche/de/consulation/<str:id>/<str:param>/', views.CountPaper, name="usps_motifs_find_or_update_or_delete"),
    path('motifs/fiche/de/consulation/<str:all>/', views.CountPaper, name="usps_motifs_deleteall"),

]
