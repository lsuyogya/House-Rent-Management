from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import HouseSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import House


# Create your views here.

class HouseAPIView(APIView):
   # permission_classes = [IsAuthenticated]
   permission_classes = [AllowAny]
   def get(self, request, *args, **kwargs):
      houses = House.objects.all()
      serializer = HouseSerializer(houses, many=True)
      return Response(serializer.data)

   def post(self, request, *args, **kwargs):
      serializer = HouseSerializer(data=request.data) 

      if serializer.is_valid:
         serializer.save()
         return Response("House added successfully")
      return Response(serializer.errors)

class MyHouseAPIView(APIView):
   permission_classes = [IsAuthenticated]
   def get(self, request):
      current_user = request.user
      if current_user.type == current_user.Types.HOUSEHOLDER:
         houses = House.objects.filter(householder__exact = current_user.id)
      if current_user.type == current_user.Types.TENANT:
         houses = House.objects.all().filter(tenant__exact = current_user.id)
         
      serializer = HouseSerializer(houses, many=True)
      return Response(serializer.data)

   # def post(self, request):
   #    pass