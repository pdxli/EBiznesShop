from django.contrib.auth.models import User
from .models import Product

from rest_framework import serializers



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','name','tag', 'price', 'description', 'image', 'category', 'stock')