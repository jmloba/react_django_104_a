from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TaskSerializers, ReviewSerializers
from .models import Task, Review
from django.http import HttpResponse


# Create your views here.

class Task_ViewSet(viewsets.ModelViewSet):
  queryset = Task.objects.all().order_by('title')
  serializer_class = TaskSerializers
  
  def post(self, request, *args,  **kwargs):
    
    title = request.data['title']
    content = request.data['content']
    Task.objects.create(title= title, content=content)
    return HttpResponse({'message':'Task created'}, status = 200)
  
  
class TaskReview_ViewSet(viewsets.ModelViewSet):
  queryset = Review.objects.all().order_by('review_title')
  serializer_class = ReviewSerializers
  
  def post(self, request, *args,  **kwargs):
    
    reviewer_name = request.data['reviewer_name']
    review_title = request.data['review_title']
    task = request.data['task']
    Review.objects.create(reviewer_name= reviewer_name, review_title=review_title, task=task)
    return HttpResponse({'message':'Review created'}, status = 200)
  