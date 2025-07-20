

from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    #base api
    path('api/v1/', include('app_api.urls')),
    
    
]
