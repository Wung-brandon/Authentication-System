from .models import User, Profile
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]
        
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["full_name"] = user.profile.full_name
        token["username"] = user.username
        token["email"] = user.email
        token["image"] = str(user.profile.image)
        token["bio"] = user.profile.bio
        token["verified"] = user.profile.verified
        
        return token
    
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, min_length=6, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = User
        fields = ["email", "username", "password", "confirm_password"]
        
    def validate(self, attrs):
        if attrs["password"] != attrs["confirm_password"]:
            raise serializers.ValidationError({"password": "Password fields does not match"})
        return attrs
    
    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = User.objects.create(
            username = validated_data["username"],
            email = validated_data["email"]
        )       
        user.set_password(validated_data["password"])
        user.save()
        return user 
            
        
        