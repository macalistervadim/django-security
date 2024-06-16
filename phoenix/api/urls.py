import django.urls
import rest_framework.routers

import api.views


router = rest_framework.routers.DefaultRouter()
router.register(r"profiles", api.views.ProfileViewSet)


urlpatterns = [
    django.urls.path("", django.urls.include(router.urls)),
]
