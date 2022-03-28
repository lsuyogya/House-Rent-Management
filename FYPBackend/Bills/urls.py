from unicodedata import name
from django.urls import path, include
from .views import BillsAPIView
urlpatterns = [
    path('', BillsAPIView.as_view(), name='House'),
   #  path('rest-auth/', include('rest_auth.urls')),
]
