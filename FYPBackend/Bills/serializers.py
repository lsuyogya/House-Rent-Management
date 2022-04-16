from rest_framework import serializers
from .models import Bill
from House.models import House
from Users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'fullname',
        ]


class HouseSerializer(serializers.ModelSerializer):
    householder = UserSerializer()
    tenant = UserSerializer()

    class Meta:
        model = House
        fields = [
            'id',
            'householder',
            'tenant',
        ]


class BillSerializer(serializers.ModelSerializer):
    house = HouseSerializer()
    tenant = UserSerializer()
    householder = UserSerializer()

    class Meta:
        model = Bill
        fields = [
            'id',
            'electricityCost',
            'rentAmount',
            'wasteDisposalCost',
            'waterCost',
            'house',
            'tenant',
            'householder',
            'creationDate',
            'status',
        ]


class BillPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bill
        fields = [
            'electricityCost',
            'rentAmount',
            'wasteDisposalCost',
            'waterCost',
            'house',
            'tenant',
            'householder',
            'status',
        ]
