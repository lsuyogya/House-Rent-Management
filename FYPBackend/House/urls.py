from unicodedata import name
from django.urls import path, include
from .views import HouseAPIView, MyHouseAPIView, HouseMapMarkerAPIView

urlpatterns = [
    path('', HouseAPIView.as_view(), name='House'),
    path('<int:pk>/', HouseAPIView.as_view(), name='House'),
    path('me/', MyHouseAPIView.as_view(), name='MyHouse'),
    path('map/', HouseMapMarkerAPIView.as_view(), name='MapMarker'),
    #  path('rest-auth/', include('rest_auth.urls')),
]
