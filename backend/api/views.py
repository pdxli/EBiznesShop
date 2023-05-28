from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProductSerializer
from .models import Category,Product





def homePage(request):
    return render(request, 'api/home.html')

class MyModelList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

# Create your views here.

