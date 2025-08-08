from django.shortcuts import render,get_object_or_404


from rest_framework import viewsets
from app_employees.models import Employee
from app_employees.serializers import EmployeeSerializers

from app_employees.filters import EmployeeFilter


from rest_framework.response import Response
from rest_framework import status

from app_employees.paginations import CustomPagination

class EmployeeViewset(viewsets.ModelViewSet):
  queryset = Employee.objects.all().order_by('emp_id')
  serializer_class = EmployeeSerializers
  # pagination_class = CustomPagination

  # filterset_fields = ['designation']
  filterset_class = EmployeeFilter

  
