from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import HouseSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Bill

# Create your views here.

class BillsAPIView(APIView):
   permission_classes = [IsAuthenticated]
   def get(self, request):
      bills = Bill.objects.all()
      serializer = HouseSerializer(bills, many=True)
      return Response(serializer.data)

   # def post(self, request):
   #    pass