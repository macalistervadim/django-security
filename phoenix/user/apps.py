import django.apps


class UserConfig(django.apps.AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "user"
    verbose_name = "Пользователь"
