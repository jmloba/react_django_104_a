from app_projects.models import Project, ProjectManager
from rest_framework import serializers

class ProjectManagerSerializers(serializers.ModelSerializer):
  class Meta:
    model = ProjectManager
    fields ='__all__'
    def __str__(self):
      return self.name
    
class ProjectSerializers(serializers.ModelSerializer):
  class Meta:
    model = Project
    # fields ='__all__'    
    fields =['id','name','projectmanager','start_date', 'end_date','comments','status']
    