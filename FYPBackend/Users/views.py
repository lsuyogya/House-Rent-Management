from multiprocessing import managers
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.views import Response
from Users.serializers import UserSerializer
from Users.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics, status
from django.contrib.auth import get_user_model

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

# from djoser import signals, utils
# from djoser.compat import get_user_email
# from djoser.conf import settings


User = get_user_model()

# Create your views here.


class UserAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class MyUserAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        users = User.objects.filter(pk=request.user.id)
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


# class CustomTokenView(djoser.views.TokenCreateView):
#    def _action(self, serializer):
#         token = utils.login_user(self.request, serializer.user)
#         token_serializer_class = settings.SERIALIZERS.token
#         return Response(
#             data=token_serializer_class(token).data, status=status.HTTP_200_OK
#         )

# class CustomTokenCreateView(utils.ActionViewMixin, generics.GenericAPIView):
#     """
#     Use this endpoint to obtain user authentication token.
#     """

#     serializer_class = settings.SERIALIZERS.token_create
#     permission_classes = settings.PERMISSIONS.token_create

#     def _action(self, serializer):
#         token = utils.login_user(self.request, serializer.user)
#         token_serializer_class = settings.SERIALIZERS.token
#         return Response(
#             # data=[token_serializer_class(token).data,User.type],
#             data=token_serializer_class(token).data,
#             # data=User.type,
#             status=status.HTTP_200_OK
#         )

class TokenObtainView(ObtainAuthToken, APIView):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid()
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        custom_response = {
            'token': token.key,
            'type': user.type,
            'id': user.id
        }
        return Response(custom_response)


class TokenCheckAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response('true')


class TenantUserAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        users = User.objects.all().filter(type="TENANT")
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class UpdateAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk, *args, **kwargs):
        id = pk
        user = request.user.id
        if (user == id):
            ownHouse = User.objects.get(pk=id)
            serializer = UserSerializer(
                ownHouse, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response("Profile updated successfully")
            return Response(serializer.errors)
        return Response("User not authenticated")
