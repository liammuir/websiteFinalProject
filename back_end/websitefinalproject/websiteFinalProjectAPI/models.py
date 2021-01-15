from django.db import models

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    user_id = models.IntegerField(max_length=50)
    def __str__(self):
        return self.user_id

class Quote(models.Model):
    quote_id = models.IntegerField(max_length=50)
    author = models.ForeignKey(Author, on_delete=models.PROTECT)

