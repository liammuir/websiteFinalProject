from django.db import models
from django.utils import timezone
from django.conf import settings
# Create your models here.

class Quote(models.Model):
    date = models.DateField(auto_now=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.PROTECT)
    text = models.CharField(max_length=200)
    def __str__(self):
        return self.text