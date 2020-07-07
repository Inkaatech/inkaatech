from django.urls import path
from . import views

urlpatterns = [
    path('api/Profile/', views.ProfileListCreate.as_view() ),
]