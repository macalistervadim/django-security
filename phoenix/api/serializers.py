import django.contrib.auth.models
import rest_framework

import user.models


class UserSerializer(rest_framework.serializers.ModelSerializer):
    class Meta:
        model = django.contrib.auth.models.User
        fields = "__all__"


class ProfileSerializer(rest_framework.serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = user.models.Profile
        fields = ["user", "birthday"]
