from django.urls import path
from .views import CustomUserCreate, BlacklistToken

app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistToken.as_view(), name="blacklist")
]