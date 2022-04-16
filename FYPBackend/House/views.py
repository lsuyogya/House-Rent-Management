from django.shortcuts import render
from rest_framework.views import APIView, Response
from uritemplate import partial

from Users.models import User
from .serializers import HouseSerializer, HousePostSerializer, HouseMapMarkerSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import House
from rest_framework.permissions import BasePermission, SAFE_METHODS

# Create your views here.
# if request.method in SAFE_METHODS:
#    return False
# class HouseAPIViewPermission(BasePermission):
#    message = "Permission not granted"
#    def has_permission(self, request, view):
#       if request.method == POST
#       return message


class HouseAPIView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = HousePostSerializer

    def get(self, request, *args, **kwargs):
        houses = House.objects.all()
      #   queryset = House.objects.select_related('householder')
        serializer = HouseSerializer(houses, many=True)
        return Response(serializer.data)
      #   return Response(queryset)

    def post(self, request, *args, **kwargs):
        serializer = HousePostSerializer(
            data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response("House added successfully")
        return Response(serializer.errors)

    def patch(self, request, pk, *args, **kwargs):
        id = pk
        ownHouse = House.objects.get(pk=id)
        serializer = HousePostSerializer(
            ownHouse, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response("House updated successfully")
        return Response(serializer.errors)

    #  def perform_create(self, serializer):
    #      serializer.validated_data['householder'] = self.request.user.id
    #      return super(HouseAPIView, self).perform_create(serializer)


class MyHouseAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        current_user = request.user
        if current_user.type == current_user.Types.HOUSEHOLDER:
            houses = House.objects.all().filter(householder__exact=current_user.id)
        if current_user.type == current_user.Types.TENANT:
            houses = House.objects.all().filter(tenant__exact=current_user.id)

        serializer = HouseSerializer(houses, many=True)
        return Response(serializer.data)


class HouseMapMarkerAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        houses = House.objects.all()
        serializer = HouseMapMarkerSerializer(houses, many=True)
        return Response(serializer.data)
    # def post(self, request):
    #    pass
