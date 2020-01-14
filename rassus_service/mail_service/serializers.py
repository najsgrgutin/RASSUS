from rest_framework import serializers


class MailSerializer(serializers.Serializer):
    to = serializers.ListField(child=serializers.CharField())
    subject = serializers.CharField()
    body = serializers.CharField()

    # def validate(self, attrs):
    #     # nekakva validacija
    #     return attrs
