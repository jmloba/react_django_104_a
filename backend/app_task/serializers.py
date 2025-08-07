from app_task.models import Task, Review
from rest_framework import serializers

class TaskSerializers(serializers.ModelSerializer):
  class Meta:
    model = Task
    fields = '__all__'

class ReviewSerializers(serializers.ModelSerializer):
  class Meta:
    model = Review
    fields = '__all__'
