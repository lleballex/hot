from core.models import BaseModel

from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.contrib.auth.hashers import make_password


class UserManager(BaseUserManager):
    def create_user(self, username, password, **extra_fields):
        if not isinstance(password, str):
            raise TypeError("Password must be a string")

        username = self.model.normalize_username(username)
        user = self.model(username=username, **extra_fields)
        user.password = make_password(password)
        user.save()

        return user

    def create_superuser(self, username, password, **extra_fields):
        return self.create_user(username, password, is_staff=True, **extra_fields)


class User(AbstractBaseUser, BaseModel):
    username = models.CharField(max_length=255, unique=True)

    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'

    def has_perm(self, perm, obj=None):
        return self.is_staff

    def has_module_perms(self, module):
        return self.is_staff

