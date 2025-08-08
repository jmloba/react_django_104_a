
from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('project', views.ProjectViewset, basename='project')

app_name = 'api_ViewSetsProject'

urlpatterns = [
  # function based
  path('', include(router.urls)),
   
]
