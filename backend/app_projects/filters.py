import django_filters
from django.db.models import Q
from .models import Project,ProjectManager

class ProjectFilter(django_filters.FilterSet):
  q = django_filters.CharFilter(method='filter_project', label='search')
  
  class Meta:
    model = Project
    fields=['q']
  def filter_project  (self,queryset, name,value):
    return queryset.filter(
      Q(name__icontains=value)
    )

class ProjectManagerFilter(django_filters.FilterSet):
  q = django_filters.CharFilter(method='filter_projectmanager', label='search')
  
  class Meta:
    model = ProjectManager
    fields=['q']
    
  def filter_projectmanager  (self,queryset, name,value):
    return queryset.filter(
      Q(name__icontains=value)
    )
        