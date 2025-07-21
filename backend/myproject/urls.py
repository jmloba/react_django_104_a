

from django.contrib import admin
from django.urls import path,include

#  


urlpatterns = [
    path('admin/', admin.site.urls),

    #base api
    path('api/v1/', include('app_api.urls')),
    
    
    path('api/posts/',include('app_posts.urls')),
    path('api_ViewSetsEmployees/', include('api_ViewSetsEmployees.urls')),

    
]
