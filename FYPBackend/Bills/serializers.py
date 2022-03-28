from rest_framework import serializers
from .models import Bill

class HouseSerializer(serializers.ModelSerializer):
   class Meta:
      model    = Bill
      fields   = "__all__"
   