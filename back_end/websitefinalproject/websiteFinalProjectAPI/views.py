from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import AuthorSerializer, QuoteSerializer
from .models import Author, Quote

class AuthorView(viewsets.ModelViewSet):
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()

class QuoteView(viewsets.ModelViewSet):
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()

# Create your views here.
