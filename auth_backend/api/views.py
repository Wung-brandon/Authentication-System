from django.shortcuts import render
from .serializers import UserSerializer, MyTokenObtainPairSerializer, RegisterSerializer
from .models import User, Profile
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response 
# Create your views here.
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = (AllowAny,)
    
@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated],)
def dashboard(request):
    if request.method == "GET":
        context = f"Hey {request.user}, You are seeing a GET response"
        return Response({"response":context}, status=status.HTTP_200_OK)
    elif request.method == "POST":
        text = request.POST.get("text")
        context = f"Hey {request.user}, Your text is {text}"
        return Response({"response":context}, status=status.HTTP_200_OK)

    return Response({}, status=status.HTTP_400_BAD_REQUEST)

api_view(["GET", "POST"])
permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == "GET":
        data = f"Congratulations {request.user}, your API just responded to a GET request"
        return Response({
            "response" : data
        }, status=status.HTTP_200_OK)
    elif request.method == "POST":
        text = request.POST.get("text")
        data = f"Congratulations your API just responded to a POST request with text: {text}"
        return Response({
            "response" : data
        }, status=status.HTTP_200_OK)
    return Response({}, status=status.HTTP_400_BAD_REQUEST)
        