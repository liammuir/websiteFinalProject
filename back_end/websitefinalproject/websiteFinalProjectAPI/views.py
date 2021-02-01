from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import QuoteSerializer
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .models import Quote
import random 
from django.db.models import Max
from users.models import NewUser
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes

class QuoteView(viewsets.ModelViewSet):
    permission_classes=[AllowAny]
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()
    def post(self, request):
        return self.create(request)


class RandQuoteView(viewsets.ModelViewSet):
    permission_classes=[AllowAny]
    serializer_class = QuoteSerializer
    
@api_view(['GET'])
@permission_classes([AllowAny])
def get_randquote(request):
        """
        Return a random quote

        """
        max_id = Quote.objects.all().aggregate(max_id=Max("id"))['max_id']
        while True:
            pk = random.randint(1, max_id)
            quote = Quote.objects.filter(pk=pk).first()
            if quote:
                return JsonResponse({'text':quote.text,'author':NewUser.objects.get(pk=quote.author.pk).user_name})
# Create your views here.
