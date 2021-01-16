from django.db import models

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    user_id = models.IntegerField()
    def __str__(self):
        return self.name

class Quote(models.Model):
    quote_id = models.IntegerField()
    author = models.ForeignKey(Author, on_delete=models.PROTECT)
    text = models.CharField(max_length=200)
    def __str__(self):
        return self.text

