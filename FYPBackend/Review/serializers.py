from asyncio.windows_events import NULL
from dataclasses import fields
from rest_framework import serializers

from Users.models import User
from House.models import House
from .models import Review


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'fullname',
        ]


# class HouseSerializer(serializers.ModelSerializer):
#     householder = UserSerializer()
#     tenant = UserSerializer()

#     class Meta:
#         model = House
#         fields = [
#             'id',
#             'photos',
#             'householder',
#             'tenant',
#             'floors',
#             'rooms',
#             'monthlyRent',
#             'status',
#             'latitude',
#             'longitude',
#             # 'householderName',
#             # 'fullname',
#         ]


class ReviewSerializer(serializers.ModelSerializer):
    tenant = UserSerializer()

    class Meta:
        model = Review
        fields = [
            'rating',
            'house',
            'tenant',
            'review',
            'creationTime',
        ]


class ReviewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = [
            'rating',
            'house',
            'tenant',
            'review',
        ]
