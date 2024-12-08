# -*- encoding: utf-8 -*- apps/home/urls.py

"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.urls import path, re_path
from apps.home.views import index

urlpatterns = [

    # The home page
    path('', index, name='index'),

]
