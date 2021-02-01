from rest_framework import routers
from . import views
from django.contrib import admin
from django.urls import path, include

router = routers.DefaultRouter()
router.register('quotes',views.QuoteView, basename='Quotes')


urlpatterns = [
    path('',include(router.urls)),
    path('quote',views.get_randquote)
]

