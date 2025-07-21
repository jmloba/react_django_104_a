from django.urls import path
from app_posts.views import Post_Generics, PostDetail_Generics


app_name='app_posts'

urlpatterns=[
  path('post_generics/', Post_Generics.as_view() , name='post-generics'),
  
  path('post_generics/<int:pk>', PostDetail_Generics.as_view() , name='post-detail-generics'),
  
]