from . import views
from django.urls import path
from django.conf.urls import include



app_name = 'api'


urlpatterns = [
    path('', views.homePage, name='home'),
    path('products/', views.Product, name='products'),
    path("api-auth/", include('rest_framework.urls', namespace='rest_framework')),
    path('products-set/', views.MyModelList.as_view()),
]
