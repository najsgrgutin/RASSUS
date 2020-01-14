from django.urls import path

from . import views

urlpatterns = [
    path('send-mail/', views.MailApiView.as_view(), name='mail-view'),
]
