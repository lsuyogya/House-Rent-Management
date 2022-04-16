from datetime import datetime
from django.db import models
from House.models import House
from Users.models import User

# Create your models here.class Types(models.TextChoices):


class Types(models.TextChoices):
    PAID = "PAID", "Paid"
    DUE = "DUE", "Due"


class Bill(models.Model):
    status = models.CharField(
        max_length=50, choices=Types.choices, default=Types.DUE)
    electricityCost = models.DecimalField(
        max_digits=20, decimal_places=4, null=True)
    rentAmount = models.DecimalField(
        max_digits=20, decimal_places=4, null=True)
    wasteDisposalCost = models.DecimalField(
        max_digits=20, decimal_places=4, null=True)
    waterCost = models.DecimalField(max_digits=20, decimal_places=4, null=True)
    house = models.ForeignKey(House, on_delete=models.DO_NOTHING)
    tenant = models.ForeignKey(
        User, related_name='billTenant', on_delete=models.DO_NOTHING)
    householder = models.ForeignKey(
        User, related_name='billHouseholder', on_delete=models.DO_NOTHING)
    creationDate = models.DateTimeField(auto_now_add=True, null=True)
    # creationDate   = models.
    # water          = models.DecimalField(max_digits=20, decimal_places=4, default=None)
    # parking        = models.DecimalField(max_digits=20, decimal_places=4, default=None)
