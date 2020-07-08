from .models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer

# User Viewset


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = UserSerializer

    # def get_queryset(self):
    #     return self.request.User.customers.all()

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)