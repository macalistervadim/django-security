import django.contrib
import django.contrib.auth.admin
import django.contrib.auth.models

import user.models


class ProfileInline(django.contrib.admin.TabularInline):
    model = user.models.Profile
    can_delete = False


class UserAdmin(django.contrib.auth.admin.UserAdmin):
    inlines = (ProfileInline,)


django.contrib.admin.site.unregister(django.contrib.auth.models.User)
django.contrib.admin.site.register(
    django.contrib.auth.models.User,
    UserAdmin,
)
