from django.db import models
from django.forms import FileField

# from Users.models import Tenant
# from Users.models import Householder
from Users.models import User

# Create your models here.
class House(models.Model):
   photos      = models.FileField( null=True)
   house_no    = models.IntegerField()
   householder = models.ForeignKey(User, related_name="householder_fk",  on_delete=models.CASCADE) 
   tenant      = models.ForeignKey(User, related_name="tenant_fk", on_delete=models.SET_NULL, null=True) 
   latitude    = models.DecimalField(max_digits=5, decimal_places=2, null=True)
   longitude   = models.DecimalField(max_digits=5, decimal_places=2, null=True)