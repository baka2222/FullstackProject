from rest_framework.generics import (ListAPIView)
from .models import ProductModel
from .serializers import ProductSerializer


class ProductListView(ListAPIView):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer

