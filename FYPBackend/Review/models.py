from django.db import models
from django.forms import FileField

# from Users.models import Tenant
# from Users.models import Householder
from Users.models import User
from House.models import House

# Create your models here.


class Review(models.Model):

    rating = models.IntegerField()
    house = models.ForeignKey(
        House, related_name="review_house_fk",  on_delete=models.CASCADE)
    tenant = models.ForeignKey(
        User, related_name="review_tenant_fk", on_delete=models.SET_NULL, null=True)
    review = models.TextField()
    creationTime = models.DateTimeField(auto_now_add=True)
