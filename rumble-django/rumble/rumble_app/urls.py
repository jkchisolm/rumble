from django.urls import path
from . import views

app_name = 'rumble'
urlpatterns = [
    path('home/', views.index, name='index'),
    path('login/', views.login_user, name='login'),

]
