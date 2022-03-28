from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
# from django.contrib.auth.models import AbstractUser
from django.urls import reverse

# Create your models here.

class UserManager(BaseUserManager):
   def create_users(self, email, username, type, bio, profession, citizenship, password=None):
   # def create_user(self, email, username, type, bio, profession, password=None):
      if not email:
         raise ValueError ("User email is required")
      if not username:
         raise ValueError ("Username is required")
      if not type:
         raise ValueError ("User type is required")
      if not bio:
         raise ValueError ("User bio is required")
      if not profession:
         raise ValueError ("User profession is required")
      # if not citizenship:
      #    raise ValueError ("User citizenship is required")
      if not email:
         raise ValueError ("User email is required")

      user = self.model(
         email    =  self.normalize_email(email),
         username = username,
         type = type,
         bio = bio,
         profession = profession,
         # citizenship = citizenship,
         )

      user.set_password(password)
      user.save(using = self.db)
      return user

   def create_superuser(self, email, username, type, bio, profession, citizenship, password=None):
   # def create_superuser(self, email, username, type, bio, profession, password=None):
      user = self.create_user(
         email       =  self.normalize_email(email),
         username    = username,
         type        = type,
         bio         = bio,
         profession  = profession,
         citizenship = citizenship,
         password    = password,
         )
      user.is_admin=True
      user.is_staff=True
      user.is_superuser=True
      user.save(using=self.db)
      return user

class User(AbstractBaseUser):

   class Types(models.TextChoices):
      HOUSEHOLDER = "HOUSEHOLDER", "Householder"
      TENANT      = "TENANT", "Tenant"

   email          = models.EmailField(max_length=255, unique=True) 
   username       = models.CharField(max_length=100)
   date_joined    = models.DateTimeField(auto_now_add=True)
   last_login     = models.DateTimeField(auto_now=True)
   is_admin       = models.BooleanField(default=False)
   is_active      = models.BooleanField(default=True)
   is_staff       = models.BooleanField(default=False)
   is_superuser   = models.BooleanField(default=False)


   type           = models.CharField(max_length=50, choices=Types.choices, default=Types.TENANT)
   address        = models.CharField( max_length=50)
   bio            = models.TextField()
   profession     = models.CharField(max_length=50)
   citizenship    = models.FileField(upload_to="Citizenships/", null=True, default=None)

   USERNAME_FIELD    = 'email'
   REQUIRED_FIELDS   =  ['username', 'type', 'bio', 'profession', 'citizenship']
   # REQUIRED_FIELDS   =  ['username', 'type', 'bio', 'profession']

   objects = UserManager()
   
   def __str__(self):
       return self.username + " , " + self.email + " , " + self.type 

   def has_perm(self, perm, obj=None):
      return self.is_admin

   def has_module_perms(self, app_label):
      return True 

   def get_absolute_url(self):
       return reverse("user:detail", kwargs={"username": self.username})

class HouseholderManager(models.Manager):
   def get_queryset(self, *args, **kwargs):
       return super().get_queryset(*args, **kwargs).filter(type=User.Types.HOUSEHOLDER)

class TenantManager(models.Manager):
   def get_queryset(self, *args, **kwargs):
       return super().get_queryset(*args, **kwargs).filter(type=User.Types.TENANT)


class Householder(User):
   objects = HouseholderManager()
   
   class meta:
      proxy = True

   def save(self, *args, **kwargs):
      if not self.pk:
         self.type = User.Types.HOUSEHOLDER
      return super().save(*args, **kwargs)
     

class Tenant(User):
   objects = TenantManager()

   class meta:
      proxy = True

   def save(self, *args, **kwargs):
      if not self.pk:
         self.type = User.Types.TENANT
      return super().save(*args, **kwargs)
