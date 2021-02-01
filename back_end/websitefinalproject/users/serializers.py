from rest_framework import serializers
from users.models import NewUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('url','email', 'user_name', 'password','is_active')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        userInstance = self.Meta.model(**validated_data)
        if password is not None:
            userInstance.set_password(password)
        userInstance.save()
        return userInstance
