from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path("token/", views.MyTokenObtainPairView.as_view(), name="token"),
    path("token/refresh", TokenRefreshView.as_view(), name="refresh"),
    path("register/", views.RegisterView.as_view(), name="register"),
    path('test/', views.testEndPoint, name='test'),
    path("dashboard/", views.dashboard, name="dashboard"),
    
]
