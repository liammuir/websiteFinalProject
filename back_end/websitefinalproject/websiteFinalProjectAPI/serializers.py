from rest_framework import serializers
from .models import Author, Quote

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ['id','name','email','user_id']

class QuoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Quote
        fields = ['id','quote_id','author','text']