import jwt
from rest_framework import permissions
from rassus_service import settings


class IsAuthenticated(permissions.BasePermission):

    def has_permission(self, request, view):
        public_key = settings.JWT_PUBLIC_KEY
        public_key = '-----BEGIN PUBLIC KEY-----\n' + public_key + '\n-----END PUBLIC KEY-----'
        public_key = public_key.encode('ascii')

        algorithm = settings.JWT_ALGORITHM
        try:
            token = request.META.get("HTTP_AUTHORIZATION").split(' ')[1]
        except IndexError:
            raise Exception("You must provide HTTP_AUTHORIZATION header.")
        except AttributeError:
            raise Exception("You must provide HTTP_AUTHORIZATION header.")

        try:
            jwt.decode(token, public_key, algorithms=algorithm)
            return True
        except jwt.InvalidAudienceError:
            return True
        except Exception as e:
            print(e)
            return False
