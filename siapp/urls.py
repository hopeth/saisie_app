from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.contrib.auth import views as auth_views

from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('chws/', include('chws.urls')),
    path('si_admin/', admin.site.urls, name="admin"),
    path('ajax/site', views.siteAjax, name="ajax_site"),
    path('ajax/chws', views.chwsAjax, name="ajax_chws"),
    path('ajax/pf', views.PfAjax, name="ajax_pf"),
    path('accounts/', include('allauth.urls')),
    path('usps/', include('usps.urls')),
    path('repports/', include('repports.urls')),

]
# if settings.DEBUG == True:
#     import debug_toolbar
#     urlpatterns = [
#         path('__debug__/', include(debug_toolbar.urls)),
#     ] + urlpatterns


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
