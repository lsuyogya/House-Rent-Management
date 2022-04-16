from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import BillSerializer, BillPostSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Bill

# Create your views here.


class BillsAPIView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = BillPostSerializer

    def get(self, request, *args, **kwargs):
        bills = Bill.objects.all()
        serializer = BillSerializer(bills, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):

        serializer = BillPostSerializer(data=request.data)
        if request.user.type != "HOUSEHOLDER":
            return Response("You need to be a householder to create bills")
        if serializer.is_valid():
            serializer.save()
            return Response("Bill Created Successfully")
        else:
            return Response(serializer.errors)

    def patch(self, request, pk, *args, **kwargs):
        id = pk
        ownBill = Bill.objects.get(pk=id)
        serializer = BillPostSerializer(
            ownBill, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response("Bill updated successfully")
        return Response(serializer.errors)


class MyBillsAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        current_user = request.user
        if current_user.type == current_user.Types.HOUSEHOLDER:
            bills = Bill.objects.all().filter(householder__exact=current_user.id)
        if current_user.type == current_user.Types.TENANT:
            bills = Bill.objects.all().filter(tenant__exact=current_user.id)

        serializer = BillSerializer(bills, many=True)
        return Response(serializer.data)
