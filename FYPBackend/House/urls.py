from unicodedata import name
from django.urls import path, include
from .views import HouseAPIView, MyHouseAPIView

urlpatterns = [
    path('', HouseAPIView.as_view(), name='House'),
    path('me/', MyHouseAPIView.as_view(), name='MyHouse')
   #  path('rest-auth/', include('rest_auth.urls')),
]