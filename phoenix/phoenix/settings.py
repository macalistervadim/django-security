import os
import pathlib

import django.utils.translation
import dotenv


dotenv.load_dotenv()

BASE_DIR = pathlib.Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", default="key")

DEBUG = os.getenv("DJANGO_DEBUG", default="False")

ALLOWED_HOSTS = os.getenv("DJANGO_ALLOWED_HOSTS", default="*").split(",")

INSTALLED_APPS = [
    "homepage.apps.HomepageConfig",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "phoenix.urls"

if DEBUG:
    INSTALLED_APPS.append(
        "debug_toolbar",
    )
    MIDDLEWARE.insert(0, "debug_toolbar.middleware.DebugToolbarMiddleware")
    INTERNAL_IPS = ["127.0.0.1", "localhost"]

TEMPLATES_DIRS = BASE_DIR / "templates"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [TEMPLATES_DIRS],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "phoenix.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": os.getenv("DB_ENGINE", default="django.db.backends.sqlite3"),
        "NAME": os.getenv("POSTGRES_DB", default="default_db_name"),
        "USER": os.getenv("POSTGRES_USER", default="default_db_user"),
        "PASSWORD": os.getenv("POSTGRES_PASSWORD", default="default_db_password"),
        "HOST": os.getenv("POSTGRES_HOST", default="localhost"),
        "PORT": os.getenv("POSTGRES_PORT", default="5432"),
    },
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "ru"

LANGUAGES = [
    ("en", django.utils.translation.gettext_lazy("English")),
    ("ru", django.utils.translation.gettext_lazy("Russian")),
]

LOCALE_PATHS = [
    BASE_DIR / "locale",
]

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = "static/"
REACT_BUILD_DIR = [BASE_DIR / "static_dev"]
STATICFILES_DIRS = REACT_BUILD_DIR
STATIC_ROOT = BASE_DIR / "static"

MEDIA_ROOT = BASE_DIR / "media"
MEDIA_URL = "/media/"

STATIC_URL = "static/"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
