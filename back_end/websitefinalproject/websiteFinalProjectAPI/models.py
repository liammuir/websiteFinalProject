from django.db import models
from django.utils import timezone
# Create your models here.

class Quote(models.Model):
    date = models.DateField(auto_now=True)
    author = models.CharField(max_length=200) #temporary
    text = models.CharField(max_length=200)
    def __str__(self):
        return self.text

