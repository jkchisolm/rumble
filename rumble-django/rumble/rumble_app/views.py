from django.shortcuts import render, redirect, HttpResponse, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from .models import Profile, User
import sqlite3 as sl

db = "rumble_app_profile.db"


# Create your views here.
def index(request):
    return render(request, 'rumble_app/index.html')


def login_user(request):
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirect to a success page.
            redirect('home')
        else:
            # Return an 'invalid login' error message.
            render(request, 'login.html')
    else:
        return render(request, 'login.html')
