from unicodedata import name
from django.urls import path, include
from .views import BillsAPIView, MyBillsAPIView
urlpatterns = [
    path('', BillsAPIView.as_view(), name='Bill'),
    path('me/', MyBillsAPIView.as_view(), name='Bill'),
    path('<int:pk>/', BillsAPIView.as_view(), name='Bill'),
    #  path('rest-auth/', include('rest_auth.urls')),
]
