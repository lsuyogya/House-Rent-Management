from asyncio.windows_events import NULL
from dataclasses import fields
from rest_framework import serializers

from Users.models import User
from .models import House


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'fullname',
        ]


class UserContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'fullname',
            'phone_number',
        ]


class HouseSerializer(serializers.ModelSerializer):

    householder = UserSerializer()
    tenant = UserSerializer()

    class Meta:
        model = House
        fields = [
            'id',
            'photos',
            'householder',
            'tenant',
            'floors',
            'rooms',
            'monthlyRent',
            'status',
            'latitude',
            'longitude',
            # 'householderName',
            # 'fullname',
        ]


class HousePostSerializer(serializers.ModelSerializer):

    class Meta:
        model = House
        fields = [
            'photos',
            'householder',
            'tenant',
            'floors',
            'rooms',
            'monthlyRent',
            'status',
            'latitude',
            'longitude',
        ]


class HouseMapMarkerSerializer(serializers.ModelSerializer):
    householder = UserContactSerializer()

    class Meta:
        model = House
        fields = [
            'id',
            'householder',
            'floors',
            'rooms',
            'monthlyRent',
            'status',
            'latitude',
            'longitude',
        ]
