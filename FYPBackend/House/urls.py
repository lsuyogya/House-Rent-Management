from unicodedata import name
from django.urls import path, include
from .views import HouseAPIView

urlpatterns = [
    path('', HouseAPIView.as_view(), name='House'),
   #  path('rest-auth/', include('rest_auth.urls')),
]