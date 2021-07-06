from rest_framework import serializers
from .models import Cart
class CartSerializer(serializers.ModelSerializer):
    user_name = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Cart
        fields = ['id','product','quantity','user_name'] #'__all__' #['id', 'firstName', 'email', 'lastName']