from django.urls import path
from app_accounts import views as UserView


app_name='app_api'

urlpatterns=[
  path('register/',UserView.RegisterView.as_view() ),
]