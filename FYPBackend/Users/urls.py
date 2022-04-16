from django.urls import path, include
from .views import TokenCheckAPIView, UserAPIView, TenantUserAPIView
from .views import TokenObtainView

urlpatterns = [
    path('', UserAPIView.as_view(), name='user'),
    path('tenants/', TenantUserAPIView.as_view(), name='user'),
    path('login/', TokenObtainView.as_view(), name='login'),
    path('checkToken/', TokenCheckAPIView.as_view(), name='check'),
]
