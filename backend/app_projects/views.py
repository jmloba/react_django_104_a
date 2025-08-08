from django.shortcuts import render
from rest_framework import viewsets

from .models import Project, ProjectManager
from .serializers import ProjectSerializers, ProjectManagerSerializers

from app_projects.filters import ProjectFilter, ProjectManagerFilter
from rest_framework.response import Response
from rest_framework import status

from app_employees.paginations import CustomPagination

class ProjectViewset(viewsets.ModelViewSet):
  queryset = Project.objects.all(). order_by('name')
  serializer_class = ProjectSerializers
  # pagination_class = CustomPagination

  # filterset_fields = ['designation']
  filterset_class = ProjectFilter
  
class ProjectManagerViewset(viewsets.ModelViewSet):
  queryset = ProjectManager.objects.all(). order_by('name')
  serializer_class = ProjectManagerSerializers
  # pagination_class = CustomPagination

  # filterset_fields = ['designation']
  filterset_class = ProjectManagerFilter  