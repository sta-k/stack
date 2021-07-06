from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Cart
from .serializers import CartSerializer
class CartListAPIView(viewsets.ModelViewSet):
    queryset = Cart.objects.order_by('-created_at')
    serializer_class = CartSerializer

    def perform_create(self, serializer):
        req = serializer.context['request']
        serializer.save(user=req.user)