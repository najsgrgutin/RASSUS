from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from mail_service.serializers import MailSerializer


class MailApiView(APIView):

    def post(self, request, *args, **kwargs):
        serializer = MailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        vd = serializer.validated_data

        subject = vd['subject']
        message = vd['body']
        recipients = vd['recipients']

        if send_mail(subject=subject, message=message, from_email=settings.DEFAULT_FROM_EMAIL, recipient_list=recipients):
            return Response(status=status.HTTP_200_OK)

        return Response(data={'error': 'Service was not able to send mail.'}, status=status.HTTP_400_BAD_REQUEST)
