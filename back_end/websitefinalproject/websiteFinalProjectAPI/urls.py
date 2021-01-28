from rest_framework import routers
from . import views
from django.contrib import admin
from django.urls import path, include

router = routers.DefaultRouter()
router.register('quotes',views.QuoteView)
router.register('quote',views.RandQuoteView, basename='Quotes')

urlpatterns = [
    path('',include(router.urls)),
]

