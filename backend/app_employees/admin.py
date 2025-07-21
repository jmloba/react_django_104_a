from django.contrib import admin
from .models import Employee


class EmployeeAdmin(admin.ModelAdmin):
  list_display=('emp_id','emp_name','designation')
  ordering=('emp_id',)
  list_editable =('emp_name','designation')
  filter_horizontal=()
  list_filter =()
  fieldsets=()

admin.site.register(Employee,EmployeeAdmin)