from rest_framework import serializers
from .models import House

class HouseSerializer(serializers.ModelSerializer):
   class Meta:
      model    = House
      # fields   = [ 
      #       'house_no'    ,
      #       'householder'  ,
      #       'tenant'       ,
      #       'latitude'    ,
      #       'longitude'    ,
      # ] 
      fields = '__all__'
   