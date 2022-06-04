from unicodedata import name
from django.urls import path, include
from .views import HouseReviewAPIView, AllHouseReviewAPIView

urlpatterns = [

    path('<int:pk>/', HouseReviewAPIView.as_view(), name='House'),
    path('', AllHouseReviewAPIView.as_view(), name='AllHouse'),
]
