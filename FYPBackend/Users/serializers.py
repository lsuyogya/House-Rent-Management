from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
   class Meta:
      model = User
      fields = [
      'id',
      'fullname',
      'email',
      'type',
      'address',
      'bio',
      'phone_number',
      'profile_pic',
      'stripe_acc',
      'profession',
      'citizenship',
      ] 
      # fields = '__all__'
         