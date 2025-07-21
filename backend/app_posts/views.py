from django.shortcuts import render
from .serializers import PostSerializer

from rest_framework import generics
from .models import Post
from rest_framework.permissions import AllowAny


class Post_Generics(generics.ListCreateAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer
  permission_classes=[AllowAny]
  
class PostDetail_Generics(generics.RetrieveUpdateDestroyAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer
  lookup_field ='pk'