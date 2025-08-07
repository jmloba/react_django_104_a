from django.contrib import admin
from .models import Task, Review


class TaskdAdmin(admin.ModelAdmin):
  list_display=('title','content','date_posted')
  ordering=()
  list_editable =('content',)
  filter_horizontal=()
  list_filter =()
  fieldsets=()

admin.site.register(Task,TaskdAdmin)

class ReviewAdmin(admin.ModelAdmin):
  list_display=('reviewer_name','review_title','task')
  ordering=()
  list_editable =('review_title',)
  filter_horizontal=()
  list_filter =()
  fieldsets=()

admin.site.register(Review,ReviewAdmin)