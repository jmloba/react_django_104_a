from app_projects.models import Project, ProjectManager
from rest_framework import serializers

class ProjectManagerSerializers(serializers.ModelSerializer):
  class Meta:
    model = ProjectManager
    fields ='__all__'
    
class ProjectSerializers(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields ='__all__'    