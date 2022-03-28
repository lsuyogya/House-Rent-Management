from django.db import models
from django.forms import FileField
from House.models import House

# from Users.models import Tenant
# from Users.models import Householder
from Users.models import User

# Create your models here.
class Bill(models.Model):
   electricity    = models.DecimalField(max_digits=10, decimal_places=2)
   rentAmount     = models.DecimalField(max_digits=10, decimal_places=2)
   wasteDisposal  = models.DecimalField(max_digits=10, decimal_places=2)
   house          = models.ForeignKey(House, on_delete=models.DO_NOTHING)
   tenant         = models.ForeignKey(User, on_delete=models.DO_NOTHING)
   # water          = models.DecimalField(max_digits=10, decimal_places=2, default=None)
   # parking        = models.DecimalField(max_digits=10, decimal_places=2, default=None)