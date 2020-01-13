from rest_framework import serializers


class MailSerializer(serializers.Serializer):
    recipients = serializers.ListField(child=serializers.CharField())
    subject = serializers.CharField()
    body = serializers.CharField()
    # pdf_of_mail = serializers.FileField(write_only=True)  # ako će trebati pdf slati

    def validate(self, attrs):
        # nekakva validacija
        return attrs
