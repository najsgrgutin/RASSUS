import jwt
from rest_framework import permissions
from rassus_service import settings


class IsAuthenticated(permissions.BasePermission):

    def has_permission(self, request, view):
        public_key = settings.JWT_PUBLIC_KEY
        key = '-----BEGIN PUBLIC KEY-----\n' + public_key + '\n-----END PUBLIC KEY-----'
        key_binary = key.encode('ascii')
        algorithm = settings.JWT_ALGORITHM
        token = request.META.get("HTTP_AUTHORIZATION").split(' ')[1]
        try:
            jwt.decode(token, key_binary, algorithms=algorithm)
            return True
        except Exception:
            return False
