from django.contrib import admin
from .models import Project, ProjectManager


class ProjectAdmin(admin.ModelAdmin):
  list_display=('name','projectmanager','start_date','end_date','comments','created','modified')
  ordering=('name',)
  list_editable =('projectmanager','start_date','end_date','comments')
  filter_horizontal=()
  list_filter =()
  fieldsets=()
  
class ProjectManagerAdmin(admin.ModelAdmin):
  list_display=('name','created','modified')
  ordering=('name',)
  list_editable =()
  filter_horizontal=()
  list_filter =()
  fieldsets=()

admin.site.register(Project,ProjectAdmin)
admin.site.register(ProjectManager,ProjectManagerAdmin)