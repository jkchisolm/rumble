from django.db import models
import datetime
from django.utils import timezone

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.username

class Profile(models.Model):
    nickname = models.CharField(max_length=200)
    height = models.CharField(max_length=200)
    weight = models.CharField(max_length=200)
    reach = models.CharField(max_length=200)
    age = models.CharField(max_length=200)
    wins = models.CharField(max_length=200)
    losses = models.CharField(max_length=200)

    def __str__(self):
        return self.nickname