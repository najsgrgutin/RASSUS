from django.urls import path

from . import views

urlpatterns = [
    path('', views.MailApiView, name='mail-view'),
]
