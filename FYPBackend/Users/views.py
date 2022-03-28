from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.views import Response
from Users.serializers import UserSerializer
from Users.models import User
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class UserAPIView(APIView):
   permission_classes = [IsAuthenticated] 
   def get(self, request):
      users = User.objects.all()
      serializer = UserSerializer(users, many=True)
      return Response(serializer.data)