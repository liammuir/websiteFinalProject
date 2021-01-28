from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import QuoteSerializer
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .models import Quote
import random 
from django.db.models import Max

class QuoteView(viewsets.ModelViewSet):
    permission_classes=[AllowAny]
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()

class RandQuoteView(viewsets.ModelViewSet):
    permission_classes=[AllowAny]
    serializer_class = QuoteSerializer
    def get_queryset(self):
        """
        Return a random quote

        """
        max_id = Quote.objects.all().aggregate(max_id=Max("id"))['max_id']
        while True:
            pk = random.randint(1, max_id)
            quote = Quote.objects.filter(pk=pk).first()
            if quote:
                return [quote]
        

# Create your views here.
