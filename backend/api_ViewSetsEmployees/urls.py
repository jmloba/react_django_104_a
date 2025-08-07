
from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('employees', views.EmployeeViewset, basename='employee')

app_name = 'api_ViewSetsEmployee'

urlpatterns = [
  # function based
  path('', include(router.urls)),
   
]
