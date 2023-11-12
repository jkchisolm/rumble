from django.shortcuts import render, redirect, HttpResponse, get_object_or_404
from .models import Profile
import sqlite3 as sl

db = "rumble_app_profile.db"

# Create your views here.
def index(request):
    return render(request, 'index.html')


def home(request):
    """

    checks whether the user is logged in and returns appropriately.

    :return: renders login.html if not logged in,
                redirects to client otherwise.
    """
    if not request.session.get('logged_in'):
        return render(request, 'login.html')
    else:
        return redirect(request, 'home.html')


def db_create_profile(un: str, pw: str) -> None:
    """
    :param un:
    :param pw:
    :return: None
    """
    pass
