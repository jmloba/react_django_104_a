from app_employees.models import Employee, Department
from rest_framework import serializers

class EmployeeSerializers(serializers.ModelSerializer):
  class Meta:
    model = Employee
    fields = '__all__'
class DepartmentSerializers(serializers.ModelSerializer):
  class Meta:
    model = Department
    fields = '__all__'
