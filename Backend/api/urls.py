from django.urls import path
from .views import ProfileList

urlpatterns = [
   path('profile/', ProfileList.as_view(), name='profile-list'),
]