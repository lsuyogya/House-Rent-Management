from django.db import models
from django.forms import FileField

# from Users.models import Tenant
# from Users.models import Householder
from Users.models import User

# Create your models here.


class House(models.Model):
    class StatusChoices(models.TextChoices):
        AVAILABLE = "AVAILABLE", "Available"
        OCCUPIED = "OCCUPIED", "Occupied"
        INACTIVE = "INACTIVE", "Inactive"

    photos = models.FileField(null=True)
    householder = models.ForeignKey(
        User, related_name="householder_fk",  on_delete=models.CASCADE)
    tenant = models.ForeignKey(
        User, related_name="tenant_fk", on_delete=models.SET_NULL, null=True)
    floors = models.IntegerField()
    rooms = models.IntegerField()
    # address     = models.
    monthlyRent = models.DecimalField(
        max_digits=15, decimal_places=5)
    status = models.CharField(
        max_length=50, choices=StatusChoices.choices, default=StatusChoices.AVAILABLE)
    latitude = models.FloatField()
    longitude = models.FloatField()
